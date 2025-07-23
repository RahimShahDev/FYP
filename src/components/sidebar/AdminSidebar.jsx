// import { 
//   HomeIcon,
//   TruckIcon,
//   DocumentArrowUpIcon,
//   XMarkIcon
// } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom';

// export default function AdminSidebar({ isOpen, onClose }) {
//   return (
//     <>
//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={onClose}
//           aria-hidden="true"
//         />
//       )}

//       {/* Mobile Sidebar */}
//       <div className={`fixed inset-y-0 z-50 w-64 bg-gray-800 text-white transition-all duration-300 ease-in-out lg:hidden ${
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       }`}>
//         <div className="p-4 h-full flex flex-col">
//           <button 
//             onClick={onClose} 
//             className="flex items-center text-white mb-6 p-2 hover:bg-gray-700 rounded"
//           >
//             <XMarkIcon className="h-6 w-6 mr-2" />
//             Close
//           </button>
//           <nav className="flex-1 space-y-2">
//             <Link to="/dashboard" className="flex items-center py-2 px-3 rounded hover:bg-gray-700">
//               <HomeIcon className="h-5 w-5 mr-3" />
//               Dashboard
//             </Link>
//             <Link to="/vehicles" className="flex items-center py-2 px-3 rounded hover:bg-gray-700">
//               <TruckIcon className="h-5 w-5 mr-3" />
//               Vehicles
//             </Link>
//             <Link to="/upload" className="flex items-center py-2 px-3 rounded hover:bg-gray-700">
//               <DocumentArrowUpIcon className="h-5 w-5 mr-3" />
//               Upload CSV
//             </Link>
//           </nav>
//         </div>
//       </div>

//       {/* Desktop Sidebar (always visible for admin) */}
//       <div className="hidden lg:block fixed inset-y-0 z-40 w-64 bg-gray-800 text-white pt-16">
//         <div className="p-4 h-full overflow-y-auto">
//           <nav className="space-y-2">
//             <Link to="/dashboard" className="flex items-center py-2 px-3 rounded hover:bg-gray-700">
//               <HomeIcon className="h-5 w-5 mr-3" />
//               Dashboard
//             </Link>
//             <Link to="/vehicles" className="flex items-center py-2 px-3 rounded hover:bg-gray-700">
//               <TruckIcon className="h-5 w-5 mr-3" />
//               Vehicles
//             </Link>
//             <Link to="/upload" className="flex items-center py-2 px-3 rounded hover:bg-gray-700">
//               <DocumentArrowUpIcon className="h-5 w-5 mr-3" />
//               Upload CSV
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }