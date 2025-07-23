// // PublicAwarenessPage.jsx
// // Redesigned responsive page with gradient sections, Report & Print‑PDF buttons, and rich awareness content.
// // --- Dependencies ---
// // npm install react-to-print framer-motion react-icons
// // Tailwind CSS must have @tailwindcss/typography enabled for `prose` classes.

// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";
// import { motion } from "framer-motion";
// import {
//   FaCheckCircle,
//   FaExclamationTriangle,
//   FaShieldAlt,
//   FaFlag,
//   FaPrint,
// } from "react-icons/fa";

// export default function PublicAwarenessPage() {
//   const componentRef = useRef();
//   const navigate = useNavigate();

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: "Public Awareness – Vehicle FIR Verification",
//   });

//   return (
//     <section className="p-6 min-h-screen bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//       {/* Gradient Header */}
//       <div className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 py-12 px-6 md:px-16 lg:px-24 text-white rounded-2xl shadow-xl" ref={componentRef}>
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Public Safety &amp; Awareness</h1>
//           <p className="text-lg md:text-xl text-white/80">
//             Stay alert, report suspicious activity, and help create safer roads for everyone.
//           </p>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6 prose dark:prose-invert">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Your Role Matters</h2>
//             <p>
//               By staying vigilant and reporting issues promptly, you can prevent crime and protect lives. Here’s how you can contribute to a safer community:
//             </p>

//             <ul className="space-y-3">
//               {[
//                 "Observe vehicle make, model, color, and plate number.",
//                 "Assess unusual behavior—erratic driving, hidden plates, or abandoned vehicles.",
//                 "Report quickly via our online form to alert authorities.",
//               ].map((item, i) => (
//                 <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
//                   <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             {/* Action Buttons (hero) */}
//             <div className="flex flex-col sm:flex-row gap-4 mt-6">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => navigate("/report-suspicious")}
//                 className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 text-white font-semibold shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-red-300"
//               >
//                 <FaFlag className="mr-2 text-lg" /> Report Now
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handlePrint}
//                 className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-white font-semibold shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
//               >
//                 <FaPrint className="mr-2 text-lg" /> Print PDF
//               </motion.button>
//             </div>
//           </div>

//           <div>
//             <img
//               src="/assets/images/public01.png"
//               alt="Public awareness illustration"
//               className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//         </div>
//       </div>

//       {/* How It Works */}
//       <div className="max-w-7xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10">
//         <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">How to Report Suspicious Activity</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Enter Details",
//               desc: "Provide vehicle info, location, and description in our secure form.",
//               number: 1,
//             },
//             {
//               title: "Attach Evidence",
//               desc: "Upload photos or videos to support your report.",
//               number: 2,
//             },
//             {
//               title: "Submit &amp; Track",
//               desc: "Authorities receive your report instantly; you can track status via email.",
//               number: 3,
//             },
//           ].map((step, i) => (
//             <div key={i} className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//               <div className="text-blue-600 text-4xl font-bold mb-4">{step.number}</div>
//               <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
//               <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Purpose */}
//       <div className="max-w-7xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Public Awareness?</h2>
//             <p className="text-gray-700 dark:text-gray-300 mb-4">
//               Community vigilance is the first line of defense against vehicle‑related crimes. Your timely reports help law enforcement respond quickly and effectively.
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 mb-4">
//               Together, we can reduce theft, hit‑and‑run incidents, and other illegal activities on our roads.
//             </p>
//             <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 rounded-md">
//               <p className="text-yellow-700 dark:text-yellow-200 flex items-start">
//                 <FaExclamationTriangle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
//                 <span>
//                   Always stay safe—never confront or follow a suspicious vehicle. Report from a safe location.
//                 </span>
//               </p>
//             </div>
//           </div>
//           <div>
//             <img
//               src="/assets/images/public.png"
//               alt="Community safety illustration"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Disclaimer */}
//       <div className="max-w-7xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10" ref={componentRef}>
//         <div className="text-center mb-12">
//           <FaShieldAlt className="text-red-500 text-5xl mx-auto mb-4" />
//           <h2 className="text-3xl font-bold text-red-700">Important Disclaimer</h2>
//         </div>
//         <div className="space-y-4 text-gray-700 dark:text-gray-300 prose dark:prose-invert">
//           <p>
//             <strong>ATTENTION:</strong> This platform aggregates helpful links and information for public benefit. It is <strong>not an official government website</strong>.
//           </p>
//           <p>
//             Data is sourced from public domains; we are not liable for inaccuracies. Use this service responsibly and verify information through official channels when necessary.
//           </p>
//           <p>
//             For privacy or copyright concerns, please contact&nbsp;
//             <a href="mailto:vehiclefirpeshawar@gmail.com">vehiclefirpeshawar@gmail.com</a>.
//           </p>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="max-w-4xl mx-auto mt-12 bg-blue-700 text-white rounded-2xl shadow-2xl p-10 text-center">
//         <h2 className="text-3xl font-bold mb-6">Ready to Make a Report?</h2>
//         <p className="text-xl mb-8">
//           Your vigilance makes roads safer for everyone.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <LinkButton onClick={() => navigate("/report-suspicious")}
//             className="bg-white text-blue-700 hover:bg-gray-100">
//             <FaFlag className="mr-2" /> Report Now
//           </LinkButton>
//           <LinkButton onClick={handlePrint} className="bg-white text-blue-700 hover:bg-gray-100">
//             <FaPrint className="mr-2" /> Print PDF
//           </LinkButton>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Reusable button with motion
// function LinkButton({ onClick, className = "", children }) {
//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={onClick}
//       className={`inline-flex items-center justify-center px-8 py-3 font-bold rounded-md transition duration-300 ${className}`}
//     >
//       {children}
//     </motion.button>
//   );
// }











// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import {
//   FaCheckCircle,
//   FaExclamationTriangle,
//   FaShieldAlt,
//   FaFlag,
//   FaPrint,
//   FaSpinner,
// } from "react-icons/fa";

// export default function PublicAwarenessPage() {
//   const navigate = useNavigate();
//   const [isPrinting, setIsPrinting] = useState(false);
//   const [error, setError] = useState(null);
//   const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

//   const downloadFIRPDF = async () => {
//     setIsPrinting(true);
//     setError(null);
//     try {
//       // First get the user's latest approved report ID
//       const reportsResponse = await axios.get(
//         `${API_URL}/api/inspector/suspicious-reports`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`
//           }
//         }
//       );

//       // Find the first approved report
//       const approvedReport = reportsResponse.data.find(
//         report => report.status === "Approved"
//       );

//       if (!approvedReport) {
//         setError("No approved reports found");
//         return;
//       }

//       // Then download the PDF for that report
//       const pdfResponse = await axios.get(
//         `${API_URL}/api/inspector/print-fir/${approvedReport._id}`,
//         {
//           responseType: 'blob',
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("authToken")}`
//           }
//         }
//       );

//       const url = window.URL.createObjectURL(new Blob([pdfResponse.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `FIR_Report_${approvedReport.plateNumber}.pdf`);
//       document.body.appendChild(link);
//       link.click();
//       link.parentNode.removeChild(link);
//     } catch (err) {
//       console.error("PDF download failed:", err);
//       if (err.response && err.response.status === 404) {
//         setError("No approved reports found");
//       } else {
//         setError("Failed to download PDF. Please try again.");
//       }
//     } finally {
//       setIsPrinting(false);
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//       {/* Gradient Header */}
//       <div className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 py-12 px-6 md:px-16 lg:px-24 text-white rounded-b-2xl shadow-xl">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Public Safety &amp; Awareness</h1>
//           <p className="text-lg md:text-xl text-white/80">
//             Stay alert, report suspicious activity, and help create safer roads for everyone.
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Hero Section */}
//         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6 prose dark:prose-invert max-w-none">
//               <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400">Your Role Matters</h2>
//               <p>
//                 By staying vigilant and reporting issues promptly, you can prevent crime and protect lives. Here's how you can contribute to a safer community:
//               </p>

//               <ul className="space-y-3">
//                 {[
//                   "Observe vehicle make, model, color, and plate number.",
//                   "Assess unusual behavior—erratic driving, hidden plates, or abandoned vehicles.",
//                   "Report quickly via our online form to alert authorities.",
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
//                     <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 mt-8">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => navigate("/report-suspicious")}
//                   className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 text-white font-semibold shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-red-300"
//                 >
//                   <FaFlag className="mr-2 text-lg" /> Report Now
//                 </motion.button>

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={downloadFIRPDF}
//                   disabled={isPrinting}
//                   className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-white font-semibold shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-70"
//                 >
//                   {isPrinting ? (
//                     <>
//                       <FaSpinner className="mr-2 text-lg animate-spin" /> Generating...
//                     </>
//                   ) : (
//                     <>
//                       <FaPrint className="mr-2 text-lg" /> Print FIR
//                     </>
//                   )}
//                 </motion.button>
//               </div>
              
//               {error && (
//                 <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
//                   {error}
//                 </div>
//               )}
//             </div>

//             <div className="hidden lg:block">
//               <img
//                 src="/assets/images/public01.png"
//                 alt="Public awareness illustration"
//                 className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>
//         </div>

//         {/* How It Works */}
//         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12">
//           <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12">How to Report Suspicious Activity</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Enter Details",
//                 desc: "Provide vehicle info, location, and description in our secure form.",
//                 number: 1,
//               },
//               {
//                 title: "Attach Evidence",
//                 desc: "Upload photos or videos to support your report.",
//                 number: 2,
//               },
//               {
//                 title: "Submit & Track",
//                 desc: "Authorities receive your report instantly; you can track status via email.",
//                 number: 3,
//               },
//             ].map((step, i) => (
//               <div key={i} className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <div className="text-blue-600 dark:text-blue-400 text-4xl font-bold mb-4">{step.number}</div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{step.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Purpose */}
//         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">Why Public Awareness?</h2>
//               <p className="text-gray-700 dark:text-gray-300 mb-4">
//                 Community vigilance is the first line of defense against vehicle-related crimes. Your timely reports help law enforcement respond quickly and effectively.
//               </p>
//               <p className="text-gray-700 dark:text-gray-300 mb-4">
//                 Together, we can reduce theft, hit-and-run incidents, and other illegal activities on our roads.
//               </p>
//               <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 rounded-md">
//                 <p className="text-yellow-700 dark:text-yellow-200 flex items-start">
//                   <FaExclamationTriangle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
//                   <span>
//                     Always stay safe—never confront or follow a suspicious vehicle. Report from a safe location.
//                   </span>
//                 </p>
//               </div>
//             </div>
//             <div className="hidden md:block">
//               <img
//                 src="/assets/images/public.png"
//                 alt="Community safety illustration"
//                 className="w-full h-auto rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Disclaimer */}
//         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12">
//           <div className="text-center mb-8">
//             <FaShieldAlt className="text-red-500 text-5xl mx-auto mb-4" />
//             <h2 className="text-3xl font-bold text-red-700 dark:text-red-400">Important Disclaimer</h2>
//           </div>
//           <div className="space-y-4 text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none">
//             <p>
//               <strong>ATTENTION:</strong> This platform aggregates helpful links and information for public benefit. It is <strong>not an official government website</strong>.
//             </p>
//             <p>
//               Data is sourced from public domains; we are not liable for inaccuracies. Use this service responsibly and verify information through official channels when necessary.
//             </p>
//             <p>
//               For privacy or copyright concerns, please contact&nbsp;
//               <a href="mailto:vehiclefirpeshawar@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
//                 vehiclefirpeshawar@gmail.com
//               </a>.
//             </p>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="bg-blue-700 text-white rounded-2xl shadow-2xl p-10 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Make a Report?</h2>
//           <p className="text-xl mb-8">
//             Your vigilance makes roads safer for everyone.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => navigate("/report-suspicious")}
//               className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 font-bold rounded-md hover:bg-gray-100 transition"
//             >
//               <FaFlag className="mr-2" /> Report Now
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={downloadFIRPDF}
//               disabled={isPrinting}
//               className={`inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 font-bold rounded-md hover:bg-gray-100 transition ${isPrinting ? 'opacity-70 cursor-not-allowed' : ''}`}
//             >
//               {isPrinting ? (
//                 <>
//                   <FaSpinner className="mr-2 animate-spin" /> Generating...
//                 </>
//               ) : (
//                 <>
//                   <FaPrint className="mr-2" /> Print FIR
//                 </>
//               )}
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaShieldAlt,
  FaFlag,
  FaPrint,
  FaSpinner,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

export default function PublicAwarenessPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
//   const [searchInput, setSearchInput] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
  const [searchInput, setSearchInput] = useState({
  name: "",
  vehicleType: "",
  plateNumber: "",
});


 const handlePrintRequest = () => {
   setError(null);
   setSearchInput({ name: "", vehicleType: "", plateNumber: "" });
   setShowSearchModal(true);
 };

const handleSearchAndDownload = async () => {
  setIsLoading(true);
  setError(null);

  try {
    const reportsResponse = await axios.get(
      `${API_URL}/api/inspector/suspicious-reports`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

    const matchingReport = reportsResponse.data.find(
      (report) =>
        report.status === "Approved" &&
        report.fullName.toLowerCase() === searchInput.name.toLowerCase().trim() &&
        report.vehicleType.toLowerCase() === searchInput.vehicleType.toLowerCase().trim() &&
        report.plateNumber.toLowerCase() === searchInput.plateNumber.toLowerCase().trim()
    );

    if (!matchingReport) {
      setError("No approved report found for the provided details.");
      return;
    }

    setFormData(matchingReport); // or fetch detailed info if needed
    setShowFormModal(true);
    setShowSearchModal(false);
  } catch (err) {
    console.error("Search error:", err);
    setError("An error occurred while searching. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  const handlePrint = () => {
    const printContent = document.getElementById("print-content");
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>FIR Report</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #1a365d; }
            .section { margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
            .label { font-weight: bold; display: inline-block; width: 120px; }
            .footer { margin-top: 30px; font-size: 12px; text-align: center; color: #666; }
            .header { text-align: center; margin-bottom: 20px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            @media print {
              body { font-size: 12pt; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  const closeModal = () => {
    setShowFormModal(false);
    setShowSearchModal(false);
    setFormData(null);
  };

  return (
    <section className="min-h-screen bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">Search FIR Report</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Full Name
    </label>
    <input
      type="text"
      value={searchInput.name}
    //   onChange={(e) => setSearchInput({ ...searchInput, name: e.target.value })}
    // onChange={(e) => setSearchInput(e.target.value)} 
     onChange={(e) =>
   setSearchInput((prev) => ({ ...prev, name: e.target.value }))
 }
      className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
      placeholder="Enter full name"
    />
  </div>
  {/* <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Vehicle Type
    </label>
    <input
  type="text"
  value={searchInput.vehicleType}
  onChange={(e) =>
    setSearchInput((prev) => ({ ...prev, vehicleType: e.target.value }))
  }
 
   className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
      placeholder="Car / Motorcycle / etc."
/>
  </div> */}
  {/* Vehicle Type */}
  <div>
                <label className="block text-sm font-medium mb-1">Vehicle Type</label>
                <input
                  type="text"
                  value={searchInput.vehicleType}
                  /* ✅ FIXED — update the correct field */
                  onChange={(e) => setSearchInput((prev) => ({ ...prev, vehicleType: e.target.value }))}
                  className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="Car / Motorcycle / etc."
                />
              </div>
  {/* <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Plate Number
    </label>
    <input
  type="text"
  value={searchInput.plateNumber}
  onChange={(e) =>
    setSearchInput((prev) => ({ ...prev, plateNumber: e.target.value }))
  }
  className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
      placeholder="e.g., ABC-1234"
/>
      
  </div> */}
   {/* Plate Number */}
              <div>
                <label className="block text-sm font-medium mb-1">Plate Number</label>
                <input
                  type="text"
                  value={searchInput.plateNumber}
                  /* ✅ FIXED — update the correct field */
                  onChange={(e) => setSearchInput((prev) => ({ ...prev, plateNumber: e.target.value }))}
                  className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., ABC-1234"
                />
              </div>
</div>


            <div className="p-4 border-t flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md"
              >
                Cancel
              </button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSearchAndDownload}
                // disabled={isLoading || !searchInput.trim()}
                 disabled={
   isLoading ||
   !searchInput.name.trim() ||
   !searchInput.vehicleType.trim() ||
   !searchInput.plateNumber.trim()
 }
                className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" /> Searching...
                  </>
                ) : (
                  <>
                    <FaSearch className="mr-2" /> Search
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {showFormModal && formData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white dark:bg-gray-800 z-10">
              <h3 className="text-xl font-bold">FIR Report Details</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div id="print-content" className="p-6 space-y-6">
              <div className="header">
                <h1 className="text-2xl font-bold">FIR Report</h1>
                <p className="text-gray-500">Official Document</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="section">
                  <h2 className="font-bold text-lg mb-3 border-b pb-2">Vehicle Information</h2>
                  <p><span className="label">Plate Number:</span> {formData.plateNumber || "N/A"}</p>
                  <p><span className="label">Make/Model:</span> {formData.vehicleMake || "N/A"} / {formData.vehicleModel || "N/A"}</p>
                  <p><span className="label">Color:</span> {formData.vehicleColor || "N/A"}</p>
                  <p><span className="label">Type:</span> {formData.vehicleType || "N/A"}</p>
                </div>

                <div className="section">
                  <h2 className="font-bold text-lg mb-3 border-b pb-2">Incident Details</h2>
                  <p><span className="label">Location:</span> {formData.location || "N/A"}</p>
                  <p><span className="label">Date/Time:</span> {new Date(formData.incidentDate).toLocaleString() || "N/A"}</p>
                  <p><span className="label">Type:</span> {formData.incidentType || "N/A"}</p>
                </div>

                <div className="section">
                  <h2 className="font-bold text-lg mb-3 border-b pb-2">Reporter Information</h2>
                  <p><span className="label">Name:</span> {formData.reporterName || "Anonymous"}</p>
                  <p><span className="label">Contact:</span> {formData.reporterContact || "Not provided"}</p>
                  <p><span className="label">ID Type:</span> {formData.reporterIdType || "N/A"}</p>
                  <p><span className="label">ID Number:</span> {formData.reporterIdNumber || "N/A"}</p>
                </div>

                <div className="section">
                  <h2 className="font-bold text-lg mb-3 border-b pb-2">Report Status</h2>
                  <p><span className="label">Status:</span> <span className="capitalize">{formData.status}</span></p>
                  <p><span className="label">Report ID:</span> {formData._id || "N/A"}</p>
                  <p><span className="label">Officer:</span> {formData.officerName || "N/A"}</p>
                  <p><span className="label">Station:</span> {formData.policeStation || "N/A"}</p>
                </div>
              </div>

              <div className="section">
                <h2 className="font-bold text-lg mb-3 border-b pb-2">Incident Description</h2>
                <p className="whitespace-pre-line bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  {formData.description || "No description provided"}
                </p>
              </div>

              <div className="section">
                <h2 className="font-bold text-lg mb-3 border-b pb-2">Additional Information</h2>
                <p><span className="label">Witnesses:</span> {formData.witnesses || "None reported"}</p>
                <p><span className="label">Evidence:</span> {formData.evidence || "No evidence attached"}</p>
              </div>

              <div className="footer no-print">
                <p>Generated on {new Date().toLocaleDateString()}</p>
                <p>Official FIR Document - Do not duplicate</p>
              </div>
            </div>

            {/* <div className="p-4 border-t sticky bottom-0 bg-white dark:bg-gray-800 flex justify-end gap-3 no-print">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrint}
                className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center"
              >
                <FaPrint className="mr-2" /> Print Report
              </motion.button>
              <button
                onClick={closeModal}
                className="bg-gray-200 dark:bg-gray-700 px-6 py-2 rounded-md"
              >
                Close
              </button>
            </div> */}
            <div className="p-4 border-t sticky bottom-0 bg-white dark:bg-gray-800 flex flex-wrap gap-3 no-print">
  {/* <a
    // href={`http://localhost:5000/api/print-fir/${formData._id}`}
    href={`http://localhost:5000/api/print-fir/686796a961e6b6b756b222a4`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
  >
    Download PDF Report
  </a> */}
  <a
  href={`${API_URL}/api/print-fir/${formData?._id}`}   //  ← dynamic!
  target="_blank"
  rel="noopener noreferrer"
  className={`bg-green-600 text-white px-6 py-2 rounded-md transition
             ${!formData?._id ? 'opacity-50 pointer-events-none' : 'hover:bg-green-700'}`}
>
  Download PDF Report
</a>


  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={handlePrint}
    className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center"
  >
    <FaPrint className="mr-2" /> Print Report
  </motion.button>

  <button
    onClick={closeModal}
    className="bg-gray-200 dark:bg-gray-700 px-6 py-2 rounded-md"
  >
    Close
  </button>
</div>

          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 py-12 px-6 md:px-16 lg:px-24 text-white rounded-b-2xl shadow-xl">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Public Safety &amp; Awareness
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Stay alert, report suspicious activity, and help create safer roads for everyone.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 prose dark:prose-invert max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400">
                Your Role Matters
              </h2>
              <p>
                By staying vigilant and reporting issues promptly, you can prevent
                crime and protect lives. Here's how you can contribute to a safer
                community:
              </p>

              <ul className="space-y-3">
                {[
                  "Observe vehicle make, model, color, and plate number.",
                  "Assess unusual behavior—erratic driving, hidden plates, or abandoned vehicles.",
                  "Report quickly via our online form to alert authorities.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                    <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/report-suspicious")}
                  className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 text-white font-semibold shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-red-300"
                >
                  <FaFlag className="mr-2 text-lg" /> Report Now
                </motion.button>

                <motion.button
                
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrintRequest}
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-white font-semibold shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <FaPrint className="mr-2 text-lg" /> Print FIR
                </motion.button>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg flex items-start">
                  <FaExclamationTriangle className="mr-2 mt-1 flex-shrink-0" />
                  {error}
                </div>
              )}
            </div>

            <div className="hidden lg:block">
              <img
                src="/assets/images/public01.png"
                alt="Public awareness illustration"
                className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12">
            How to Report Suspicious Activity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Enter Details",
                desc: "Provide vehicle info, location, and description in our secure form.",
                number: 1,
              },
              {
                title: "Attach Evidence",
                desc: "Upload photos or videos to support your report.",
                number: 2,
              },
              {
                title: "Submit & Track",
                desc: "Authorities receive your report instantly; you can track status via email.",
                number: 3,
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 text-4xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Purpose Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                Why Public Awareness?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Community vigilance is the first line of defense against
                vehicle-related crimes. Your timely reports help law enforcement
                respond quickly and effectively.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Together, we can reduce theft, hit-and-run incidents, and other
                illegal activities on our roads.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 rounded-md">
                <p className="text-yellow-700 dark:text-yellow-200 flex items-start">
                  <FaExclamationTriangle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Always stay safe—never confront or follow a suspicious vehicle.
                    Report from a safe location.
                  </span>
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/assets/images/public.png"
                alt="Community safety illustration"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <FaShieldAlt className="text-red-500 text-5xl mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-red-700 dark:text-red-400">
              Important Disclaimer
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none">
            <p>
              <strong>ATTENTION:</strong> This platform aggregates helpful links
              and information for public benefit. It is{" "}
              <strong>not an official government website</strong>.
            </p>
            <p>
              Data is sourced from public domains; we are not liable for
              inaccuracies. Use this service responsibly and verify information
              through official channels when necessary.
            </p>
            <p>
              For privacy or copyright concerns, please contact&nbsp;
              <a
                href="mailto:vehiclefirpeshawar@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                vehiclefirpeshawar@gmail.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-700 text-white rounded-2xl shadow-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Report?</h2>
          <p className="text-xl mb-8">
            Your vigilance makes roads safer for everyone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/report-suspicious")}
              className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 font-bold rounded-md hover:bg-gray-100 transition"
            >
              <FaFlag className="mr-2" /> Report Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrintRequest}
              className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3 font-bold rounded-md hover:bg-gray-100 transition"
            >
              <FaPrint className="mr-2" /> Print FIR
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}