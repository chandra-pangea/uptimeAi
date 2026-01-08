import { useState, useEffect } from 'react';

// Types
export interface ContributionDay {
    date: string;
    count: number;
    level: number; // 0-4 representing contribution intensity
}

export interface ContributionsData {
    total: {
        [year: string]: number;
    };
    contributions: ContributionDay[];
}

interface UseGitHubContributionsOptions {
    year?: 'last' | number; // 'last' for last 12 months or specific year
}

interface UseGitHubContributionsResult {
    contributions: ContributionDay[];
    totalContributions: number;
    loading: boolean;
    error: Error | null;
    refetch: () => void;
}

/**
 * Custom hook to fetch GitHub contribution data
 * Uses the github-contributions-api proxy for contribution data
 * @param username - GitHub username to fetch contributions for
 * @param options - Optional configuration for year selection
 * @returns Object containing contributions array, total count, loading state, error, and refetch function
 */
export const useGitHubContributions = (
    username: string,
    options: UseGitHubContributionsOptions = {}
): UseGitHubContributionsResult => {
    const { year = 'last' } = options;

    const [contributions, setContributions] = useState<ContributionDay[]>([]);
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchContributions = async () => {
        if (!username) {
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Using the github-contributions-api proxy
            const response = await fetch(
                `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
            );

            if (!response.ok) {
                throw new Error(`Failed to fetch contributions: ${response.status} ${response.statusText}`);
            }

            const data: ContributionsData = await response.json();

            if (data && data.contributions) {
                setContributions(data.contributions);

                // Calculate total contributions
                const total = data.contributions.reduce((sum, day) => sum + day.count, 0);
                setTotalContributions(total);
            }
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContributions();
    }, [username, year]);

    return {
        contributions,
        totalContributions,
        loading,
        error,
        refetch: fetchContributions,
    };
};

export default useGitHubContributions;
