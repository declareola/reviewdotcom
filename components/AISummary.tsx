import React, { useState, useEffect } from 'react';
import { Review } from '../types';
import { summarizeReviews } from '../services/aiService';
import Spinner from './Spinner';
import { SparklesIcon } from './icons/SparklesIcon';

interface AISummaryProps {
  reviews: Review[];
}

const AISummary: React.FC<AISummaryProps> = ({ reviews }) => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    summarizeReviews(reviews)
      .then(setSummary)
      .finally(() => setLoading(false));
  }, [reviews]);

  return (
    <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
      <div className="flex items-center">
        <SparklesIcon className="h-6 w-6 text-emerald-600" />
        <h3 className="ml-2 text-lg font-bold text-emerald-800">AI Summary</h3>
      </div>
      <div className="mt-2 text-emerald-900">
        {loading ? <Spinner /> : <p>{summary}</p>}
      </div>
    </div>
  );
};

export default AISummary;
