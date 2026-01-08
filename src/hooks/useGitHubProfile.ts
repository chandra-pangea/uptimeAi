import { useState, useEffect } from 'react';

// Types
export interface UserProfile {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    company: string;
    location: string;
    email: string;
    blog: string;
    twitter_username: string;
    public_repos: number;
    followers: number;
    following: number;
}

interface UseGitHubProfileResult {
    profile: UserProfile | null;
    loading: boolean;
    error: Error | null;
    refetch: () => void;
}

/**
 * Custom hook to fetch GitHub user profile data
 * @param username - GitHub username to fetch profile for
 * @returns Object containing profile data, loading state, error, and refetch function
 */
export const useGitHubProfile = (username: string): UseGitHubProfileResult => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchProfile = async () => {
        if (!username) {
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch profile: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setProfile(data);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [username]);

    return {
        profile,
        loading,
        error,
        refetch: fetchProfile,
    };
};

export default useGitHubProfile;
