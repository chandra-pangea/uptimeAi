import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()

    const isActive = (path: string) => location.pathname === path

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/github', label: 'GitHub' },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-2xl font-bold text-white">
                        Uptime
                    </Link>

                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive(link.path)
                                    ? 'bg-purple-600 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
