import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Logo and Description Column - Centered on mobile, left-aligned on md+ */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex justify-center md:justify-start items-center">
                        <img 
                            src="/assets/images/footbarLogo.png" 
                            alt="Traffic Police Peshawar Logo" 
                            className="h-32 w-auto"
                        />
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs md:max-w-none">
                        Enhancing quality of life in Peshawar by ensuring safer roads and communities through effective traffic management and public safety initiatives.
                    </p>
                    <div className="pt-4">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Online Vehicles FIR Verification. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link 
                                to="/" 
                                className="text-sm hover:text-white transition-colors duration-200"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/Searchvehical" 
                                className="text-sm hover:text-white transition-colors duration-200"
                            >
                                Vehical Verification
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/public-awareness" 
                                className="text-sm hover:text-white transition-colors duration-200"
                            >
                                Print FIR Report
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/public-awareness" 
                                className="text-sm hover:text-white transition-colors duration-200"
                            >
                                FIR Report
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className="text-sm hover:text-white transition-colors duration-200"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                className="text-sm hover:text-white transition-colors duration-200"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact and Social Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
                        Connect With Us
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <h4 className="text-sm font-medium text-gray-400">Helpline</h4>
                            <p className="text-white">1915</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-gray-400">Email</h4>
                            <p className="text-white">info@ptpkp.gov.pk</p>
                        </div>
                    </div>
                    <div className="pt-2">
                        <h4 className="text-sm font-medium text-gray-400 mb-2">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a 
                                href="https://facebook.com/CityTrafficPolicePeshawar" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://twitter.com/TrafficPeshawar/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                </svg>
                            </a>
                            <a 
                                href="https://www.instagram.com/trafficpolicepeshawar/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;