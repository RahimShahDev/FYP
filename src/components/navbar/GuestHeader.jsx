// src/components/navbar/GuestHeader.jsx
import { Link } from 'react-router-dom';

export default function GuestHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Vehicle FIR System</h1>
        <nav className="flex space-x-4">
          <Link 
            to="/login" 
            className="px-3 py-2 text-blue-600 hover:text-blue-800"
          >
            Login
          </Link>
          <Link
            to="/registration"
            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}