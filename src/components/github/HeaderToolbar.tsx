import React from 'react';
import {
    MenuIcon,
    GitHubLogo,
    SearchIcon,
    PlusIcon,
    CaretIcon,
    IssuesIcon,
    PullRequestIcon,
    InboxIcon,
} from '../../assets/icons';
import { RiCopilotLine } from 'react-icons/ri';

interface HeaderToolbarProps {
    avatarUrl: string;
    username: string;
}

export const HeaderToolbar: React.FC<HeaderToolbarProps> = ({ avatarUrl, username }) => {
    return (
        <div className="mx-auto">
            <div className="flex items-center justify-between h-[64px]">
                <div className="flex items-center gap-[16px]">
                    <button className="flex items-center justify-center w-[32px] h-[32px] border border-[#d0d7de] rounded-md bg-[#f6f8fa] hover:bg-[#f3f4f6]">
                        <MenuIcon size={16} color="#1f2328" />
                    </button>

                    <a href="/" className="text-[#1f2328]">
                        <GitHubLogo size={32} color="#1f2328" />
                    </a>

                    <a
                        href={`https://github.com/${username}`}
                        className="text-[14px] font-semibold text-[#1f2328] hover:underline"
                    >
                        {username}
                    </a>
                </div>

                <div className="flex justify-end items-center gap-[8px]">
                    <div className="hidden md:flex items-center border border-[#d0d7de] rounded-md h-[32px] px-[12px] w-[272px] bg-[#f6f8fa] hover:bg-white focus-within:bg-white px-2.5! py-1!">
                        <SearchIcon size={16} color="#656d76" />
                        <span className="ml-[8px] text-[14px] text-[#656d76]">Type</span>
                        <kbd className="ml-[4px] h-[20px] w-[20px] text-[12px] text-[#656d76] bg-white border border-[#d0d7de] rounded flex items-center justify-center">
                            /
                        </kbd>
                        <span className="ml-[4px] text-[14px] text-[#656d76]">to search</span>
                    </div>

                    <button className="flex items-center h-[32px] border-1 border-[#d0d7de] rounded px-[8px]! text-[#656d76] hover:text-[#1f2328]">
                        <RiCopilotLine size={18} />
                        <CaretIcon size={18} />
                    </button>

                    <div className="hidden md:block w-[1px] h-[24px] bg-[#d0d7de] mx-[4px]"></div>

                    <div className="flex items-center gap-2">
                        <button className="flex items-center h-[32px] border-1 border-[#d0d7de] rounded px-[8px]! text-[#656d76] hover:text-[#1f2328]">
                            <PlusIcon size={18} />
                            <CaretIcon size={18} />
                        </button>

                        <button className="flex items-center justify-center w-[32px] border-1 border-[#d0d7de] rounded h-[32px] text-[#656d76] hover:text-[#1f2328]">
                            <IssuesIcon size={16} />
                        </button>

                        <button className="flex items-center justify-center w-[32px] border-1 border-[#d0d7de] rounded h-[32px] text-[#656d76] hover:text-[#1f2328]">
                            <PullRequestIcon size={16} />
                        </button>

                        <button className="flex items-center justify-center w-[32px] border-1 border-[#d0d7de] rounded h-[32px] text-[#656d76] hover:text-[#1f2328]">
                            <InboxIcon size={16} />
                        </button>

                        <button className="flex items-center ml-[8px]">
                            <img
                                src={avatarUrl}
                                alt="Profile"
                                className="w-[32px] h-[32px] rounded-full"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
