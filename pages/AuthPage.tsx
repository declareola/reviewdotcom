import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/Button';
import SEO from '../components/SEO';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoggingIn(true);
    
    // Mock login logic: 'john@example.com' logs in user1, 'jane@example.com' logs in user2 (admin)
    let userId;
    if (email === 'john@example.com') {
      userId = 'user1';
    } else if (email === 'jane@example.com') {
      userId = 'user2';
    } else {
      setError('Invalid email or password.');
      setIsLoggingIn(false);
      return;
    }

    try {
      await login(userId);
      navigate('/profile');
    } catch {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <>
      <SEO title="Login | ReviewDotCom" description="Login to your ReviewDotCom account." />
      <div className="max-w-md mx-auto mt-10">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h1 className="text-2xl font-bold text-center mb-6">Login to ReviewDotCom</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password"  className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <Button type="submit" fullWidth disabled={isLoggingIn}>
                {isLoggingIn ? 'Logging In...' : 'Login'}
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            <p>Demo accounts:</p>
            <p>User: <code>john@example.com</code></p>
            <p>Admin: <code>jane@example.com</code></p>
            <p>(Any password will work)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
