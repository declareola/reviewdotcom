import React from 'react';
import { useSavedBusinesses } from '../contexts/SavedBusinessesContext';
import BusinessCard from '../components/BusinessCard';
import Spinner from '../components/Spinner';
import SEO from '../components/SEO';

const SavedBusinessesPage: React.FC = () => {
    const { savedBusinesses, isLoading } = useSavedBusinesses();

    return (
        <>
            <SEO title="Saved Businesses | ReviewDotCom" description="View your saved businesses on ReviewDotCom." />
            <div>
                <h1 className="text-3xl font-bold mb-6">Saved Businesses</h1>
                {isLoading ? (
                    <div className="flex justify-center"><Spinner /></div>
                ) : savedBusinesses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedBusinesses.map(business => (
                            <BusinessCard key={business.id} business={business} />
                        ))}
                    </div>
                ) : (
                    <p>You have no saved businesses yet.</p>
                )}
            </div>
        </>
    );
};

export default SavedBusinessesPage;
