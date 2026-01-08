import React from 'react';
import type { Repository } from '../../hooks';
import { LANGUAGE_COLORS } from '../../assets/constants';

interface RepositoryCardProps {
    repo: Repository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo }) => {
    const getLanguageColor = (language: string | null): string => {
        if (!language) return '#858585';
        return LANGUAGE_COLORS[language] || '#858585';
    };

    // Mock forked from data based on repo name
    const getForkedFrom = (name: string): string | null => {
        const forkMap: { [key: string]: string } = {
            'Complete-Python-3-Bootcamp': 'Pierian-Data/Complete-Python-3-Bootcamp',
            'flutter_login_ui': 'Marcussacapuce/flutter_login_ui',
            'gitignore': 'github/gitignore',
            'node-opcua-logger': 'coussej/node-opcua-logger',
            'kafkajs': 'tulios/kafkajs',
            'node-opcua-1': 'node-opcua/node-opcua',
        };
        return forkMap[name] || null;
    };

    const forkedFrom = getForkedFrom(repo.name);

    return (
        <div className="bg-white border border-[#d0d7de] rounded-[6px] !p-4 flex flex-col gap-2">
            {/* Header row */}
            <div className="flex items-start justify-between mb-[4px]">
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0969da] font-semibold text-[14px] hover:underline"
                >
                    {repo.name}
                </a>
                <span className="text-[12px] border border-[#d0d7de] rounded-full !px-[8px] !py-[1px] text-[#656d76] font-medium ml-2 flex-shrink-0">
                    Public
                </span>
            </div>

            {/* Forked from */}
            {(repo.fork || forkedFrom) && (
                <p className="text-[12px] text-[#656d76] mb-[4px]">
                    Forked from <a href={`https://github.com/${forkedFrom || ''}`} className="text-[#0969da] hover:underline">{forkedFrom || 'another repo'}</a>
                </p>
            )}

            {/* Description */}
            {repo.description && (
                <p className="text-[12px] text-[#656d76] mb-[16px] line-clamp-2">
                    {repo.description}
                </p>
            )}

            {/* Spacer if no description */}
            {!repo.description && <div className="mb-[16px]"></div>}

            {/* Language */}
            <div className="flex items-center text-[12px] text-[#656d76] mt-auto">
                {repo.language && (
                    <div className="flex items-center">
                        <span
                            className="w-[12px] h-[12px] rounded-full inline-block mr-[4px]"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                        ></span>
                        <span>{repo.language}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RepositoryCard;
