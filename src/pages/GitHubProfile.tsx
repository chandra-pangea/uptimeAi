import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/github/Header';
import Footer from '../components/github/Footer';
import { OverviewTab } from '../components/github/OverviewTab';
import { RepositoriesTab } from '../components/github/RepositoriesTab';
import { EmptyStateTab } from '../components/github/EmptyStateTab';
import {
    useGitHubProfile,
    useGitHubRepos,
    useGitHubContributions,
    useGitHubStars
} from '../hooks';

export type { UserProfile, Repository, ContributionDay } from '../hooks';

const GitHubProfile: React.FC = () => {
    const { username: urlUsername, tab } = useParams<{ username?: string; tab?: string }>();
    const username = urlUsername || 'shreeramk';
    const activeTab = tab || 'overview';

    const { profile, loading: profileLoading, error: profileError } = useGitHubProfile(username);
    const { repositories, loading: reposLoading } = useGitHubRepos(username, { perPage: 6 });
    const { contributions, loading: contributionsLoading } = useGitHubContributions(username);
    const { starredCount } = useGitHubStars(username);

    const loading = profileLoading || reposLoading || contributionsLoading;

    if (loading || !profile) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="flex flex-col items-center gap-4">
                    <svg className="animate-spin h-8 w-8 text-[#656d76]" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span className="text-[#656d76]">Loading profile...</span>
                </div>
            </div>
        );
    }

    if (profileError) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-[#1f2328] mb-2">Error Loading Profile</h2>
                    <p className="text-[#656d76]">{profileError.message}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header
                avatarUrl={profile.avatar_url}
                username={username}
                repoCount={profile.public_repos}
                packageCount={5}
                starCount={starredCount}
            />

            <main className="flex justify-center w-full">
                <div className="w-5/6 mx-auto px-[16px] md:px-[32px] py-10">
                    {activeTab === 'overview' && (
                        <OverviewTab
                            profile={profile}
                            repositories={repositories}
                            contributions={contributions}
                            username={username}
                        />
                    )}

                    {activeTab === 'repositories' && (
                        <RepositoriesTab profile={profile} repositories={repositories} />
                    )}

                    {activeTab === 'projects' && (
                        <EmptyStateTab profile={profile} type="projects" />
                    )}

                    {activeTab === 'packages' && (
                        <EmptyStateTab profile={profile} type="packages" />
                    )}

                    {activeTab === 'stars' && (
                        <EmptyStateTab profile={profile} type="stars" starredCount={starredCount} />
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default GitHubProfile;
