import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} ReviewDotCom. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/about" className="hover:text-emerald-400 transition duration-150">About Us</Link>
                        <a href="#" className="hover:text-emerald-400 transition duration-150">Terms of Service</a>
                        <a href="#" className="hover:text-emerald-400 transition duration-150">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;