import React from 'react';

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414l-2.293 2.293m-1.414-4L12 3m0 0l-1.293 1.293a1 1 0 01-1.414 0L8 3m4 4l2.293-2.293a1 1 0 011.414 0L17 5m-4-4v4m-2 16l2.293-2.293a1 1 0 011.414 0L15 19m-4 4l2.293-2.293a1 1 0 011.414 0L17 21m-4-4v4m-6-16h4m8 16h4" />
    </svg>
);
