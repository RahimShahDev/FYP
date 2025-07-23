// // import { Outlet } from 'react-router-dom';
// // import { useAuth } from '../../context/AuthContext';
// // import UserNavbar from '../navbar/UserNavbar';
// // import GuestHeader from '../navbar/GuestHeader';
// // import Footer from "../footer/index";

// // const UserLayout = () => {
// //   const { user, isInitialized, isAuthenticated } = useAuth();

// //   if (!isInitialized) return <div>Loading...</div>;

// //   const isUser = isAuthenticated && user?.role === 'user';

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gray-50">
// //       {isUser ? <UserNavbar user={user} /> : <GuestHeader />}
      
// //       <main className="flex-1 w-full">
// //         <Outlet />
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default UserLayout;















// // import { Outlet } from 'react-router-dom';
// // import { useAuth } from '../../context/AuthContext';
// // import UserNavbar from '../navbar/UserNavbar';
// // import Footer from "../footer/index";

// // const UserLayout = () => {
// //   const { user, isInitialized, isAuthenticated } = useAuth();

// //   if (!isInitialized) return <div>Loading...</div>;

// //   // UserNavbar will be shown regardless of auth status
// //   return (
// //     <div className="min-h-screen flex flex-col bg-gray-50">
// //       <UserNavbar user={isAuthenticated ? user : null} />

// //       <main className="flex-1 w-full">
// //         <Outlet />
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default UserLayout;









// import { Outlet, Navigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import UserNavbar from '../navbar/UserNavbar';
// import Footer from "../footer/index";

// const UserLayout = () => {
//   const { user, isInitialized, isAuthenticated } = useAuth();

//   if (!isInitialized) return <div>Loading...</div>;

//   // Only allow authenticated users with role 'user'
//   // const isUser = isAuthenticated && user?.role === 'user';
//   const isUser = isAuthenticated && (user?.role === 'user' || user?.role === 'admin');


//   if (!isUser) {
//     return <Navigate to="/unauthorized" />;
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <UserNavbar user={user} />

//       <main className="flex-1 w-full">
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default UserLayout;

// src/components/layout/UserLayout.jsx
import { Outlet } from 'react-router-dom';
import UserNavbar from '../navbar/UserNavbar';
import Footer from '../footer/index';

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar can receive no props if you don’t need user info */}
      <UserNavbar />

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default UserLayout;
