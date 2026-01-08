import React from 'react';
import ProfileSidebar from './ProfileSidebar';
import RepositoryCard from './RepositoryCard';
import ContributionGraph from './ContributionGraph';
import ActivitySection from './ActivitySection';
import type { UserProfile, Repository, ContributionDay } from '../../hooks';

interface OverviewTabProps {
    profile: UserProfile;
    repositories: Repository[];
    contributions: ContributionDay[];
    username: string;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ profile, repositories, contributions, username }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-12">
            <aside className="w-full lg:w-[256px] lg:flex-shrink-0">
                <ProfileSidebar profile={profile} />
            </aside>

            <div className="flex flex-col gap-3 min-w-0 !py-10">
                <div className="flex items-center justify-between">
                    <h2 className="text-[16px] font-normal text-[#1f2328]">Popular repositories</h2>
                    <a href="#" className="text-[12px] text-[#0969da] hover:underline">Customize your pins</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[16px]">
                    {repositories.map((repo) => (
                        <RepositoryCard key={repo.id} repo={repo} />
                    ))}
                </div>

                <ContributionGraph contributions={contributions} />
                <ActivitySection username={username} />
            </div>
        </div>
    );
};
