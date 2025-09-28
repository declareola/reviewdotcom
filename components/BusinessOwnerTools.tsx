import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Business } from '../types';
import Button from './Button';

interface BusinessOwnerToolsProps {
  business: Business;
}

const BusinessOwnerTools: React.FC<BusinessOwnerToolsProps> = ({ business }) => {
  const { user } = useAuth();

  // Show tools only if the logged-in user is the owner of the business
  if (!user || user.id !== business.ownerId) {
    return null;
  }

  return (
    <div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-lg mt-6">
      <h3 className="text-lg font-bold text-emerald-800">Owner Tools</h3>
      <p className="text-emerald-700 mt-1 mb-4">Manage your business page and respond to reviews.</p>
      <div className="flex space-x-2">
        <Button variant="secondary">Edit Page</Button>
        <Button variant="secondary">View Analytics</Button>
      </div>
    </div>
  );
};

export default BusinessOwnerTools;
