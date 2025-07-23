// import { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

// function NavBar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "HOME", path: "/home" },
//     { name: "ABOUT", path: "/about" },
//     { name: "SEARCH VEHICAL", path: "/Searchvehical" },
//     { name: "CONTACT", path: "/contact" },
//   ];

//   return (
//     <>
//       {/* Header Section  */}
//       <section className="bg-[#104382] px-5 py-2 w-full overflow-hidden">
//         <div className="flex flex-wrap justify-between items-center">
          
//           {/* Admission Notice */}
//           <div className="w-full md:w-2/3 overflow-hidden">
//             <a
//               href="https://ptpkp.gov.pk/wp-content/uploads/2024/08/Addmission-Form.pdf"
//               className="block text-white"
//             >
//               <div className="whitespace-nowrap animate-scroll">
//                 Admission Open at Traffic Driving School. For more information call Helpline 1915
//               </div>
//             </a>
//           </div>

//           {/* Social Media Links */}
//           <div className="flex items-center gap-3">
//             <span className="hidden sm:inline text-white/70 text-xs font-medium tracking-wider">
//               FOLLOW US:
//             </span>
//             <div className="flex gap-3">
//               {[
//                 {
//                   href: "https://facebook.com/CityTrafficPolicePeshawar",
//                   icon: faFacebookF,
//                   color: "text-[#1877F2]",
//                   hover: "hover:bg-[#1877F2]/20"
//                 },
//                 {
//                   href: "https://twitter.com/TrafficPeshawar/",
//                   icon: faTwitter,
//                   color: "text-[#1DA1F2]",
//                   hover: "hover:bg-[#1DA1F2]/20"
//                 },
//                 {
//                   href: "https://youtube.com/CityTrafficPolicePeshawar",
//                   icon: faYoutube,
//                   color: "text-[#FF0000]",
//                   hover: "hover:bg-[#FF0000]/20"
//                 },
//                 {
//                   href: "#",
//                   icon: faInstagram,
//                   color: "text-[#E4405F]",
//                   hover: "hover:bg-[#E4405F]/20"
//                 }
//               ].map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.icon}
//                   title={social.icon}
//                   className={`group bg-white/10 ${social.hover} w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200`}
//                 >
//                   <FontAwesomeIcon
//                     icon={social.icon}
//                     className={`text-[18px] ${social.color} group-hover:scale-110 transition-transform`}
//                   />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* NavBar Section  */}
//       <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-200'}`}>
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="flex justify-between items-center h-16 sm:h-20">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link to="/" className="flex items-center">
//                 <img 
//                   src="/assets/images/nav-bar-logo.png" 
//                   alt="Logo" 
//                   className="h-12 sm:h-16 w-auto hover:opacity-90 transition-opacity"
//                 />
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
//               <ul className="flex space-x-2 lg:space-x-6">
//                 {navLinks.map((link) => (
//                   <li key={link.name}>
//                     <Link
//                       to={link.path}
//                       className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors
//                         ${location.pathname === link.path ? 
//                           'text-emerald-600 font-semibold' : 
//                           'text-gray-700 hover:text-emerald-500 hover:bg-gray-50'}
//                       `}
//                       aria-current={location.pathname === link.path ? "page" : undefined}
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               <div className="ml-4">
//                 <button 
//                   onClick={() => navigate('/registration')}
//                   className="px-4 py-2 lg:px-6 lg:py-3 bg-[#104382] text-white font-semibold rounded-md 
//                     transition-all duration-300 hover:bg-[#262271]  hover:scale-105 focus:outline-none focus:ring-2 
//                     focus:ring-emerald-500 focus:ring-opacity-50"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </nav>

//             {/* Mobile menu button */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
//                 aria-expanded={isMobileMenuOpen}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {isMobileMenuOpen ? (
//                   <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 ) : (
//                   <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
//           <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`block px-3 py-2 rounded-md text-base font-medium
//                   ${location.pathname === link.path ? 
//                     'bg-emerald-600 text-white' : 
//                     'text-gray-700 hover:bg-gray-100 hover:text-emerald-600'}`}
//                 aria-current={location.pathname === link.path ? "page" : undefined}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <button 
//               onClick={() => {
//                 navigate('/registration');
//                 setIsMobileMenuOpen(false);
//               }}
//               className="w-full mt-2 px-4 py-3 bg-[#104382] text-white font-semibold rounded-md 
//                 transition-all duration-300 hover:bg-[#262271] focus:outline-none focus:ring-2 
//                 focus:ring-emerald-500 focus:ring-opacity-50"
//             >
//             Sign Up
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// export default NavBar;







// src/components/navbar/index.jsx
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MyApp</Link>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-8 h-8 rounded-full"
                />
                <span>Welcome, {user.name}</span>
              </div>
              {user.role === 'admin' && (
                <Link to="/admin" className="hover:underline">Admin</Link>
              )}
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;