import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { CommitIcon, PullRequestIcon } from '../../assets/icons';
import { useGitHubActivity } from '../../hooks';
import { PRReposList } from './PRReposList';

interface ActivitySectionProps {
    username?: string;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ username = 'shreeramk' }) => {
    const { activityData } = useGitHubActivity(username);

    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const currentYear = new Date().getFullYear();

    return (
        <div className="pt-[24px] mt-[16px]">
            <h2 className="text-[16px] font-normal text-[#1f2328] mb-[16px]">Contribution activity</h2>

            <div className="flex items-center gap-[8px] mb-[16px]">
                <span className="text-[14px] font-normal text-[#1f2328]">{currentMonth}</span>
                <span className="text-[14px] text-[#656d76]">{currentYear}</span>
                <div className='w-full h-[1px] bg-[#d0d7de]'></div>
            </div>

            <div className="space-y-[12px]">
                <div className="flex items-start gap-[8px]">
                    <div className="mt-[2px] w-[16px] h-[16px] bg-white border-[2px] border-[#d0d7de] rounded-full flex-shrink-0"></div>

                    <div className="flex-1 flex items-start justify-between min-h-[20px]">
                        <div className="flex items-center gap-[6px] text-[13px] text-[#1f2328]">
                            <CommitIcon size={16} color="#656d76" />
                            <span>Created <strong className="font-semibold">{activityData.commits} commits</strong> in <strong className="font-semibold">{activityData.repos} repositories</strong></span>
                        </div>
                        <button className="text-[#656d76] hover:text-[#1f2328] p-[2px] flex-shrink-0">
                            <HiDotsVertical size={16} />
                        </button>
                    </div>
                </div>

                <div className="flex items-start gap-2!">
                    <div className="mt-[2px] w-[16px] h-[16px] bg-white border-[2px] border-[#d0d7de] rounded-full flex-shrink-0"></div>

                    <div className="flex-1">
                        <div className="flex items-start justify-between min-h-[20px] mb-1!">
                            <div className="flex items-center gap-2! text-[13px] text-[#1f2328]">
                                <PullRequestIcon size={16} color="#656d76" />
                                <span>Opened <strong className="font-semibold">{activityData.prs} pull requests</strong> in <strong className="font-semibold">{activityData.prRepos.length} repositories</strong></span>
                            </div>
                            <button className="text-[#656d76] hover:text-[#1f2328] p-1! flex-shrink-0">
                                <HiDotsVertical size={16} />
                            </button>
                        </div>

                        <PRReposList prRepos={activityData.prRepos} />
                    </div>
                </div>
            </div>

            <button className="w-full my-4! py-1! text-[14px] text-[#0969da] border border-[#d0d7de] rounded-[6px] hover:bg-[#f6f8fa]">
                Show more activity
            </button>

            <p className="text-[12px] text-[#656d76] mt-[24px] text-center">
                Seeing something unexpected? Take a look at the <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile" className="text-[#0969da] hover:underline">GitHub profile guide</a>.
            </p>
        </div>
    );
};

export default ActivitySection;
