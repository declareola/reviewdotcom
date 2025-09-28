import React, { useEffect, useState } from 'react';
import { ReportedReview } from '../types';
import { fetchReportedReviews } from '../services/mockApi';
import AdminReviewCard from '../components/AdminReviewCard';
import Spinner from '../components/Spinner';
import SEO from '../components/SEO';

const AdminPage: React.FC = () => {
    const [reportedReviews, setReportedReviews] = useState<ReportedReview[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReportedReviews()
            .then(setReportedReviews)
            .finally(() => setLoading(false));
    }, []);

    const handleAction = (reviewId: string, action: 'dismiss' | 'delete') => {
        console.log(`Action: ${action} on review ${reviewId}`);
        // In a real app, this would trigger an API call
        setReportedReviews(prev => prev.filter(r => r.reviewId !== reviewId));
    };

    return (
        <>
            <SEO title="Admin Panel | ReviewDotCom" description="Manage reported reviews." />
            <div>
                <h1 className="text-3xl font-bold mb-6">Admin Panel - Reported Reviews</h1>
                {loading ? (
                    <div className="flex justify-center"><Spinner /></div>
                ) : reportedReviews.length > 0 ? (
                    <div className="space-y-4">
                        {reportedReviews.map(review => (
                            <AdminReviewCard key={review.reviewId} review={review} onAction={handleAction} />
                        ))}
                    </div>
                ) : (
                    <p>No reported reviews at the moment.</p>
                )}
            </div>
        </>
    );
};

export default AdminPage;
