// Fix: Added placeholder content to resolve compilation errors.
import { User, Business, Review, ReportedReview, UserReview } from '../types';

const users: User[] = [
  { id: 'user1', name: 'John Doe', email: 'john@example.com', role: 'user', totalReviews: 2, totalHelpfulVotes: 5, averageRatingGiven: 4.5 },
  { id: 'user2', name: 'Jane Smith', email: 'jane@example.com', role: 'admin', totalReviews: 1, totalHelpfulVotes: 10, averageRatingGiven: 5 },
  { id: 'user3', name: 'Sam Wilson', email: 'sam@example.com', role: 'user' },
];

const reviews: Review[] = [
    { id: 'rev1', userId: 'user1', userName: 'John Doe', rating: 5, text: 'Great place!', createdAt: new Date().toISOString(), upvotes: 3, downvotes: 0, source: 'ReviewDotCom' },
    { id: 'rev2', userId: 'user2', userName: 'Jane Smith', rating: 4, text: 'Good service, but a bit pricey.', createdAt: new Date().toISOString(), upvotes: 7, downvotes: 1, source: 'ReviewDotCom', ownerReply: { text: 'Thank you for your feedback!', repliedAt: new Date().toISOString() } },
    { id: 'rev3', userId: 'user3', userName: 'Sam Wilson', rating: 3, text: 'It was okay.', createdAt: new Date().toISOString(), upvotes: 1, downvotes: 2, source: 'Google' },
];

const businesses: Business[] = [
  { id: 'biz1', name: 'Awesome Restaurant', category: 'Restaurant', address: '123 Main St', city: 'Lagos', avgRating: 4.5, reviewCount: 10, heroImage: 'https://picsum.photos/seed/biz1/800/600', images: [], reviews: reviews, description: 'A great place to eat.' },
  { id: 'biz2', name: 'Super Hospital', category: 'Hospital', address: '456 Oak Ave', city: 'Abuja', avgRating: 4.0, reviewCount: 5, heroImage: 'https://picsum.photos/seed/biz2/800/600', images: [], reviews: [], description: 'Top-notch medical care.' },
  { id: 'biz3', name: 'Comfy Hotel', category: 'Hotel', address: '789 Pine Ln', city: 'Port Harcourt', avgRating: 3.8, reviewCount: 22, heroImage: 'https://picsum.photos/seed/biz3/800/600', images: [], reviews: [], description: 'Your home away from home.' },
];

const reportedReviews: ReportedReview[] = [
    { reviewId: 'rev3', reporterId: 'user1', reportedAt: new Date().toISOString(), reviewText: 'It was okay.', reviewerName: 'Sam Wilson', businessId: 'biz1', businessName: 'Awesome Restaurant', reason: 'Spam' },
];

const savedBusinesses: { [userId: string]: string[] } = {
  'user1': ['biz1', 'biz3'],
};

const userReviews: { [userId: string]: UserReview[] } = {
    'user1': [
        { id: 'rev1', businessId: 'biz1', businessName: 'Awesome Restaurant', rating: 5, text: 'Great place!', createdAt: new Date().toISOString(), upvotes: 3 },
    ],
     'user2': [
        { id: 'rev2', businessId: 'biz1', businessName: 'Awesome Restaurant', rating: 4, text: 'Good service, but a bit pricey.', createdAt: new Date().toISOString(), upvotes: 7 },
    ],
};


// --- API Functions ---

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const fetchUserById = async (userId: string): Promise<User> => {
  await delay(500);
  const user = users.find(u => u.id === userId);
  if (user) return user;
  throw new Error('User not found');
};

export const fetchBusinessById = async (businessId: string): Promise<Business> => {
    await delay(500);
    const business = businesses.find(b => b.id === businessId);
    if(business) return business;
    throw new Error('Business not found');
};

export const searchBusinesses = async (query: string): Promise<Business[]> => {
    await delay(500);
    if (!query) return businesses;
    const lowerQuery = query.toLowerCase();
    return businesses.filter(b => b.name.toLowerCase().includes(lowerQuery) || b.category.toLowerCase().includes(lowerQuery) || b.city.toLowerCase().includes(lowerQuery));
};

export const fetchReportedReviews = async (): Promise<ReportedReview[]> => {
    await delay(500);
    return reportedReviews;
};

export const fetchSavedBusinesses = async (userId: string): Promise<Business[]> => {
    await delay(500);
    const bizIds = savedBusinesses[userId] || [];
    return businesses.filter(b => bizIds.includes(b.id));
}

export const fetchReviewsForUser = async (userId: string): Promise<UserReview[]> => {
    await delay(500);
    return userReviews[userId] || [];
}
