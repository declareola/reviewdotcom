# ReviewDotCom: System Taxonomy & Data Models

This document outlines the core data structures, content taxonomy, and design principles for the ReviewDotCom platform. It serves as a guide for developers and designers to ensure consistency, scalability, and a high-quality user experience.

---

## 1. Core UI/UX Principles

All development and design should adhere to the following principles:

-   **Trust & Transparency:** Our primary goal is to be Nigeria's most trusted platform. This means verifying information where possible, clearly distinguishing between user-generated content and official replies, labeling AI-generated content, and citing sources.
-   **Simplicity & Accessibility:** The platform must be intuitive and easy to use for everyone, regardless of technical skill. It should be mobile-first, load quickly on all network conditions, and adhere to accessibility standards (WCAG).
-   **Empowerment:** We empower citizens by giving them a voice and empower businesses by providing them with actionable feedback. The platform should facilitate constructive dialogue.

---

## 2. Platform Taxonomy: Reviewable Entities

This taxonomy outlines the categories of businesses, services, and institutions that can be reviewed on the platform.

### Government & Public Services
-   **Federal & State Government**
    -   Federal Ministries (Health, Education, Works, Finance)
    -   State Ministries and Departments
    -   Local Government Offices
    -   Embassies and Consulates
-   **Agencies & Parastatals**
    -   Immigration Offices
    -   Customs Offices
    -   Police Stations
    -   FRSC (Federal Road Safety Corps) Offices
    -   NIMC (National Identity Management Commission) Centres
    -   Tax Offices (FIRS, LIRS)
    -   Electoral Commissions (INEC)
-   **Public Facilities**
    -   Government Hospitals & Clinics
    -   Public Schools & Tertiary Institutions
    -   Courts and Tribunals
    -   Public Libraries
    -   Airports and Seaports
    -   Train Stations

### Private Sector & Businesses
-   **Healthcare**
    -   Private Hospitals & Clinics
    -   Pharmacies
    -   Diagnostic Labs
    -   Dental & Eye Clinics
-   **Finance & Professional Services**
    -   Commercial Banks & ATMs
    -   Fintech Apps & Platforms
    -   Insurance Companies
    -   Law Firms
    -   Accounting Firms
-   **Food & Hospitality**
    -   Restaurants & Cafes
    -   Fast-Food Outlets
    -   Hotels & Guesthouses
    -   Bars & Lounges
    -   Event Venues
-   **Retail & Shopping**
    -   Supermarkets & Markets
    -   Shopping Malls
    -   E-commerce Platforms
    -   Clothing & Electronics Stores
-   **Transport & Logistics**
    -   Airlines
    -   Bus Terminals & Transport Companies
    -   Ride-hailing Apps (Uber, Bolt)
    -   Courier & Delivery Services
-   **Utilities & Telecoms**
    -   Electricity Distribution Companies (DisCos)
    -   Mobile Network Operators (MTN, Glo, etc.)
    -   Internet Service Providers
-   **Automotive**
    -   Fuel Stations
    -   Car Dealerships
    -   Auto Repair Garages
-   **Real Estate & Construction**
    -   Estate Agents
    -   Property Developers
-   **Home & Personal Services**
    -   Beauty Salons & Barbershops
    -   Cleaning Services
    -   Tailors

---

## 3. Core Data Models

These are the primary data structures that power the application.

### Business Model
```typescript
interface Business {
  id: string;
  ownerId?: string;
  name: string;
  subtitle?: string;
  category: string; // From Taxonomy
  description: string;
  address: string;
  city: string;
  // geoCoordinates: { lat: number; lng: number };
  
  contact: {
    phone?: string;
    website?: string;
    email?: string;
  };
  
  openingHours?: { day: string; hours: string }[];
  
  visuals: {
    heroImage: string;
    gallery: string[];
  };

  ratings: {
    avgRating: number;
    reviewCount: number;
  };
  
  reviews: Review[]; // Embedded or referenced
  
  verification: {
    isVerified: boolean;
    verifiedAt?: string;
  };

  tags?: string[]; // e.g., "Amala", "Outdoor Seating", "Free WiFi"
}
```

### Review Model
```typescript
interface Review {
  id: string;
  businessId: string;
  userId: string;
  userName: string; // Denormalized for performance
  
  content: {
    rating: number; // 1-5
    text: string;
    photos?: { url: string; caption?: string }[];
  };

  metadata: {
    createdAt: string;
    source: 'ReviewDotCom' | 'Google'; // To distinguish imported reviews
    isAnonymous: boolean;
    isVerifiedVisit: boolean; // Badge for proven customers
  };

  engagement: {
    upvotes: number;
    downvotes: number;
  };

  ownerReply?: {
    text: string;
    repliedAt: string;
  };
}
```

### User Model
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  
  profile: {
    createdAt: string;
    avatarUrl?: string;
  };

  stats: {
    totalReviews: number;
    totalHelpfulVotes: number;
    averageRatingGiven: number;
  };
}
```

---

## 4. Review & Interaction Types

The platform will support a variety of interaction types to create a rich and trustworthy ecosystem.

-   **Star Rating:** A mandatory 1-5 star rating.
-   **Detailed Comment:** A text area for users to elaborate on their experience.
-   **Photo/Video Uploads:** Allow users to add visual proof and context. AI will be used to auto-caption photos.
-   **Owner Response:** A dedicated feature for verified business owners to reply to reviews.
-   **Helpful Voting:** Upvote/downvote buttons to allow the community to surface the most helpful reviews.
-   **Report a Review:** A mechanism for flagging reviews that violate community guidelines.
-   **Anonymous Option:** Allow users to post anonymously to encourage honest feedback on sensitive topics.
-   **Verified Visit Badge:** A special indicator for reviews where the user can prove they were a customer (e.g., via receipt upload - a future feature).
