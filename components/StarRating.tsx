import React from 'react';
// Fix: Removed .tsx extension from import
import { StarIcon } from './icons/StarIcon';

interface StarRatingProps {
  rating: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  size?: 'small' | 'medium' | 'large';
}

const StarRating: React.FC<StarRatingProps> = (props) => {
    const rating = props.rating;
    const onRatingChange = props.onRatingChange;

    // Use robust if checks for default props to ensure transpiler compatibility
    let interactive = false;
    if (props.interactive) {
      interactive = props.interactive;
    }
    
    let size = 'medium';
    if (props.size) {
      size = props.size;
    }

    let starSizeClass = 'h-6 w-6'; // Default to medium
    if (size === 'small') {
      starSizeClass = 'h-4 w-4';
    } else if (size === 'large') {
      starSizeClass = 'h-8 w-8';
    }

    const handleStarClick = (ratingValue: number) => {
        if (interactive) {
            if (onRatingChange) {
                onRatingChange(ratingValue);
            }
        }
    };

    // Helper function for class logic to ensure robust transpilation
    const getStarButtonClasses = (ratingValue: number, currentRating: number, isInteractive: boolean) => {
        const buttonClasses = [];
        // Determine star color using standard if statements
        if (ratingValue <= currentRating) {
            buttonClasses.push('text-amber-400');
        } else {
            buttonClasses.push('text-gray-300');
        }
        // Determine interactivity cursor using a standard if statement
        if (isInteractive) {
            buttonClasses.push('cursor-pointer');
        }
        return buttonClasses.join(' ');
    };

    const renderStars = () => {
        const stars = [];
        const isDisabled = !interactive;
        for (let i = 0; i < 5; i++) {
            const ratingValue = i + 1;

            stars.push(
                <button
                    type="button"
                    key={ratingValue}
                    className={getStarButtonClasses(ratingValue, rating, interactive)}
                    onClick={() => handleStarClick(ratingValue)}
                    aria-label={'Rate ' + ratingValue + ' stars'}
                    disabled={isDisabled}
                >
                   <StarIcon className={starSizeClass} />
                </button>
            );
        }
        return stars;
    };

    return (
        <div className="flex items-center">
            {renderStars()}
        </div>
    );
};

export default StarRating;
