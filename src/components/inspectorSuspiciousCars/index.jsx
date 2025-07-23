// import React, { useState } from "react";
// import { motion } from "framer-motion";
// /* ------------ submit ------------ */
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     /* 1️⃣  Build multipart form data */
//     const fd = new FormData();
//     fd.append("fullName",      form.fullName);
//     fd.append("email",         form.email);
//     fd.append("vehicleType",   form.vehicleType);
//     fd.append("plateNumber",   form.plateNumber);
//     fd.append("locationSeen",  form.location);   // backend field
//     fd.append("datetimeSeen",  form.datetime);   // backend field
//     fd.append("description",   form.description);
//     if (form.image) fd.append("image", form.image); // must be field name "image"

//     /* 2️⃣  POST to the public route */
//     const res = await fetch(
//       "http://localhost:5000/api/public/report-suspicious",
//       { method: "POST", body: fd }
//     );

//     const data = await res.json();
//     if (!res.ok) throw new Error(data.error || "Submission failed");

//     /* 3️⃣  Success */
//     alert("✅ Report submitted!");
//     setForm({
//       fullName: "",
//       email: "",
//       vehicleType: "",
//       plateNumber: "",
//       location: "",
//       datetime: "",
//       description: "",
//       image: null,
//     });
//   } catch (err) {
//     alert(err.message || "Something went wrong");
//     console.error("Report submit error:", err);
//   }
// };

// export default function ReportSuspiciousVehicleForm() {
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     vehicleType: "",
//     plateNumber: "",
//     location: "",
//     datetime: "",
//     description: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("🚨 Report Submitted:", form);
//     // TODO: Replace with actual API call
//   };

//   return (
//     <section className="min-h-screen p-6 bg-gradient-to-tr from-blue-100 via-sky-200 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//       <motion.div
//         initial={{ opacity: 0, y: 32 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-3xl mx-auto bg-white/70 dark:bg-white/5 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10 p-8 rounded-2xl shadow-2xl"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
//           📄 Report Suspicious Vehicle
//         </h2>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               value={form.fullName}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
//             />
//           </div>

//           {/* Vehicle Type */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Vehicle Type
//             </label>
//             <select
//               name="vehicleType"
//               value={form.vehicleType}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
//             >
//               <option value="">Select Type</option>
//               <option>Car</option>
//               <option>Bike</option>
//               <option>Truck</option>
//               <option>Bus</option>
//               <option>Other</option>
//             </select>
//           </div>

//           {/* Plate Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Plate Number (if visible)
//             </label>
//             <input
//               type="text"
//               name="plateNumber"
//               value={form.plateNumber}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
//             />
//           </div>

//           {/* Location Seen */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Location Seen
//             </label>
//             <input
//               type="text"
//               name="location"
//               value={form.location}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
//             />
//           </div>

//           {/* Date/Time */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Date & Time
//             </label>
//             <input
//               type="datetime-local"
//               name="datetime"
//               value={form.datetime}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               rows={4}
//               required
//               className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
//             />
//           </div>

//           {/* Upload Image */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Upload Image (optional)
//             </label>
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
//               onChange={handleChange}
//               className="text-gray-700 dark:text-gray-300"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="text-end">
//             <button
//               type="submit"
//               className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-md font-semibold transition"
//             >
//               Submit Report
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </section>
//   );
// }
// 



// // src/pages/inspector/InspectorSuspiciousCars.jsx
// import React, { useState, useEffect, useCallback } from "react";
// import { motion } from "framer-motion";

// export default function InspectorSuspiciousCars() {
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const token = localStorage.getItem("authToken"); // adjust key if needed

//   const load = useCallback(async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const res = await fetch("http://localhost:5000/api/inspector/suspicious-reports", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Failed to fetch reports");
//       setReports(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, [token]);

//   useEffect(() => {
//     load();
//   }, [load]);

//   const updateStatus = async (id, status) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/inspector/suspicious-reports/${id}/status`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ status }),
//         }
//       );
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Failed to update status");
//       load();
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   if (loading) return <p className="p-8">Loading…</p>;
//   if (error) return <p className="p-8 text-red-600">{error}</p>;

//   return (
//     <section className="p-6 space-y-4">
//       <h1 className="text-3xl font-bold mb-4">Suspicious Vehicle Reports</h1>
//       {reports.length === 0 && <p>No reports yet.</p>}

//       {reports.map((r) => (
//         <motion.div
//           key={r._id}
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white dark:bg-gray-800 shadow rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between"
//         >
//           <div>
//             <p><strong>{r.vehicleType}</strong> – {r.plateNumber || "No plate"}</p>
//             <p className="text-sm text-gray-500">
//               Reported by {r.fullName} • {new Date(r.createdAt).toLocaleString()}
//             </p>
//             <p className="mt-2">{r.description}</p>
//             {r.imageUrl && (
//               <img
//                 src={`http://localhost:5000${r.imageUrl}`}
//                 alt="Suspicious"
//                 className="w-40 mt-2 rounded"
//               />
//             )}
//           </div>

//           <div className="mt-4 md:mt-0 space-x-2">
//             {r.status === "Pending" ? (
//               <>
//                 <button onClick={() => updateStatus(r._id, "Approved")} className="btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//                   Approve
//                 </button>
//                 <button onClick={() => updateStatus(r._id, "Rejected")} className="btn bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
//                   Reject
//                 </button>
//               </>
//             ) : (
//               <span className="font-semibold">{r.status}</span>
//             )}
//           </div>
//         </motion.div>
//       ))}
//     </section>
//   );
// }
