import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderToolbar } from './HeaderToolbar';
import { HeaderNav } from './HeaderNav';

interface HeaderProps {
    avatarUrl: string;
    username: string;
    repoCount?: number;
    packageCount?: number;
    starCount?: number;
}

const Header: React.FC<HeaderProps> = ({
    avatarUrl,
    username,
    repoCount = 0,
    packageCount = 0,
    starCount = 0,
}) => {
    const navigate = useNavigate();
    const { tab } = useParams<{ tab?: string }>();
    const activeTab = tab || 'overview';

    const handleTabClick = (tabName: string) => {
        if (tabName === 'overview') {
            navigate(`/${username}`);
        } else {
            navigate(`/${username}/${tabName}`);
        }
    };

    return (
        <header className="bg-[#f6f8fa] border-b border-[#d0d7de] p-3! px-5! pb-0!">
            <HeaderToolbar avatarUrl={avatarUrl} username={username} />
            <HeaderNav
                username={username}
                activeTab={activeTab}
                onTabClick={handleTabClick}
                repoCount={repoCount}
                packageCount={packageCount}
                starCount={starCount}
            />
        </header>
    );
};

export default Header;
