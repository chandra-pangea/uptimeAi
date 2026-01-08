import React from 'react';
import {
    OrgIcon,
    LocationIcon,
    MailIcon,
    LinkIcon,
    LinkedInIcon,
    TwitterIcon,
} from '../../assets/icons';
import type { UserProfile } from '../../hooks';

interface ProfileContactsProps {
    profile: UserProfile;
    socialLinks: { linkedin: string | null };
}

export const ProfileContacts: React.FC<ProfileContactsProps> = ({ profile, socialLinks }) => {
    return (
        <ul className="space-y-[4px] text-[14px] text-[#656d76] mb-[16px]">
            {profile.company && (
                <li className="flex items-center gap-[8px]">
                    <OrgIcon size={16} color="#656d76" className="flex-shrink-0" />
                    <span className="text-[#1f2328]">
                        {profile.company.startsWith('@') ? (
                            <a href={`https://github.com/${profile.company.slice(1)}`} className="hover:text-[#0969da] hover:underline">
                                {profile.company}
                            </a>
                        ) : (
                            profile.company
                        )}
                    </span>
                </li>
            )}
            {profile.location && (
                <li className="flex items-center gap-[8px]">
                    <LocationIcon size={16} color="#656d76" className="flex-shrink-0" />
                    <span>{profile.location}</span>
                </li>
            )}
            {profile.email && (
                <li className="flex items-center gap-[8px]">
                    <MailIcon size={16} color="#656d76" className="flex-shrink-0" />
                    <a href={`mailto:${profile.email}`} className="text-[#0969da] hover:underline">
                        {profile.email}
                    </a>
                </li>
            )}
            {profile.blog && (
                <li className="flex items-center gap-[8px]">
                    <LinkIcon size={16} color="#656d76" className="flex-shrink-0" />
                    <a
                        href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0969da] hover:underline truncate"
                    >
                        {profile.blog.replace(/^https?:\/\//, '')}
                    </a>
                </li>
            )}
            {socialLinks.linkedin && (
                <li className="flex items-center gap-[8px]">
                    <LinkedInIcon size={16} color="#656d76" className="flex-shrink-0" />
                    <a
                        href={`https://linkedin.com/${socialLinks.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0969da]"
                    >
                        {socialLinks.linkedin}
                    </a>
                </li>
            )}
            {profile.twitter_username && (
                <li className="flex items-center gap-[8px]">
                    <TwitterIcon size={16} color="#656d76" className="flex-shrink-0" />
                    <a
                        href={`https://twitter.com/${profile.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0969da]"
                    >
                        @{profile.twitter_username}
                    </a>
                </li>
            )}
        </ul>
    );
};
