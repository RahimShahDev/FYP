import React from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="p-6 min-h-screen bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Gradient Header */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 py-12 px-6 md:px-16 lg:px-24 text-white rounded-2xl shadow-xl">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">About Our Vehicle FIR Verification</h1>
          <p className="text-lg md:text-xl text-white/80">
            A safe, reliable, and efficient platform for checking vehicle legal status.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Secure Your Car Deals with Confidence</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Our vehicle verification system helps you instantly check important vehicle details before making a purchase.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaCheckCircle className="text-green-600 mr-2" />
                Real-time vehicle information check
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaCheckCircle className="text-green-600 mr-2" />
                Multiple verification methods
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <FaCheckCircle className="text-green-600 mr-2" />
                Reliable and secure vehicle verification
              </li>
            </ul>

            <Link
              to="/Searchvehical"
              className="inline-block px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition duration-300"
            >
              Start Vehicle Check
            </Link>
          </div>

          <div>
            <img
              src="/assets/images/vehicle-verification.svg"
              alt="Vehicle verification illustration"
              className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">How Vehicle Verification Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            title: "Enter Vehicle Details",
            desc: "Users input the vehicle registration number or chassis number in the required format.",
            number: 1,
          }, {
            title: "Database Verification",
            desc: "The website retrieves information from relevant databases to verify the vehicle details.",
            number: 2,
          }, {
            title: "Get Results",
            desc: "Displayed information includes make, model, year, engine number, and ownership details.",
            number: 3,
          }].map((step, i) => (
            <div key={i} className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-4xl font-bold mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Purpose */}
      <div className="max-w-7xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Purpose of Vehicle Verification</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The primary purpose of vehicle verification is to prevent fraud and ensure that vehicles on the road are legal and safe.
              By checking a vehicle's details, users can verify its ownership, registration, and roadworthiness.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Additionally, this service can help in tracking stolen vehicles and identifying vehicles that have been involved in accidents or criminal activities.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 rounded-md">
              <p className="text-yellow-700 dark:text-yellow-200 flex items-start">
                <FaExclamationTriangle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Important: Always perform a physical inspection and obtain a professional evaluation before purchasing a vehicle.
                </span>
              </p>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/about-image.jpg"
              alt="Vehicle safety illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10">
        <div className="text-center mb-12">
          <FaShieldAlt className="text-red-500 text-5xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-red-700">Important Disclaimer</h2>
        </div>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p><strong>ATTENTION PLEASE:</strong> This website is developed for users to get all helpful and important links, information, and help at one place.</p>
          <p>This website is <strong>NOT AN OFFICIAL WEBSITE FOR ANY GOVERNMENT</strong>; neither is this website related to any government department.</p>
          <p>The verification information presented in this website is taken directly from other public domains. We are not responsible for any inaccurate information.</p>
          <p>We do not own any content shown on this website and are not liable for any errors. This is not a transactional website.</p>
          <p>This is a completely <strong>FREE</strong> service. For any privacy or copyright concerns, contact:
            <a href="mailto:vehiclefirpeshawar@gmail.com" className="text-blue-600 hover:underline ml-1">vehiclefirpeshawar@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-12 bg-blue-700 text-white rounded-2xl shadow-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Verify a Vehicle?</h2>
        <p className="text-xl mb-8">
          Ensure your safety and peace of mind with our free verification service.
        </p>
        <Link to="/SearchVehical" className="px-8 py-3 bg-white text-blue-700 font-bold rounded-md hover:bg-gray-100 transition duration-300">
          Start Verification Now
        </Link>
      </div>
    </section>
  );
};

export default About;
