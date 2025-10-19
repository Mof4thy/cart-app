import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="py-20 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div> */}
                        {/* <div className="absolute top-60 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div> */}
                    </div>

                    {/* Hero Content */}
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                        <div className="text-center space-y-8">
                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                                    Welcome to{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                        NeoVault
                                    </span>
                                </h1>
                                <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
                                    Your next-generation shopping experience. Discover premium products with cutting-edge technology.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                                <Link
                                    to="/shop"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
                                >
                                    <span className="relative z-10">Explore Shop</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home