import React from 'react';
import ProfileSidebar from './ProfileSidebar';
import type { UserProfile, Repository } from '../../hooks';

interface RepositoriesTabProps {
    profile: UserProfile;
    repositories: Repository[];
}

export const RepositoriesTab: React.FC<RepositoriesTabProps> = ({ profile, repositories }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <aside className="w-full lg:w-[256px] lg:flex-shrink-0">
                <ProfileSidebar profile={profile} />
            </aside>
            <div className="flex flex-col gap-12! !py-10">
                <div className="rounded-[6px] bg-white flex flex-col !gap-4 !px-10">
                    <div className="p-[16px]">
                        <div className="flex items-center gap-[16px]">
                            <input
                                type="text"
                                placeholder="Find a repository..."
                                className="flex-1 h-[32px] !px-[15px] border border-[#d0d7de] rounded-[6px] text-[14px] focus:outline-none focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da]"
                            />
                            <button className="h-[32px] !px-[22px] bg-[#2da44e] text-white text-[14px] font-medium rounded-[6px] hover:bg-[#2c974b]">
                                New
                            </button>
                        </div>
                    </div>
                    <div className="divide-y divide-[#d0d7de] flex flex-col gap-4">
                        {repositories.map((repo) => (
                            <div key={repo.id} className="p-[16px] hover:bg-[#f6f8fa]">
                                <div className="flex items-start justify-between gap-2">
                                    <div className='flex flex-col gap-2 !mb-2 w-9/10'>
                                        <div>
                                            <a href={repo.html_url} className="text-[#0969da] font-semibold hover:underline">
                                                {repo.name}
                                            </a>
                                            <span className="!ml-[8px] text-[12px] border border-[#d0d7de] rounded-full !px-[10px] py-[1px] text-[#656d76]">
                                                Public
                                            </span>
                                        </div>
                                        {repo.description && (
                                            <p className="text-[14px] text-[#656d76] m-[4px]">{repo.description}</p>
                                        )}
                                        <div className="flex items-center gap-[16px] mt-[8px] !mx-4 text-[12px] text-[#656d76]">
                                            {repo.language && (
                                                <span className="flex items-center gap-[4px]">
                                                    <span className="w-[12px] h-[12px] rounded-full bg-[#3178c6]"></span>
                                                    {repo.language}
                                                </span>
                                            )}
                                            <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <button className="h-[28px] !px-[4px] border border-[#d0d7de] rounded-[6px] text-[12px] font-medium text-[#1f2328] hover:bg-[#f3f4f6]">
                                        ⭐ Star
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
