// import './index.css';
// import { Navigate } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import Layout from './components/layout';
// import Home from './components/home/index';
// import Login from './pages/login';
// import Registration from "./components/registration/index";
// import About from './pages/about';
// import Contact from "./pages/contact"
// import SearchVehical from './pages/SearchVehical';
// import Dashboard from './pages/Dashboard';
// import Vehicles from "./pages/Vehicles"
// import Uploadcsv from "./pages/Upload"
// import ProtectedRoute from './components/ProtectedRoute';
// import AdminPanel from './components/AdminPanel';
// import AdminLoginForm from './pages/adminLogin';
// import AdminRegisterPage from "./pages/AdminRegisterPage";
// import AdminLayout from './components/layout/AdminLayout';
// import UserLayout from './components/layout/UserLayout';
// import Unauthorized from "./pages/unauthorized"
// import RoleRedirect from "./pages/RoleRedirect"


// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/admin-login" element={<AdminLoginForm />} />
//           <Route path="/admin-registration" element={<AdminRegisterPage />} />


          
//           {/* Protected Routes with Layout */}
//           <Route element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/searchvehical" element={<SearchVehical />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/vehicles" element={<Vehicles />} />
//             <Route path="/upload" element={<Uploadcsv />} />
            
//           </Route>
//           {/* <Route element={<ProtectedRoute roles={['admin']} />}> */}
//           {/* <Route path="/admin" element={<AdminPanel />} /> */}
//           {/* <Route path="/admin-login" element={<AdminLoginForm />} /> */}
//         {/* </Route> */}
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter> {/* ✅ Must come first */}
//       <AuthProvider> {/* ✅ Now safely inside BrowserRouter */}
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/admin-login" element={<AdminLoginForm />} />
//           <Route path="/admin-registration" element={<AdminRegisterPage />} />

//           {/* Protected Routes */}
//           <Route element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/searchvehical" element={<SearchVehical />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/vehicles" element={<Vehicles />} />
//             <Route path="/upload" element={<Uploadcsv />} />
//           </Route>
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }


// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/admin-login" element={<AdminLoginForm />} />
//           <Route path="/admin-registration" element={<AdminRegisterPage />} />

          
//           {/* Role Redirect */}
//           <Route path="/" element={<RoleRedirect />} />

//           {/* 🔒 Unauthorized route */}
//           <Route path="/unauthorized" element={<Unauthorized />} />

//           {/* User Routes with User Layout */}
//           <Route element={<UserLayout />}>
//             <Route index element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/searchvehical" element={<SearchVehical />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/vehicles" element={<Vehicles />} />
//           </Route>

//           {/* Admin Routes with Admin Layout */}
//           <Route element={<AdminLayout />}>
//             <Route path="/upload" element={<Uploadcsv />} />
//             {/* More admin-only routes can go here */}
//           </Route>
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// function App (){
//   return (
//     <BrowserRouter>
//     <AuthProvider>
//       <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//   {/* Public Routes */}
//   <Route path="/login" element={<Login />} />
//   <Route path="/registration" element={<Registration />} />
//   <Route path="/admin-login" element={<AdminLoginForm />} />
//   <Route path="/admin-registration" element={<AdminRegisterPage />} />

//   {/* Role Redirect */}
//   <Route path="/" element={<RoleRedirect />} />

//   {/* Unauthorized Page */}
//   <Route path="/unauthorized" element={<Unauthorized />} />

//   {/* User Routes */}
//   <Route element={<UserLayout />}>
//     <Route path="/home" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/searchvehical" element={<SearchVehical />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="/dashboard" element={<Dashboard />} />
//     <Route path="/vehicles" element={<Vehicles />} />
//   </Route>

//   {/* Admin Routes */}
//   <Route element={<AdminLayout />}>
//     <Route path="/upload" element={<Uploadcsv />} />
//   </Route>
// </Routes>

//     </AuthProvider>
//     </BrowserRouter>
//   )
// }

// export default App;










// // import './index.css';
// import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';

// // Pages & Layouts
// import Home from './components/home/index';
// import Login from './pages/login';
// import Registration from './components/registration/index';
// import About from './pages/about';
// import Contact from './pages/contact';
// import SearchVehical from './pages/SearchVehical';
// import AdminDashboard from './pages/Dashboard';
// import Vehicles from './pages/Vehicles';
// import Uploadcsv from './pages/Upload';
// import AdminLoginForm from './pages/adminLogin';
// import AdminRegisterPage from './pages/AdminRegisterPage';
// import AdminLayout from './components/layout/AdminLayout';
// import UserLayout from './components/layout/UserLayout';
// // import Unauthorized from './pages/unauthorized'; // Make sure this has `export default`
// // import RoleRedirect from './pages/RoleRedirect';
// import InspectorLoginForm from "./components/InspectorLoginForm/index"
// import InspectorRegistrationForm from "./components//InspectorRegistrationForm/index"
// import InspectorDashboard from './components/InspectorDashboard/InspectorDashboard';
// import InspectorSuspiciousList from "./components/inspectorSuspiciousCars";
// // import InspectorSuspiciousCars from './pages/inspector/InspectorSuspiciousCars';
// import ReportSuspiciousVehicleForm from "./pages/PublicAwarenessPage";
// import ReportSuspiciousVehicleFormOnUserSide from "./pages/ReportSuspiciousVehicleForm";
// import InspectorSuspiciousCars from "./pages/inspector/InspectorSuspiciousCars";

// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>

//           {/* 🔁 Redirect / to /home for all users */}
//           {/* <Route path="/" element={<Navigate to="/home" />} /> */}
//           {/* <Route path="/" element={<RoleRedirect />} /> */}
//           {/* <Route path="/" element={<RoleRedirect />} /> */}
//           <Route path="/" element={<Navigate to="/home" />} />




//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/admin-login" element={<AdminLoginForm />} />
//           <Route path="/admin-registration" element={<AdminRegisterPage />} />
//           <Route path="/inspector-login" element={<InspectorLoginForm />} />
//           <Route path="/inspector-Registration" element={<InspectorRegistrationForm />} />
//           <Route path="/inspector-dashboard" element={<InspectorDashboard />} />
//           <Route path="inspector/inspectorSuspiciousCars" element={<InspectorSuspiciousList />} />
//           <Route path="/report-suspicious" element={<ReportSuspiciousVehicleFormOnUserSide />} />
          


//           {/* Unauthorized Page */}
//           {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}

//           {/* User Routes (with User Layout) */}
//           <Route element={<UserLayout />}>
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/searchvehical" element={<SearchVehical />} />
//             <Route path="/contact" element={<Contact />} />
//             {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//             {/* <Route path="/vehicles" element={<Vehicles />} /> */}
//             <Route path="/public-awareness" element={<ReportSuspiciousVehicleForm />} />
//           </Route>

//           {/* Admin Routes (with Admin Layout) */}
//           <Route element={<AdminLayout />}>
//             <Route path="/dashboard" element={<AdminDashboard />} /> {/* 👈 New Route */}
//              <Route path="/vehicles" element={<Vehicles />} />
//             <Route path="/upload" element={<Uploadcsv />} />
//           </Route>

//           {/* Inspector Route  */}
//           <Route path="/inspector" element={<InspectorDashboard />}>
//   <Route path="inspectorSuspiciousCars" element={<InspectorSuspiciousCars />} />
// </Route>




//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

/* ------------- pages / layouts ------------- */
import Home from "./components/home";
import Login from "./pages/login";
import Registration from "./components/registration";
import About from "./pages/about";
import Contact from "./pages/contact";
import SearchVehical from "./pages/SearchVehical";
import AdminDashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Uploadcsv from "./pages/Upload";
import AdminLoginForm from "./pages/adminLogin";
import AdminRegisterPage from "./pages/AdminRegisterPage";
import AdminLayout from "./components/layout/AdminLayout";
import UserLayout from "./components/layout/UserLayout";

import InspectorLoginForm from "./components/InspectorLoginForm";
import InspectorRegistrationForm from "./components/InspectorRegistrationForm";
import InspectorDashboard from "./components/InspectorDashboard/InspectorDashboard";
import InspectorSuspiciousCars from "./pages/inspector/InspectorSuspiciousCars";


import PublicAwareness from "./pages/PublicAwarenessPage";
import ReportSuspiciousVehicleFormOnUserSide from "./pages/ReportSuspiciousVehicleForm";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* redirect root */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* ---------- public auth & misc ---------- */}
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/report-suspicious" element={<ReportSuspiciousVehicleFormOnUserSide />} />

          {/* ---------- admin auth ---------- */}
          <Route path="/admin-login" element={<AdminLoginForm />} />
          <Route path="/admin-registration" element={<AdminRegisterPage />} />

          {/* ---------- inspector auth ---------- */}
          <Route path="/inspector-login" element={<InspectorLoginForm />} />
          <Route path="/inspector-registration" element={<InspectorRegistrationForm />} />

          {/* ---------- inspector dashboard & nested list ---------- */}
          {/* ---------- inspector dashboard (cards & charts) ---------- */}
<Route path="/inspector-dashboard" element={<InspectorDashboard />} />

{/* ---------- stand‑alone suspicious‑vehicles page ---------- */}
<Route
  path="/inspector/suspicious-vehicles"   // ASCII hyphen
  element={<InspectorSuspiciousCars />}
/>




          {/* ---------- user‑side pages (with layout) ---------- */}
          <Route element={<UserLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/searchvehical" element={<SearchVehical />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/public-awareness" element={<PublicAwareness />} />
          </Route>

          {/* ---------- admin side (with layout) ---------- */}
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/upload" element={<Uploadcsv />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
