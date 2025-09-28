// Fix: Added type definitions to resolve compilation errors throughout the application.

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  totalReviews?: number;
  totalHelpfulVotes?: number;
  averageRatingGiven?: number;
}

export interface ReviewPhoto {
    url: string;
    caption?: string;
}

export interface OwnerReply {
    text: string;
    repliedAt: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  text: string;
  createdAt: string;
  upvotes: number;
  downvotes: number;
  source: 'ReviewDotCom' | 'Google';
  isAnonymous?: boolean;
  photos?: ReviewPhoto[];
  ownerReply?: OwnerReply;
}

export interface Business {
  id: string;
  ownerId?: string;
  name: string;
  subtitle?: string;
  category: string;
  address: string;
  city: string;
  avgRating: number;
  reviewCount: number;
  heroImage: string;
  images: string[];
  reviews: Review[];
  description: string;
  isVerified?: boolean;
  phone?: string;
  website?: string;
}

export interface ReportedReview {
    reviewId: string;
    reporterId: string;
    reportedAt: string;
    reviewText: string;
    reviewerName: string;
    businessId: string;
    businessName: string;
    reason?: string;
}

export interface UserReview {
    id: string;
    businessId: string;
    businessName: string;
    rating: number;
    text: string;
    createdAt: string;
    upvotes: number;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}
