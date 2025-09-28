import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User, UserReview } from '../types';
import { fetchUserById, fetchReviewsForUser } from '../services/mockApi';
import Spinner from '../components/Spinner';
import UserReviewCard from '../components/UserReviewCard';
import StatCard from '../components/StatCard';
import SEO from '../components/SEO';

const UserProfilePage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [user, setUser] = useState<User | null>(null);
    const [reviews, setReviews] = useState<UserReview[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userId) {
            Promise.all([
                fetchUserById(userId),
                fetchReviewsForUser(userId)
            ])
            .then(([userData, userReviews]) => {
                setUser(userData);
                setReviews(userReviews);
            })
            .catch(error => console.error("Failed to load user profile", error))
            .finally(() => setLoading(false));
        }
    }, [userId]);

    if (loading) {
        return <div className="flex justify-center items-center h-64"><Spinner /></div>;
    }

    if (!user) {
        return <div className="text-center">User not found.</div>;
    }

    return (
        <>
            <SEO title={`${user.name}'s Profile | ReviewDotCom`} description={`Public profile for ${user.name}.`} />
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <StatCard title="Total Reviews" value={user.totalReviews ?? reviews.length} />
                    <StatCard title="Helpful Votes Received" value={user.totalHelpfulVotes ?? 'N/A'} />
                    <StatCard title="Average Rating Given" value={user.averageRatingGiven ?? 'N/A'} />
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Reviews by {user.name}</h2>
                    {reviews.length > 0 ? (
                        <div className="space-y-4">
                            {reviews.map(review => (
                                <UserReviewCard key={review.id} review={review} />
                            ))}
                        </div>
                    ) : (
                        <p>{user.name} hasn't written any reviews yet.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default UserProfilePage;
