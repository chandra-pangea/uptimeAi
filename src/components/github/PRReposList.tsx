import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { GITHUB_COLORS } from '../../assets/constants';
import type { ActivityRepo } from '../../hooks';

interface PRReposListProps {
    prRepos: ActivityRepo[];
}

export const PRReposList: React.FC<PRReposListProps> = ({ prRepos }) => {
    return (
        <div className="ml-[22px] space-y-1!">
            {prRepos.map((repo, index) => (
                <div key={index} className="flex items-center justify-between py-[2px] group">
                    <a href={`https://github.com/${repo.name}`} className="text-[13px] text-[#0969da] hover:underline">
                        {repo.name}
                    </a>
                    <div className="flex items-center gap-[6px]">
                        {[
                            { count: repo.merged, label: 'merged', color: GITHUB_COLORS.statusMerged },
                            { count: repo.open, label: 'open', color: GITHUB_COLORS.statusOpen }
                        ].map((status, idx) =>
                            status.count > 0 && (
                                <span key={idx} className="flex items-center gap-[4px] text-[12px]">
                                    <span
                                        className="text-white px-1! py-0.5! rounded-full font-medium text-[11px]"
                                        style={{ backgroundColor: status.color }}
                                    >
                                        {status.count}
                                    </span>
                                    <span className="text-[#656d76]">{status.label}</span>
                                </span>
                            )
                        )}
                        <button className="text-[#656d76] hover:text-[#1f2328] p-1! opacity-0 group-hover:opacity-100 transition-opacity">
                            <HiDotsVertical size={16} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
