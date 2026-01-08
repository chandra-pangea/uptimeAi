import React from 'react';
import { NoteIcon } from '../../assets/icons';
import { GITHUB_COLORS } from '../../assets/constants';
import type { ActivityStats } from '../../hooks';

interface ActivityOverviewProps {
    activityStats: ActivityStats;
}

export const ActivityOverview: React.FC<ActivityOverviewProps> = ({ activityStats }) => {
    return (
        <div className="bg-white px-4!">
            <h3 className="text-[16px] font-normal text-[#1f2328] mb-[16px]">Activity overview</h3>
            <div className="flex justify-between ">
                {/* Contributed repos - Dynamic */}
                <div className="flex items-start flex-shrink-0 mt-1!">
                    <NoteIcon size={16} color="#656d76" className="mt-[2px] flex-shrink-0" />
                    <div className="text-[#656d76] leading-[20px]">
                        <span>Contributed to </span>
                        {activityStats.contributedRepos.map((repo, index) => (
                            <span key={repo}>
                                <a href={`https://github.com/${repo}`} className="text-[#0969da] hover:underline">
                                    {repo}
                                </a>
                                {index < activityStats.contributedRepos.length - 1 && ','}
                                {index < activityStats.contributedRepos.length - 1 && <br />}
                            </span>
                        ))}
                        <br />
                        <span className="text-[#656d76]">and 13 other repositories</span>
                    </div>
                </div>
                <div className='h-[140px] w-0.5  border border-[#d0d7de] ml-10!'></div>
                {/* Cross/Quadrant Chart - Dynamic percentages */}
                <div className="flex-grow flex justify-center items-center">
                    <div className="relative" >
                        {/* SVG Cross Chart */}
                        <svg viewBox="0 0 200 140" className="w-full h-full">
                            {/* Vertical line (Code review - Pull requests) */}
                            <line x1="100" y1="15" x2="100" y2="125" stroke={GITHUB_COLORS.accentGreen} strokeWidth="2" />

                            {/* Horizontal line (Commits - Issues) */}
                            <line x1="30" y1="70" x2="170" y2="70" stroke={GITHUB_COLORS.accentGreen} strokeWidth="2" />

                            {/* Commits fill area */}
                            <polygon
                                points="100,70 40,60 40,80"
                                fill={GITHUB_COLORS.accentGreen}
                                fillOpacity="0.2"
                            />

                            {/* Left endpoint (Commits) */}
                            <circle cx="30" cy="70" r="5" fill={GITHUB_COLORS.accentGreen} />

                            {/* Center circle */}
                            <circle cx="100" cy="70" r="4" fill="white" stroke={GITHUB_COLORS.accentGreen} strokeWidth="2" />

                            {/* Bottom circle (Pull requests) */}
                            <circle cx="100" cy="105" r="3" fill="white" stroke={GITHUB_COLORS.accentGreen} strokeWidth="1.5" />
                        </svg>

                        {/* Labels with dynamic percentages */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[11px] text-[#656d76]">
                            Code review
                        </div>
                        <div className="absolute top-[65px] right-0 text-[11px] text-[#656d76]">
                            Issues
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[11px] text-[#656d76] text-center leading-[14px]">
                            <div>{activityStats.pullRequests}%</div>
                            <div>Pull requests</div>
                        </div>
                        <div className="absolute top-[55px] left-0 text-[11px] text-[#656d76] text-right leading-[14px]">
                            <div>{activityStats.commits}%</div>
                            <div>Commits</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
