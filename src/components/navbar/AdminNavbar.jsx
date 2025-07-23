import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Corrected imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebookF, 
  faTwitter 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faHome, 
  faCar, 
  faUpload, 
  faSignOutAlt 
} from "@fortawesome/free-solid-svg-icons";


function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated admin navigation links
  const adminNavLinks = [
    { name: "Dashboard", path: "/dashboard", icon: faHome },
    { name: "Vehicles", path: "/vehicles", icon: faCar },
    { name: "Upload CSV", path: "/upload", icon: faUpload },
  ];

  const handleLogout = () => {
    // Placeholder for logout functionality
    navigate('/admin-login');
  };

  return (
    <>
      {/* Admin Header Section */}
      <section className="bg-[#104382] px-5 py-2 w-full overflow-hidden">
        <div className="flex flex-wrap justify-between items-center">
          {/* Admin Portal Title */}
          <div className="w-full md:w-2/3 overflow-hidden">
            <div className="text-white font-semibold">
              Vehicle FIR Verification System - Admin Portal
            </div>
          </div>

          {/* Social Media Links (optional for admin) */}
          <div className="flex items-center gap-3">
            <div className="flex gap-3">
              {[
                {
                  href: "https://facebook.com/CityTrafficPolicePeshawar",
                  icon: faFacebookF,
                  color: "text-[#1877F2]",
                  hover: "hover:bg-[#1877F2]/20"
                },
                {
                  href: "https://twitter.com/TrafficPeshawar/",
                  icon: faTwitter,
                  color: "text-[#1DA1F2]",
                  hover: "hover:bg-[#1DA1F2]/20"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-white/10 ${social.hover} w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200`}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className={`text-[18px] ${social.color} group-hover:scale-110 transition-transform`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admin NavBar Section */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-200'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/dashboard" className="flex items-center">
                <img 
                  src="/assets/images/navbarLogo.png" 
                  alt="Admin Logo" 
                  className="h-16 sm:h-28 w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
              <ul className="flex space-x-2 lg:space-x-6">
                {adminNavLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors flex items-center
                        ${location.pathname === link.path ? 
                          'text-emerald-600 font-semibold' : 
                          'text-gray-700 hover:text-emerald-500 hover:bg-gray-50'}
                      `}
                      aria-current={location.pathname === link.path ? "page" : undefined}
                    >
                      <FontAwesomeIcon icon={link.icon} className="mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="ml-4">
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 lg:px-6 lg:py-3 bg-red-600 text-white font-semibold rounded-md 
                    transition-all duration-300 hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 
                    focus:ring-red-500 focus:ring-opacity-50 flex items-center"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Logout
                </button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open admin menu</span>
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
            {adminNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium flex items-center
                  ${location.pathname === link.path ? 
                    'bg-emerald-600 text-white' : 
                    'text-gray-700 hover:bg-gray-100 hover:text-emerald-600'}`}
                aria-current={location.pathname === link.path ? "page" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={link.icon} className="mr-3" />
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-2 px-4 py-3 bg-red-600 text-white font-semibold rounded-md 
                transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 
                focus:ring-red-500 focus:ring-opacity-50 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;