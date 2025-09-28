import React from 'react';
import { Link } from 'react-router-dom';
import { Business } from '../types';
import StarRating from './StarRating';
import { BookmarkIcon } from './icons/BookmarkIcon'; 
import { useSavedBusinesses } from '../contexts/SavedBusinessesContext';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  const { isSaved, toggleSave } = useSavedBusinesses();
  const saved = isSaved(business.id);

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSave(business.id);
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/business/${business.id}`}>
        <div className="relative">
          <img className="h-48 w-full object-cover" src={business.heroImage} alt={business.name} />
          <button onClick={handleToggleSave} className="absolute top-2 right-2 p-2 bg-white/70 rounded-full hover:bg-white">
            <BookmarkIcon className={`h-6 w-6 ${saved ? 'text-emerald-500' : 'text-gray-500'}`} filled={saved} />
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500">{business.category} • {business.city}</p>
          <h3 className="text-xl font-bold mt-1">{business.name}</h3>
          <div className="flex items-center mt-2">
            <StarRating rating={business.avgRating} size="small" />
            <span className="text-gray-600 ml-2 text-sm">{business.reviewCount} reviews</span>
          </div>
          <p className="text-gray-700 mt-2 text-sm truncate">{business.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BusinessCard;
