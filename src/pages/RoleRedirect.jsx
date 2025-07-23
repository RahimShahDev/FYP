import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RoleRedirect = () => {
  const { user, isInitialized, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitialized) return;

    if (!isAuthenticated) {
      navigate('/login');
    } else if (user?.role === 'admin') {
      navigate('/'); // or /dashboard
    } else if (user?.role === 'user') {
      navigate('/');
    } else {
      navigate('/unauthorized');
    }
  }, [isInitialized, isAuthenticated, user, navigate]);

  return <div>Redirecting...</div>;
};

export default RoleRedirect;
