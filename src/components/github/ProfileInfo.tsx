import React from 'react';
import { PeopleIcon } from '../../assets/icons';
import type { UserProfile } from '../../hooks';
import { ProfileContacts } from './ProfileContacts';

interface ProfileInfoProps {
    profile: UserProfile;
    socialLinks: { linkedin: string | null };
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile, socialLinks }) => {
    return (
        <>
            <div className="flex items-center gap-[4px] text-[14px] mb-[16px] flex-wrap">
                <PeopleIcon size={16} color="#656d76" />
                <a href={`https://github.com/${profile.login}?tab=followers`} className="text-[#1f2328] hover:text-[#0969da] font-semibold">
                    {profile.followers}
                </a>
                <span className="text-[#656d76]">followers</span>
                <span className="text-[#656d76]">·</span>
                <a href={`https://github.com/${profile.login}?tab=following`} className="text-[#1f2328] hover:text-[#0969da] font-semibold">
                    {profile.following}
                </a>
                <span className="text-[#656d76]">following</span>
            </div>

            <ProfileContacts profile={profile} socialLinks={socialLinks} />
        </>
    );
};
