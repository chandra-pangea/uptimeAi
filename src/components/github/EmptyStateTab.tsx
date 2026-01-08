import React from 'react';
import ProfileSidebar from './ProfileSidebar';
import type { UserProfile } from '../../hooks';

interface EmptyStateTabProps {
    profile: UserProfile;
    type: 'projects' | 'packages' | 'stars';
    starredCount?: number;
}

const EMPTY_STATE_CONFIG = {
    projects: {
        icon: (
            <svg className="mx-auto mb-[16px] text-[#656d76]" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z" />
            </svg>
        ),
        title: 'Projects',
        description: 'Plan and track work across repositories with Projects. Create a project to organize issues and pull requests.',
        action: <button className="mt-[16px] h-[32px] w-[128px] px-[16px] bg-[#2da44e] text-white text-[14px] font-medium rounded-[6px] hover:bg-[#2c974b] cursor-pointer">New project</button>
    },
    packages: {
        icon: (
            <svg className="mx-auto mb-[16px] text-[#656d76]" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z" />
            </svg>
        ),
        title: 'Packages',
        description: 'Publish and manage packages on GitHub. Host your packages alongside your code.',
        action: <a href="#" className="mt-[16px] inline-block text-[14px] text-[#0969da] hover:underline">Learn more about GitHub Packages</a>
    },
    stars: {
        icon: (
            <svg className="mx-auto mb-[16px] text-[#656d76]" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
            </svg>
        ),
        title: 'Stars',
        description: 'You can star repositories to keep track of projects you find interesting.',
        action: null
    }
};

export const EmptyStateTab: React.FC<EmptyStateTabProps> = ({ profile, type, starredCount }) => {
    const config = EMPTY_STATE_CONFIG[type];
    const title = type === 'stars' && starredCount !== undefined ? `${config.title} (${starredCount})` : config.title;

    return (
        <div className="flex flex-col lg:flex-row gap-12!">
            <aside className="w-full lg:w-[256px] lg:flex-shrink-0">
                <ProfileSidebar profile={profile} />
            </aside>
            <div className="flex flex-col gap-12 items-center !py-10 w-full">
                <div className="border border-[#d0d7de] rounded-[6px] bg-white p-[48px] text-center !p-4 flex flex-col items-center gap-3 w-full">
                    <div className="flex items-center justify-center">
                        {config.icon}
                    </div>
                    <h2 className="text-[20px] font-semibold text-[#1f2328] mb-[8px]">{title}</h2>
                    <p className="text-[14px] text-[#656d76] mx-auto">
                        {config.description}
                    </p>
                    {config.action}
                </div>
            </div>
        </div>
    );
};
