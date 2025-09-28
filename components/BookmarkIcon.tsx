import React from 'react';
import { BookmarkIcon as BookmarkSvgIcon } from './icons/BookmarkIcon';
import { useSavedBusinesses } from '../contexts/SavedBusinessesContext';

interface BookmarkIconProps {
  businessId: string;
  className?: string;
}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ businessId, className }) => {
  const { isSaved, toggleSave } = useSavedBusinesses();
  const saved = isSaved(businessId);

  const handleToggle = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      toggleSave(businessId);
  }

  return (
    <button onClick={handleToggle} className={`p-2 bg-white/70 rounded-full hover:bg-white ${className}`}>
        <BookmarkSvgIcon className={`h-6 w-6 ${saved ? 'text-emerald-500' : 'text-gray-500'}`} filled={saved} />
    </button>
  );
};

export default BookmarkIcon;
