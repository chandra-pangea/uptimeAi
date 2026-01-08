import { useState, useEffect } from 'react';

// Types
export interface Repository {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
    fork: boolean;
    updated_at: string;
    parent?: {
        full_name: string;
    };
}

interface UseGitHubReposOptions {
    sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    direction?: 'asc' | 'desc';
    perPage?: number;
    page?: number;
}

interface UseGitHubReposResult {
    repositories: Repository[];
    loading: boolean;
    error: Error | null;
    refetch: () => void;
}

/**
 * Custom hook to fetch GitHub user repositories
 * @param username - GitHub username to fetch repos for
 * @param options - Optional configuration for sorting and pagination
 * @returns Object containing repositories array, loading state, error, and refetch function
 */
export const useGitHubRepos = (
    username: string,
    options: UseGitHubReposOptions = {}
): UseGitHubReposResult => {
    const {
        sort = 'updated',
        direction = 'desc',
        perPage = 6,
        page = 1,
    } = options;

    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchRepos = async () => {
        if (!username) {
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const params = new URLSearchParams({
                sort,
                direction,
                per_page: perPage.toString(),
                page: page.toString(),
            });

            const response = await fetch(
                `https://api.github.com/users/${username}/repos?${params}`
            );

            if (!response.ok) {
                throw new Error(`Failed to fetch repositories: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setRepositories(data);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRepos();
    }, [username, sort, direction, perPage, page]);

    return {
        repositories,
        loading,
        error,
        refetch: fetchRepos,
    };
};

export default useGitHubRepos;
