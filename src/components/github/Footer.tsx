import React from 'react';
import { GitHubLogo } from '../../assets/icons';

const Footer: React.FC = () => {
    return (
        <footer className="p-12!">
            <div className="max-w-[1280px] mx-auto px-[32px]">
                <div className="flex flex-wrap items-center justify-center gap-x-[16px] gap-y-[8px] text-[12px] text-[#656d76]">
                    {/* GitHub Logo */}
                    <a href="/" className="text-[#656d76] hover:text-[#1f2328]">
                        <GitHubLogo size={24} color="currentColor" />
                    </a>

                    {/* Copyright */}
                    <span>© 2025 GitHub, Inc.</span>

                    {/* Links */}
                    <a href="#" className="hover:text-[#0969da] font-medium hover:underline">Terms</a>
                    <a href="#" className="hover:text-[#0969da] font-medium hover:underline">Privacy</a>
                    <a href="#" className="hover:text-[#0969da] font-medium hover:underline">Security</a>
                    <a href="#" className="hover:text-[#0969da] font-medium hover:underline">Status</a>
                    <a href="#" className="hover:text-[#0969da] font-medium hover:underline">Docs</a>
                    <a href="#" className="hover:text-[#0969da] font-medium hover:underline">Contact</a>
                    <a href="#" className="hover:text-[#0969da] font-medium hover:underline">Manage cookies</a>
                    <a href="#" className="hover:text-[#0969da] font-medium hover:underline">Do not share my personal information</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
