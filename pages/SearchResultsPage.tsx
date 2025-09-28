import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Business, GroundingChunk } from '../types';
import { searchBusinesses } from '../services/mockApi';
import { searchWithGrounding } from '../services/aiService';
import BusinessCard from '../components/BusinessCard';
import Spinner from '../components/Spinner';
import SEO from '../components/SEO';
import SourceCitations from '../components/SourceCitations';
import { SparklesIcon } from '../components/icons/SparklesIcon';

const SearchResultsPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [loading, setLoading] = useState(true);

    const [groundedResult, setGroundedResult] = useState<{ text: string; chunks: GroundingChunk[] } | null>(null);
    const [loadingGrounded, setLoadingGrounded] = useState(true);

    useEffect(() => {
        setLoading(true);
        setLoadingGrounded(true);

        searchBusinesses(query)
            .then(setBusinesses)
            .finally(() => setLoading(false));
        
        searchWithGrounding(query)
            .then(setGroundedResult)
            .finally(() => setLoadingGrounded(false));

    }, [query]);

    return (
        <>
            <SEO title={`Search results for "${query}" | ReviewDotCom`} description={`Find businesses and services related to ${query}.`} />
            <div>
                <h1 className="text-3xl font-bold mb-2">Search Results</h1>
                <p className="text-gray-600 mb-6">Showing results for: <span className="font-semibold">"{query}"</span></p>

                {loadingGrounded ? (
                    <div className="flex justify-center my-4"><Spinner /></div>
                ) : groundedResult && (
                    <div className="mb-8 p-4 bg-gray-50 rounded-lg border">
                         <div className="flex items-center">
                            <SparklesIcon className="h-6 w-6 text-emerald-600" />
                            <h2 className="ml-2 text-xl font-bold text-emerald-800">AI-Powered Result</h2>
                        </div>
                        <p className="mt-2">{groundedResult.text}</p>
                        <SourceCitations chunks={groundedResult.chunks} />
                    </div>
                )}

                {loading ? (
                     <div className="flex justify-center"><Spinner /></div>
                ) : businesses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {businesses.map(business => (
                            <BusinessCard key={business.id} business={business} />
                        ))}
                    </div>
                ) : (
                    <p>No businesses found matching your search.</p>
                )}
            </div>
        </>
    );
};

export default SearchResultsPage;
