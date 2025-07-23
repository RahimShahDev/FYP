// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const navigate = useNavigate();

  // Initialize auth state
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsInitialized(true);
  }, []);

  const login = (userData) => {
    const completeUser = {
      ...userData,
      id: userData.id || Date.now().toString(),
      email: userData.email || `${userData.role}@example.com`,
      avatar: userData.avatar || `https://i.pravatar.cc/150?u=${userData.id}`,
      isAuthenticated: true  // Explicit authentication flag
    };
    setUser(completeUser);
    localStorage.setItem('user', JSON.stringify(completeUser));
    navigate('/dashboard');
    console.log('User logged in:', completeUser); // Debug log
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  const isAuthenticated = !!user;

  const value = {
    user,
    isAuthenticated,
    isInitialized,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}