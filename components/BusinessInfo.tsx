import React from 'react';
import { Business } from '../types';
import { CheckBadgeIcon } from './icons/CheckBadgeIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { GlobeAltIcon } from './icons/GlobeAltIcon';

interface BusinessInfoProps {
  business: Business;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({ business }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
      <h3 className="text-xl font-bold">Business Information</h3>
      {business.isVerified && (
        <div className="flex items-center space-x-2 text-emerald-600">
          <CheckBadgeIcon className="h-6 w-6" />
          <span>Verified Business</span>
        </div>
      )}
      <p className="text-gray-700">{business.description}</p>
      <div className="space-y-2">
        {business.phone && (
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-5 w-5 text-gray-500" />
            <a href={`tel:${business.phone}`} className="text-emerald-700 hover:underline">{business.phone}</a>
          </div>
        )}
        {business.website && (
          <div className="flex items-center space-x-2">
            <GlobeAltIcon className="h-5 w-5 text-gray-500" />
            <a href={business.website} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">{business.website}</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessInfo;
