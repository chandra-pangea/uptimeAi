import { useState, useEffect } from 'react';

export interface ActivityRepo {
    name: string;
    merged: number;
    open: number;
}

export interface ActivityData {
    commits: number;
    repos: number;
    prs: number;
    prRepos: ActivityRepo[];
}

const MOCK_DATA: ActivityData = {
    commits: 56,
    repos: 11,
    prs: 29,
    prRepos: [
        { name: 'UptimeAI/uptime_webapp', merged: 16, open: 1 },
        { name: 'UptimeAI/uptime_ml', merged: 5, open: 0 },
        { name: 'UptimeAI/uptime_scripts', merged: 5, open: 0 },
        { name: 'UptimeAI/uptime_engine', merged: 3, open: 0 },
        { name: 'UptimeAI/uptime_ml_encrypted', merged: 3, open: 0 },
    ]
};

export const useGitHubActivity = (username: string) => {
    const [activityData, setActivityData] = useState<ActivityData>(MOCK_DATA);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchActivity = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch activity: ${response.statusText}`);
                }

                const events = await response.json();

                // Count different event types
                const pushEvents = events.filter((e: any) => e.type === 'PushEvent');
                const prEvents = events.filter((e: any) => e.type === 'PullRequestEvent');

                // Count commits from push events
                const commitCount = pushEvents.reduce((acc: number, e: any) =>
                    acc + (e.payload?.commits?.length || 0), 0);

                // Get unique repos from push events
                const repoSet = new Set(pushEvents.map((e: any) => e.repo?.name));

                // Group PRs by repo
                const prByRepo: { [key: string]: { merged: number; open: number } } = {};
                prEvents.forEach((e: any) => {
                    const repoName = e.repo?.name || 'unknown';
                    if (!prByRepo[repoName]) {
                        prByRepo[repoName] = { merged: 0, open: 0 };
                    }
                    if (e.payload?.action === 'closed' && e.payload?.pull_request?.merged) {
                        prByRepo[repoName].merged++;
                    } else if (e.payload?.action === 'opened') {
                        prByRepo[repoName].open++;
                    }
                });

                const prRepoList = Object.entries(prByRepo)
                    .map(([name, counts]) => ({ name, ...counts }))
                    .filter(r => r.merged > 0 || r.open > 0)
                    .slice(0, 5);

                // Only update if we have real data
                if (commitCount > 0 || prEvents.length > 0) {
                    setActivityData({
                        commits: commitCount || MOCK_DATA.commits,
                        repos: repoSet.size || MOCK_DATA.repos,
                        prs: prEvents.length || MOCK_DATA.prs,
                        prRepos: prRepoList.length > 0 ? prRepoList : MOCK_DATA.prRepos,
                    });
                }
            } catch (err) {
                console.error('Error fetching activity data:', err);
                setError(err instanceof Error ? err : new Error('Unknown error'));
                // Keep using mock data on error
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchActivity();
        }
    }, [username]);

    return { activityData, loading, error };
};
