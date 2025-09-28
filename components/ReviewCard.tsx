import React from 'react';
import { Review } from '../types';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from './icons/UserCircleIcon';
import { ThumbsUpIcon } from './icons/ThumbsUpIcon';
import { ThumbsDownIcon } from './icons/ThumbsDownIcon';
import { GoogleIcon } from './icons/GoogleIcon';
import OwnerReply from './OwnerReply';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
            <UserCircleIcon className="h-10 w-10 text-gray-400" />
            <div className="ml-3">
              <p className="font-bold">
                  {review.isAnonymous ? 'Anonymous' : <Link to={`/user/${review.userId}`} className="hover:underline">{review.userName}</Link>}
              </p>
              <p className="text-sm text-gray-500">Posted on {formatDate(review.createdAt)}</p>
            </div>
        </div>
        <div className="flex items-center space-x-2">
          {review.source === 'Google' && <GoogleIcon className="h-5 w-5" title="From Google" />}
          <StarRating rating={review.rating} size="small" />
        </div>
      </div>
      <p className="my-4 text-gray-700">{review.text}</p>
      
      {review.photos && review.photos.length > 0 && (
          <div className="flex space-x-2 my-4">
              {review.photos.map((photo, index) => (
                  <img key={index} src={photo.url} alt={photo.caption} className="w-24 h-24 object-cover rounded-md" />
              ))}
          </div>
      )}

      <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 hover:text-emerald-600">
                  <ThumbsUpIcon className="h-5 w-5" />
                  <span>{review.upvotes}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-red-600">
                  <ThumbsDownIcon className="h-5 w-5" />
                  <span>{review.downvotes}</span>
              </button>
          </div>
      </div>

      {review.ownerReply && <OwnerReply reply={review.ownerReply} />}
    </div>
  );
};

export default ReviewCard;
