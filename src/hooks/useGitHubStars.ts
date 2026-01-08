import { useState, useEffect } from 'react';

interface UseGitHubStarsResult {
    starredCount: number;
    loading: boolean;
    error: Error | null;
}

/**
 * Custom hook to fetch GitHub starred repos count
 * @param username - GitHub username
 * @returns Object containing starred count, loading state, and error
 */
export const useGitHubStars = (username: string): UseGitHubStarsResult => {
    const [starredCount, setStarredCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchStars = async () => {
            if (!username) {
                setLoading(false);
                return;
            }

            try {
                // Fetch starred repos to get count
                const response = await fetch(
                    `https://api.github.com/users/${username}/starred?per_page=1`,
                    { method: 'HEAD' }
                );

                // Get count from Link header
                const linkHeader = response.headers.get('Link');
                if (linkHeader) {
                    const match = linkHeader.match(/page=(\d+)>; rel="last"/);
                    if (match) {
                        setStarredCount(parseInt(match[1], 10));
                    }
                } else {
                    // If no Link header, fetch and count
                    const dataResponse = await fetch(
                        `https://api.github.com/users/${username}/starred?per_page=100`
                    );
                    const data = await dataResponse.json();
                    setStarredCount(Array.isArray(data) ? data.length : 0);
                }
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Unknown error'));
            } finally {
                setLoading(false);
            }
        };

        fetchStars();
    }, [username]);

    return { starredCount, loading, error };
};

export default useGitHubStars;
