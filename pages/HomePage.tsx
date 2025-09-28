
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Fix: Removed .tsx extension from imports
import { SearchIcon } from '../components/icons/SearchIcon';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };
    
    return (
        <>
            <SEO 
                title="ReviewDotCom | Find Trusted Reviews for Nigerian Businesses"
                description="Your go-to platform for honest reviews on businesses, services, and institutions across Nigeria. Make informed decisions with ReviewDotCom."
            />
            <div className="flex flex-col min-h-screen">
                <Header />
                
                {/* Hero Section */}
                <main className="flex-grow">
                    <div className="relative bg-gray-800">
                        <div className="absolute inset-0">
                            <img
                                className="w-full h-full object-cover opacity-30"
                                src="https://picsum.photos/seed/homepage/1600/900"
                                alt="Abstract background of Lagos city"
                            />
                        </div>
                        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 text-center">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                                Find businesses you can trust.
                            </h1>
                            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-200">
                                Read, write, and share reviews on thousands of businesses and services across Nigeria.
                            </p>
                            <div className="mt-10 max-w-2xl mx-auto">
                                <form onSubmit={handleSearch} className="relative">
                                    <input
                                        type="search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="What are you looking for? (e.g., 'best amala in Abuja')"
                                        className="w-full pl-12 pr-4 py-4 border-transparent rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <SearchIcon className="h-6 w-6 text-gray-400" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Categories/Features section */}
                    <div className="bg-gray-50 py-16">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Explore Popular Categories</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <Link to="/search?q=restaurants" className="group block text-center">
                                    <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                        <span className="text-4xl" role="img" aria-label="Restaurant">🍽️</span>
                                    </div>
                                    <p className="mt-4 font-semibold text-gray-700">Restaurants</p>
                                </Link>
                                <Link to="/search?q=hospitals" className="group block text-center">
                                    <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                        <span className="text-4xl" role="img" aria-label="Hospital">🏥</span>
                                    </div>
                                    <p className="mt-4 font-semibold text-gray-700">Hospitals</p>
                                </Link>
                                <Link to="/search?q=government" className="group block text-center">
                                    <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                        <span className="text-4xl" role="img" aria-label="Government Building">🏛️</span>
                                    </div>
                                    <p className="mt-4 font-semibold text-gray-700">Govt. Agencies</p>
                                </Link>
                                <Link to="/search?q=hotels" className="group block text-center">
                                    <div className="w-24 h-24 mx-auto bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                        <span className="text-4xl" role="img" aria-label="Hotel">🏨</span>
                                    </div>
                                    <p className="mt-4 font-semibold text-gray-700">Hotels</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default HomePage;
