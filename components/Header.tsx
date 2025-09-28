import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserCircleIcon } from './icons/UserCircleIcon';
import Button from './Button';

const Header: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-emerald-600">
                            ReviewDotCom
                        </Link>
                        <div className="hidden md:block ml-10">
                            <div className="flex items-baseline space-x-4">
                                <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-emerald-100 text-emerald-700' : 'text-gray-700 hover:bg-gray-100'}`}>Home</NavLink>
                                <NavLink to="/about" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-emerald-100 text-emerald-700' : 'text-gray-700 hover:bg-gray-100'}`}>About</NavLink>
                                <NavLink to="/news" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-emerald-100 text-emerald-700' : 'text-gray-700 hover:bg-gray-100'}`}>News</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {user ? (
                            <div className="relative ml-3 group">
                                <Link to="/profile" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                                    <UserCircleIcon className="h-8 w-8 text-gray-600" />
                                    <span className="hidden sm:inline font-medium text-gray-700">{user.name}</span>
                                </Link>
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible">
                                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                                    <Link to="/saved" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Saved Businesses</Link>
                                    {user.role === 'admin' && (
                                        <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admin Panel</Link>
                                    )}
                                    <hr className="my-1" />
                                    <button onClick={logout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                                </div>
                            </div>
                        ) : (
                            <Link to="/login">
                                <Button>Login</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
