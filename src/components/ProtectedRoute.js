// // src/components/ProtectedRoute.js
// import { useAuth } from '../context/AuthContext';
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = ({ roles = [] }) => {
//   const { user, isLoading } = useAuth();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (roles.length > 0 && !roles.includes(user.role)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;