import React from 'react';
import {
    BookIcon,
    RepoIcon,
    ProjectsIcon,
    PackageIcon,
    StarIcon,
} from '../../assets/icons';

interface HeaderNavProps {
    username: string;
    activeTab: string;
    onTabClick: (tabName: string) => void;
    repoCount: number;
    packageCount: number;
    starCount: number;
}

const TAB_CONFIG = [
    { name: 'overview', label: 'Overview', icon: BookIcon, count: null },
    { name: 'repositories', label: 'Repositories', icon: RepoIcon, count: 'repoCount' },
    { name: 'projects', label: 'Projects', icon: ProjectsIcon, count: null },
    { name: 'packages', label: 'Packages', icon: PackageIcon, count: 'packageCount' },
    { name: 'stars', label: 'Stars', icon: StarIcon, count: 'starCount' },
];

export const HeaderNav: React.FC<HeaderNavProps> = ({
    activeTab,
    onTabClick,
    repoCount,
    packageCount,
    starCount,
}) => {
    const counts = { repoCount, packageCount, starCount };
    const isActive = (tabName: string) => activeTab === tabName;

    return (
        <div className="bg-[#f6f8fa]">
            <div className="max-w-[1280px] mx-auto px-[32px]">
                <nav className="flex items-center gap-5">
                    {TAB_CONFIG.map(({ name, label, icon: Icon, count }) => (
                        <button
                            key={name}
                            onClick={() => onTabClick(name)}
                            className={`flex items-center gap-[8px] px-[16px] py-[8px] text-[14px] border-b-[2px]
                ${isActive(name)
                                    ? 'font-semibold text-[#1f2328] border-[#fd8c73]'
                                    : 'text-[#656d76] hover:text-[#1f2328] border-transparent'
                                }`}
                        >
                            <Icon size={16} /> {label}
                            {count && (
                                <span className="bg-[#e4e8ec] text-[#1f2328] text-[12px] font-medium px-[6px] px-2! py-0.5! rounded-xl">
                                    {counts[count as keyof typeof counts]}
                                </span>
                            )}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};
