import React from 'react';
import type { UserProfile } from '../../hooks';
import { ProfileInfo } from './ProfileInfo';
import { ProfileAchievements } from './ProfileAchievements';

interface ProfileSidebarProps {
    profile: UserProfile;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ profile }) => {
    const socialLinks = {
        linkedin: profile.login === 'shreeramk' ? 'in/shreeramkushwaha' : null,
    };

    return (
        <div className="w-full flex flex-col gap-4 !py-10">
            <div className="relative mb-[16px]">
                <img
                    src={profile.avatar_url}
                    alt={profile.name || profile.login}
                    className="w-[296px] aspect-square rounded-full border border-[#d0d7de]"
                />
                <button className="absolute bottom-[8px] right-[8px] w-[32px] h-[32px] bg-white rounded-full border border-[#d0d7de] flex items-center justify-center shadow-sm hover:bg-[#f6f8fa]">
                    <span className="text-[14px]">🎯</span>
                </button>
            </div>

            <div className="mb-[20px]">
                <h1 className="text-[26px] font-semibold text-[#1f2328] leading-[1.25]">
                    {profile.name || profile.login}
                </h1>
                <p className="text-[20px] font-light text-[#656d76] leading-[1.5]">{profile.login}</p>
            </div>

            {profile.bio && (
                <p className="text-[14px] text-[#1f2328] mb-[16px]">{profile.bio}</p>
            )}

            <button className="w-full py-[5px] px-[16px] text-[14px] font-medium text-[#1f2328] bg-[#f6f8fa] border border-[#d0d7de] rounded-[6px] hover:bg-[#f3f4f6] hover:border-[#1b1f2426] transition-colors mb-[16px]">
                Edit profile
            </button>

            <ProfileInfo profile={profile} socialLinks={socialLinks} />
            <ProfileAchievements />
        </div>
    );
};

export default ProfileSidebar;
