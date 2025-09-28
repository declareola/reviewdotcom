import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Business } from '../types';
import { fetchBusinessById } from '../services/mockApi';
import Spinner from '../components/Spinner';
import StarRating from '../components/StarRating';
import ReviewCard from '../components/ReviewCard';
import Button from '../components/Button';
import AISummary from '../components/AISummary';
import BusinessInfo from '../components/BusinessInfo';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const BusinessPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchBusinessById(id)
        .then(setBusiness)
        .catch(() => setError('Failed to fetch business details.'))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-64"><Spinner /></div>;
  }

  if (error || !business) {
    return <div className="text-center text-red-500">{error || 'Business not found.'}</div>;
  }

  return (
    <>
      <SEO title={`${business.name} | ReviewDotCom`} description={business.description} />
      <StructuredData business={business} />
      <div className="space-y-8">
        <div>
          <img src={business.heroImage} alt={business.name} className="w-full h-64 object-cover rounded-lg" />
          <div className="mt-4">
            <h1 className="text-4xl font-bold">{business.name}</h1>
            <p className="text-lg text-gray-600">{business.subtitle}</p>
            <div className="flex items-center space-x-2 mt-2">
              <StarRating rating={business.avgRating} />
              <span className="text-gray-600">({business.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Reviews</h2>
                <Link to={`/create-review/${business.id}`}>
                    <Button>Write a Review</Button>
                </Link>
            </div>
            <AISummary reviews={business.reviews} />
            {business.reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="lg:col-span-1">
            <BusinessInfo business={business} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessPage;
