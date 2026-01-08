import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-white mb-4">404</h1>
                <p className="text-2xl text-gray-300 mb-8">Page not found</p>
                <Link
                    to="/"
                    className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 inline-block"
                >
                    Go Home
                </Link>
            </div>
        </div>
    )
}
