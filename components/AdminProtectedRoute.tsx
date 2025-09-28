import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Spinner from './Spinner';

interface AdminProtectedRouteProps {
  children: JSX.Element;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><Spinner /></div>;
  }

  if (!user) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }
  
  if (user.role !== 'admin') {
    // Logged in but not an admin
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
