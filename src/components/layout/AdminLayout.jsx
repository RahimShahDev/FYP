import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminNavbar from '../navbar/AdminNavbar';
import Footer from "../footer/index";
import { useEffect, useState } from 'react';

const AdminLayout = () => {
  const { user, isInitialized, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // useEffect(() => {
  //   if (isInitialized && (!isAuthenticated || user?.role !== 'admin')) {
  //     navigate('/unauthorized');
  //   }
  // }, [isInitialized, isAuthenticated, user, navigate]);

  useEffect(() => {
  if (!isInitialized) return;

  // Debug log
  console.log("🔐 AdminLayout Check", {
    isInitialized,
    isAuthenticated,
    role: user?.role
  });

  if (!isAuthenticated || user?.role !== 'admin') {
    navigate('/unauthorized');
  }
}, [isInitialized, isAuthenticated, user, navigate]);


  // if (!isInitialized) return <div>Loading...</div>;
  if (!isInitialized || !user) return <div>Loading...</div>;


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
