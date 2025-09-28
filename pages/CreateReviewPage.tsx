import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { useAuth } from '../contexts/AuthContext';

const CreateReviewPage: React.FC = () => {
    const { businessId } = useParams<{ businessId?: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) {
            alert('You must be logged in to write a review.');
            navigate('/login');
            return;
        }
        if (rating === 0) {
            alert('Please select a rating.');
            return;
        }
        if (!reviewText.trim()) {
            alert('Please write your review.');
            return;
        }

        setIsSubmitting(true);
        console.log({
            businessId,
            userId: user.id,
            rating,
            text: reviewText,
        });
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Review submitted successfully!');
            navigate(businessId ? `/business/${businessId}` : '/');
        }, 1000);
    };

    return (
        <>
            <SEO title="Write a Review | ReviewDotCom" description="Share your experience by writing a review." />
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
                <h1 className="text-3xl font-bold mb-6">Write a Review</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">Your Rating</label>
                        <StarRating rating={rating} onRatingChange={setRating} interactive size="large" />
                    </div>
                    <div>
                        <label htmlFor="reviewText" className="block text-lg font-medium text-gray-700">Your Review</label>
                        <textarea
                            id="reviewText"
                            rows={8}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                            placeholder="Tell us about your experience..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button type="submit" fullWidth disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit Review'}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateReviewPage;
