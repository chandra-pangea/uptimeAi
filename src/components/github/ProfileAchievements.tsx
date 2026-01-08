import React from 'react';
import { ACHIEVEMENT_IMAGES, ORG_AVATARS } from '../../assets/constants';

export const ProfileAchievements: React.FC = () => {
    return (
        <>
            <div className="border-t border-[#d0d7de] pt-[16px] mb-[16px]">
                <h3 className="text-[16px] font-semibold text-[#1f2328] mb-[8px]">Achievements</h3>
                <div className="flex items-center gap-[4px] flex-wrap">
                    <div className="relative">
                        <img
                            src={ACHIEVEMENT_IMAGES.pullShark}
                            alt="Pull Shark"
                            className="w-[48px] h-[48px]"
                        />
                        <span className="absolute bottom-0 right-0 bg-[#1f2328] text-white text-[10px] font-medium px-[4px] py-[1px] rounded-full leading-none">x3</span>
                    </div>
                    <div className="relative">
                        <img
                            src={ACHIEVEMENT_IMAGES.yolo}
                            alt="YOLO"
                            className="w-[48px] h-[48px]"
                        />
                    </div>
                    <div className="relative">
                        <img
                            src={ACHIEVEMENT_IMAGES.quickdraw}
                            alt="Quickdraw"
                            className="w-[48px] h-[48px]"
                        />
                        <span className="absolute bottom-0 right-0 bg-[#1f2328] text-white text-[10px] font-medium px-[4px] py-[1px] rounded-full leading-none">x3</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#d0d7de] pt-[16px]">
                <h3 className="text-[16px] font-semibold text-[#1f2328] mb-[8px]">Organizations</h3>
                <div className="flex items-center gap-[4px]">
                    <a
                        href="https://github.com/UptimeAI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <img
                            src={ORG_AVATARS.uptimeAI}
                            alt="UptimeAI"
                            className="w-[32px] h-[32px] rounded border border-[#d0d7de] hover:border-[#656d76]"
                        />
                    </a>
                </div>
            </div>
        </>
    );
};
