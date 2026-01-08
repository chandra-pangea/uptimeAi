import React, { useState } from 'react';
import type { ContributionDay } from '../../hooks';
import { useActivityStats } from '../../hooks';
import { ORG_AVATARS, GITHUB_COLORS } from '../../assets/constants';
import { ContributionHeatmap } from './ContributionHeatmap';
import { ActivityOverview } from './ActivityOverview';
import { YearSelector } from './YearSelector';

interface ContributionGraphProps {
    contributions: ContributionDay[];
    username?: string;
}

const ContributionGraph: React.FC<ContributionGraphProps> = ({ contributions, username = 'shreeramk' }) => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const { activityStats } = useActivityStats(username);

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2012 }, (_, i) => currentYear - i);
    const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

    return (
        <div className="mt-[16px]">
            <div className="flex flex-wrap items-center justify-between px-[16px] py-[8px] gap-[8px] my-2!">
                <h2 className="text-[14px] text-[#1f2328]">
                    <span className="font-semibold">{totalContributions.toLocaleString()}</span> contributions in the last year
                </h2>
                <span className="text-[12px] text-[#656d76] cursor-pointer hover:text-[#0969da]">Contribution settings ▾</span>
            </div>

            <div className="flex gap-2">
                <div className="flex flex-col flex-grow border border-[#d0d7de] rounded-[6px] bg-white overflow-hidden">
                    <ContributionHeatmap contributions={contributions} />

                    <div className="flex flex-wrap items-center justify-between text-[12px] text-[#656d76] gap-[8px] !p-3">
                        <a href="#" className="hover:text-[#0969da]">Learn how we count contributions</a>
                        <div className="flex items-center gap-[4px]">
                            <span>Less</span>
                            <div className="flex gap-[2px]">
                                <div className="w-[10px] h-[10px] rounded-sm" style={{ backgroundColor: GITHUB_COLORS.contributionL0 }}></div>
                                <div className="w-[10px] h-[10px] rounded-sm" style={{ backgroundColor: GITHUB_COLORS.contributionL1 }}></div>
                                <div className="w-[10px] h-[10px] rounded-sm" style={{ backgroundColor: GITHUB_COLORS.contributionL2 }}></div>
                                <div className="w-[10px] h-[10px] rounded-sm" style={{ backgroundColor: GITHUB_COLORS.contributionL3 }}></div>
                                <div className="w-[10px] h-[10px] rounded-sm" style={{ backgroundColor: GITHUB_COLORS.contributionL4 }}></div>
                            </div>
                            <span>More</span>
                        </div>
                    </div>

                    <div className="flex items-center border-t border-[#d0d7de] gap-2 p-2!  mb-4! flex-wrap ">
                        <div className="flex items-center gap-[4px] m-2! border border-[#d0d7de] rounded  p-1!">
                            <img
                                src={ORG_AVATARS.uptimeAI}
                                alt="UptimeAI"
                                className="w-[24px] h-[24px] rounded border border-[#d0d7de]"
                            />
                            <span className="text-[12px] text-[#656d76]">@UptimeAI</span>
                        </div>
                        <div className="flex items-center gap-[4px] m-2! border border-[#d0d7de] rounded  p-1!">
                            <img
                                src={ORG_AVATARS.timescale}
                                alt="Timescale"
                                className="w-[24px] h-[24px] rounded border border-[#d0d7de]"
                            />
                            <span className="text-[12px] text-[#656d76]">@timescale</span>
                        </div>
                    </div>

                    <ActivityOverview activityStats={activityStats} />
                </div>

                <YearSelector
                    years={years}
                    selectedYear={selectedYear}
                    onYearSelect={setSelectedYear}
                />
            </div>
        </div>
    );
};

export default ContributionGraph;
