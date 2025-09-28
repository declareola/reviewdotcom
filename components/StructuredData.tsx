import React from 'react';
import { Business } from '../types';

interface StructuredDataProps {
  business: Business;
}

const StructuredData: React.FC<StructuredDataProps> = ({ business }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "image": business.heroImage,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address,
      "addressLocality": business.city,
      "addressCountry": "NG"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": business.avgRating,
      "reviewCount": business.reviewCount
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
};

export default StructuredData;
