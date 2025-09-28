import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { UserReview } from '../types';
import { fetchReviewsForUser } from '../services/mockApi';
import Spinner from '../components/Spinner';
import UserReviewCard from '../components/UserReviewCard';
import StatCard from '../components/StatCard';
import SEO from '../components/SEO';
import { PencilIcon } from '../components/icons/PencilIcon';

const ProfilePage: React.FC = () => {
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const [reviews, setReviews] = useState<UserReview[]>([]);
    const [loadingReviews, setLoadingReviews] = useState(true);

    useEffect(() => {
        if (!authLoading && !user) {
            navigate('/login');
        }
    }, [user, authLoading, navigate]);

    useEffect(() => {
        if (user) {
            fetchReviewsForUser(user.id)
                .then(setReviews)
                .finally(() => setLoadingReviews(false));
        }
    }, [user]);

    if (authLoading || !user) {
        return <div className="flex justify-center items-center h-64"><Spinner /></div>;
    }

    return (
        <>
            <SEO title={`${user.name}'s Profile | ReviewDotCom`} description={`Profile page for ${user.name}.`} />
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">{user.name}</h1>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                    <Link to="/profile/edit" className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                        <PencilIcon className="h-5 w-5" />
                        <span>Edit Profile</span>
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <StatCard title="Total Reviews" value={user.totalReviews ?? reviews.length} />
                    <StatCard title="Helpful Votes" value={user.totalHelpfulVotes ?? 'N/A'} />
                    <StatCard title="Average Rating Given" value={user.averageRatingGiven ?? 'N/A'} />
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Your Reviews</h2>
                    {loadingReviews ? (
                        <Spinner />
                    ) : reviews.length > 0 ? (
                        <div className="space-y-4">
                            {reviews.map(review => (
                                <UserReviewCard key={review.id} review={review} />
                            ))}
                        </div>
                    ) : (
                        <p>You haven't written any reviews yet.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
