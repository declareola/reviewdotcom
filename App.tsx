import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import BusinessPage from './pages/BusinessPage';
import CreateReviewPage from './pages/CreateReviewPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import UserProfilePage from './pages/UserProfilePage';
import SavedBusinessesPage from './pages/SavedBusinessesPage';
import AdminPage from './pages/AdminPage';
import AboutPage from './pages/AboutPage';
import EditProfilePage from './pages/EditProfilePage';
import NewsPage from './pages/NewsPage';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { SavedBusinessesProvider } from './contexts/SavedBusinessesContext';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className={`flex-grow ${!isHomePage ? 'container mx-auto p-4 sm:p-6 lg:p-8' : ''}`}>
                {children}
            </main>
            {/* The HomePage has its own Footer */}
            {!isHomePage && <Footer />}
        </div>
    );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SavedBusinessesProvider>
        <Router>
          <Routes>
            {/* Route for home page with its own full-width layout */}
            <Route path="/" element={<HomePage />} />
            
            {/* Routes with the main, containerized layout */}
            <Route path="/*" element={
              <AppLayout>
                <Routes>
                  <Route path="/search" element={<SearchResultsPage />} />
                  <Route path="/business/:id" element={<BusinessPage />} />
                  <Route path="/create-review/:businessId" element={<CreateReviewPage />} />
                  <Route path="/login" element={<AuthPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/profile/edit" element={<EditProfilePage />} />
                  <Route path="/user/:userId" element={<UserProfilePage />} />
                  <Route path="/saved" element={<SavedBusinessesPage />} />
                  <Route path="/admin" element={
                    <AdminProtectedRoute>
                        <AdminPage />
                    </AdminProtectedRoute>
                  } />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  {/* Fallback for any other nested routes can be a 404 component */}
                </Routes>
              </AppLayout>
            } />
          </Routes>
        </Router>
      </SavedBusinessesProvider>
    </AuthProvider>
  );
};

export default App;
