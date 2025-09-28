import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { fetchSavedBusinesses } from '../services/mockApi';
import { Business } from '../types';

interface SavedBusinessesContextType {
  savedBusinessIds: Set<string>;
  savedBusinesses: Business[];
  isLoading: boolean;
  isSaved: (businessId: string) => boolean;
  toggleSave: (businessId: string) => void;
}

const SavedBusinessesContext = createContext<SavedBusinessesContextType | undefined>(undefined);

export const SavedBusinessesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [savedBusinessIds, setSavedBusinessIds] = useState<Set<string>>(new Set());
  const [savedBusinesses, setSavedBusinesses] = useState<Business[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      fetchSavedBusinesses(user.id)
        .then(businesses => {
          setSavedBusinesses(businesses);
          setSavedBusinessIds(new Set(businesses.map(b => b.id)));
        })
        .finally(() => setIsLoading(false));
    } else {
      setSavedBusinesses([]);
      setSavedBusinessIds(new Set());
    }
  }, [user]);

  const isSaved = (businessId: string) => savedBusinessIds.has(businessId);

  const toggleSave = (businessId: string) => {
    setSavedBusinessIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(businessId)) {
        newSet.delete(businessId);
      } else {
        newSet.add(businessId);
      }
      // In a real app, you would also call an API to update the backend here.
      return newSet;
    });
  };

  return (
    <SavedBusinessesContext.Provider value={{ savedBusinessIds, savedBusinesses, isLoading, isSaved, toggleSave }}>
      {children}
    </SavedBusinessesContext.Provider>
  );
};

export const useSavedBusinesses = () => {
  const context = useContext(SavedBusinessesContext);
  if (!context) {
    throw new Error('useSavedBusinesses must be used within a SavedBusinessesProvider');
  }
  return context;
};
