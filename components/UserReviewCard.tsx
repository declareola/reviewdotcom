import React from 'react';
import { Link } from 'react-router-dom';
import { UserReview } from '../types';
import StarRating from './StarRating';

interface UserReviewCardProps {
    review: UserReview;
}

const UserReviewCard: React.FC<UserReviewCardProps> = ({ review }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm text-gray-500">Reviewed</p>
                    <Link to={`/business/${review.businessId}`} className="text-lg font-bold text-emerald-700 hover:underline">
                        {review.businessName}
                    </Link>
                </div>
                <div className="text-right">
                    <StarRating rating={review.rating} size="small" />
                    <p className="text-xs text-gray-500 mt-1">{formatDate(review.createdAt)}</p>
                </div>
            </div>
            <p className="mt-2 text-gray-700">{review.text}</p>
        </div>
    );
};

export default UserReviewCard;
