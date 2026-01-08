import { useState, useEffect } from 'react';

export interface ActivityStats {
    commits: number;
    pullRequests: number;
    codeReview: number;
    issues: number;
    contributedRepos: string[];
}

const MOCK_STATS: ActivityStats = {
    commits: 83,
    pullRequests: 17,
    codeReview: 0,
    issues: 0,
    contributedRepos: ['UptimeAI/uptime_webapp', 'UptimeAI/uptime_server', 'UptimeAI/uptime_ml']
};

export const useActivityStats = (username: string) => {
    const [activityStats, setActivityStats] = useState<ActivityStats>(MOCK_STATS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch activity stats: ${response.statusText}`);
                }

                const events = await response.json();

                const pushEvents = events.filter((e: any) => e.type === 'PushEvent');
                const prEvents = events.filter((e: any) => e.type === 'PullRequestEvent');
                const reviewEvents = events.filter((e: any) => e.type === 'PullRequestReviewEvent');
                const issueEvents = events.filter((e: any) => e.type === 'IssuesEvent');

                const total = pushEvents.length + prEvents.length + reviewEvents.length + issueEvents.length;

                if (total > 0) {
                    const repos = new Set<string>();
                    events.forEach((e: any) => {
                        if (e.repo?.name) repos.add(e.repo.name);
                    });

                    setActivityStats({
                        commits: Math.round((pushEvents.length / total) * 100),
                        pullRequests: Math.round((prEvents.length / total) * 100),
                        codeReview: Math.round((reviewEvents.length / total) * 100),
                        issues: Math.round((issueEvents.length / total) * 100),
                        contributedRepos: Array.from(repos).slice(0, 3)
                    });
                }
            } catch (err) {
                console.error('Error fetching activity stats:', err);
                setError(err instanceof Error ? err : new Error('Unknown error'));
                // Keep using mock data on error
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchStats();
        }
    }, [username]);

    return { activityStats, loading, error };
};
