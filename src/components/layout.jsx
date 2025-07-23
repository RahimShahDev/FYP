// // src/components/layout/index.jsx
// import { Outlet } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import AdminNavbar from './navbar/AdminNavbar';
// import UserNavbar from './navbar/UserNavbar';
// import GuestHeader from './navbar/GuestHeader';
// import Footer from "./footer/index";
// import ScrollToTop from "./scrollToTop";
// import { useState } from 'react';

// const Layout = () => {
//   const { user, isAuthenticated, isInitialized } = useAuth();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   if (!isInitialized) {
//     return <div>Loading...</div>;
//   }

//   const isAdmin = user?.role === 'admin';
//   const isRegularUser = isAuthenticated && user?.role === 'user';

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <ScrollToTop />
      
//       {/* Header/Navbar Section */}
//       {isAdmin ? (
//         <>
//           <AdminNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
//           {/* AdminSidebar removed since it's not imported */}
//         </>
//       ) : isRegularUser ? (
//         <UserNavbar user={user} />
//       ) : (
//         <GuestHeader />
//       )}

//       {/* Main Content Area */}
//       <div className="flex flex-1">
//         <main className="flex-1 w-full">
//           <div className="w-full max-w-none">
//             <Outlet />
//           </div>
//         </main>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Layout;