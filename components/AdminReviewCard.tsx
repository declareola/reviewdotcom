import React from 'react';
import { Link } from 'react-router-dom';
import { ReportedReview } from '../types';
import Button from './Button';

interface AdminReviewCardProps {
  review: ReportedReview;
  onAction: (reviewId: string, action: 'dismiss' | 'delete') => void;
}

const AdminReviewCard: React.FC<AdminReviewCardProps> = ({ review, onAction }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-red-200">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-bold">Reviewer: <span className="font-normal">{review.reviewerName}</span></p>
          <p className="font-bold">Business: <Link to={`/business/${review.businessId}`} className="text-emerald-600 hover:underline font-normal">{review.businessName}</Link></p>
          <p className="font-bold">Reported on: <span className="font-normal">{new Date(review.reportedAt).toLocaleString()}</span></p>
        </div>
        {review.reason && <p className="text-sm font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">Reason: {review.reason}</p>}
      </div>
      <blockquote className="my-3 p-3 border-l-4 border-gray-300 bg-gray-50 text-gray-700">
        "{review.reviewText}"
      </blockquote>
      <div className="flex justify-end space-x-2">
        <Button variant="secondary" onClick={() => onAction(review.reviewId, 'dismiss')}>Dismiss</Button>
        <Button onClick={() => onAction(review.reviewId, 'delete')}>Delete Review</Button>
      </div>
    </div>
  );
};

export default AdminReviewCard;
