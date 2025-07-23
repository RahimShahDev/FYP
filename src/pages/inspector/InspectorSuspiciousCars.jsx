// /*  InspectorSuspiciousCars.jsx
//     – modern, stand‑alone full‑screen view –             */

// import React, { useEffect, useState, useMemo, useCallback } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaCheckCircle,
//   FaTimesCircle,
//   FaClock,
//   FaSyncAlt,
//   FaSearch,
//   FaTimes,
//   FaCheck,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// /* ───────────────────────── helpers – small stateless bits */

// const badge = (status = "Pending") => {
//   const map = {
//     Approved: ["bg-green-100 text-green-800", <FaCheckCircle />],
//     Rejected: ["bg-red-100 text-red-800", <FaTimesCircle />],
//     Pending:  ["bg-yellow-100 text-yellow-800", <FaClock />],
//   };
//   const [cls, icon] = map[status] ?? map.Pending;
//   return (
//     <span className={`inline-flex items-center gap-1 px-2 py-[2px] rounded-full text-xs font-medium ${cls}`}>
//       {icon} {status}
//     </span>
//   );
// };

// const Meta = ({ label, children }) => (
//   <p className="text-sm">
//     <span className="font-medium">{label}:</span>&nbsp;
//     {children || "—"}
//   </p>
// );

// /* ───────────────────────── component */

// export default function InspectorSuspiciousCars() {
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [tab, setTab] = useState("All");
//   const [q, setQ] = useState("");
//   const [drawer, setDrawer] = useState(null);
//   const navigate = useNavigate();
//   const token = localStorage.getItem("authToken");

//   /* ─ fetch */
//   const loadReports = useCallback(async () => {
//     setLoading(true);
//     try {
//       const { data } = await axios.get(
//         "http://localhost:5000/api/inspector/suspicious-reports",
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setReports(data);
//     } catch (err) {
//       toast.error("Failed to load reports");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }, [token]);

//   useEffect(() => { loadReports(); }, [loadReports]);

//   /* ─ approve / reject */
//   const updateStatus = async (id, status) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/inspector/suspicious-reports/${id}/status`,
//         { status },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       toast.success(`Report ${status.toLowerCase()}!`);
//       setReports(prev => prev.map(r => (r._id === id ? { ...r, status } : r)));
//       // setDrawer(d => (d?._id === id ? { ...d, status } : d));
//       setDrawer(null);
//     } catch (err) {
//       toast.error("Update failed");
//       console.error(err);
//     }
//   };

//   /* ─ search + filter */
//   const filtered = useMemo(() => {
//     let list = tab === "All" ? reports : reports.filter(r => r.status === tab);
//     if (q.trim()) {
//       const needle = q.toLowerCase();
//       list = list.filter(
//         r =>
//           r.plateNumber?.toLowerCase().includes(needle) ||
//           r.vehicleType?.toLowerCase().includes(needle) ||
//           r.fullName?.toLowerCase().includes(needle)
//       );
//     }
//     return list;
//   }, [reports, tab, q]);

//   /* quick “/” to focus */
//   useEffect(() => {
//     const handler = e => {
//       if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
//         e.preventDefault();
//         document.getElementById("searchBox")?.focus();
//       }
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   /* ─ UI */
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="min-h-screen flex flex-col bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200
//                  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100"
//     >
//       {/* ─ header */}
//       <header className="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow">
//         <div className="max-w-7xl mx-auto flex items-center gap-4 p-4">
//           <button onClick={() => navigate(-1)} className="hover:underline">
//             &larr; Back
//           </button>
//           <h1 className="text-xl sm:text-2xl font-bold flex-grow">
//             Suspicious Vehicle Reports
//           </h1>
//           <button
//             title="Refresh"
//             onClick={loadReports}
//             className="p-2 rounded-full text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 transition"
//           >
//             <FaSyncAlt />
//           </button>
//         </div>
//       </header>

//       {/* ─ filter bar */}
//       <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
//         {/* tabs */}
//         <div className="flex gap-2">
//           {["All", "Pending", "Approved", "Rejected"].map(t => (
//             <button
//               key={t}
//               onClick={() => setTab(t)}
//               className={`px-3 py-1 rounded-full text-sm font-medium transition
//                 ${tab === t
//                   ? "bg-blue-600 text-white shadow"
//                   : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-700 hover:bg-gray-300"}`}
//             >
//               {t}
//             </button>
//           ))}
//         </div>
//         {/* search */}
//         <label className="relative flex-grow sm:max-w-xs">
//           <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             id="searchBox"
//             type="text"
//             placeholder="Search…   ( / )"
//             value={q}
//             onChange={e => setQ(e.target.value)}
//             className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/90 dark:bg-gray-800/80 border
//                        border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500
//                        text-sm placeholder-gray-400"
//           />
//         </label>
//       </section>

//       {/* ─ list */}
//       <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 mt-8">
//         {loading ? (
//           <Skeleton />
//         ) : filtered.length === 0 ? (
//           <p className="text-center text-gray-600 dark:text-gray-400">
//             No reports match your filter.
//           </p>
//         ) : (
//           <ul className="grid gap-6">
//             <AnimatePresence>
//               {filtered.map(r => (
//                 <motion.li
//                   key={r._id}
//                   layoutId={r._id}           /* smooth cross‑fade on open */
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   className="bg-white/90 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700
//                              p-6 rounded-2xl shadow-sm hover:shadow-lg cursor-pointer transition"
//                   onClick={() => setDrawer(r)}
//                 >
//                   <div className="flex justify-between flex-wrap gap-2">
//                     <span className="font-semibold">
//                       {r.vehicleType} • {r.plateNumber}
//                     </span>
//                     {badge(r.status)}
//                   </div>
//                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
//                     {r.description || "—"}
//                   </p>
//                 </motion.li>
//               ))}
//             </AnimatePresence>
//           </ul>
//         )}
//       </main>

//       {/* ─ drawer / slide‑over */}
//       <AnimatePresence>
//         {drawer && (
//           <>
//             {/* backdrop */}
//             <motion.div
//               key="backdrop"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: .6 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setDrawer(null)}
//               className="fixed inset-0 bg-black backdrop-blur-sm z-30"
//             />

//             {/* panel */}
//             <motion.div
//   key="modal"
//   layoutId={drawer._id}
//   initial={{ scale: 0.9, opacity: 0 }}
//   animate={{ scale: 1, opacity: 1 }}
//   exit={{ scale: 0.9, opacity: 0 }}
//   transition={{ type: "spring", damping: 20, stiffness: 300 }}
//   className="fixed inset-0 z-40 flex items-center justify-center p-4"
// >
//   <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
//     {/* header */}
//     <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
//       <h2 className="font-semibold text-lg">
//         {drawer.vehicleType} • {drawer.plateNumber}
//       </h2>
//       <button onClick={() => setDrawer(null)} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
//         <FaTimes className="h-5 w-5" />
//       </button>
//     </div>

//     {/* body */}
//     <div className="p-6 space-y-4 overflow-y-auto max-h-[75vh]">
//       <Meta label="Reporter">{drawer.fullName}</Meta>
//       <Meta label="Email">{drawer.email}</Meta>
//       <Meta label="Location">{drawer.locationSeen}</Meta>
//       <Meta label="Seen at">{new Date(drawer.datetimeSeen).toLocaleString()}</Meta>

//       {drawer.description && (
//         <p className="text-gray-700 dark:text-gray-300 text-sm">{drawer.description}</p>
//       )}

//       {drawer.imageUrl && (
//         <img
//           className="w-full rounded-lg shadow"
//           src={`http://localhost:5000${drawer.imageUrl}`}
//           alt="evidence"
//         />
//       )}
//     </div>

//     {/* footer for actions */}
//     {drawer.status === "Pending" && (
//       <div className="p-4 border-t dark:border-gray-700 flex justify-end gap-3">
//         <button
//           onClick={() => updateStatus(drawer._id, "Rejected")}
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
//         >
//           <FaTimes /> Reject
//         </button>
//         <button
//           onClick={() => updateStatus(drawer._id, "Approved")}
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
//         >
//           <FaCheck /> Approve
//         </button>
//       </div>
//     )}
//   </div>
// </motion.div>

//           </>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// /* skeleton list – matches Vehicles loader style */
// const Skeleton = () => (
//   <div className="grid gap-6">
//     {Array.from({ length: 4 }).map((_, i) => (
//       <div
//         key={i}
//         className="animate-pulse h-24 rounded-2xl bg-gray-300/60 dark:bg-gray-700/50"
//       />
//     ))}
//   </div>
// );












/*  InspectorSuspiciousCars.jsx – modern, stand‑alone full‑screen view */

// import React, { useEffect, useState, useMemo, useCallback } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaCheckCircle,
//   FaTimesCircle,
//   FaClock,
//   FaSyncAlt,
//   FaSearch,
//   FaTimes,
//   FaCheck,
//   FaDownload,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// /* ───────────────────────── helpers */

// const badge = (status = "Pending") => {
//   const map = {
//     Approved: ["bg-green-100 text-green-800", <FaCheckCircle />],
//     Rejected: ["bg-red-100 text-red-800", <FaTimesCircle />],
//     Pending: ["bg-yellow-100 text-yellow-800", <FaClock />],
//   };
//   const [cls, icon] = map[status] ?? map.Pending;
//   return (
//     <span className={`inline-flex items-center gap-1 px-2 py-[2px] rounded-full text-xs font-medium ${cls}`}>
//       {icon} {status}
//     </span>
//   );
// };

// const Meta = ({ label, children }) => (
//   <p className="text-sm">
//     <span className="font-medium">{label}:</span>&nbsp;
//     {children || "—"}
//   </p>
// );

// /* ───────────────────────── component */

// export default function InspectorSuspiciousCars() {
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [tab, setTab] = useState("All");
//   const [q, setQ] = useState("");
//   const [drawer, setDrawer] = useState(null);
//   const navigate = useNavigate();
//   const token = localStorage.getItem("authToken");

//   /* ─ fetch */
//   const loadReports = useCallback(async () => {
//     setLoading(true);
//     try {
//       const { data } = await axios.get(
//         "http://localhost:5000/api/inspector/suspicious-reports",
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setReports(data);
//     } catch (err) {
//       toast.error("Failed to load reports");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   }, [token]);

//   useEffect(() => {
//     loadReports();
//   }, [loadReports]);

//   /* ─ approve / reject */
//   const updateStatus = async (id, status) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/inspector/suspicious-reports/${id}/status`,
//         { status },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       toast.success(`Report ${status.toLowerCase()}!`);
//       setReports(prev => prev.map(r => (r._id === id ? { ...r, status } : r)));
//       setDrawer(null);
//     } catch (err) {
//       toast.error("Update failed");
//       console.error(err);
//     }
//   };

//   /* ─ search + filter */
//   const filtered = useMemo(() => {
//     let list = tab === "All" ? reports : reports.filter(r => r.status === tab);
//     if (q.trim()) {
//       const needle = q.toLowerCase();
//       list = list.filter(
//         r =>
//           r.plateNumber?.toLowerCase().includes(needle) ||
//           r.vehicleType?.toLowerCase().includes(needle) ||
//           r.fullName?.toLowerCase().includes(needle)
//       );
//     }
//     return list;
//   }, [reports, tab, q]);

//   /* ─ download CSV */
//   const downloadCSV = async (status) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/inspector/download-firs/${status}`, {
//         responseType: "blob",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const blob = new Blob([response.data], { type: "text/csv" });
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", `FIRs_${status}.csv`);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//     } catch (err) {
//       toast.error(`Failed to download ${status} FIRs`);
//       console.error(err);
//     }
//   };

//   /* quick “/” to focus */
//   useEffect(() => {
//     const handler = e => {
//       if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
//         e.preventDefault();
//         document.getElementById("searchBox")?.focus();
//       }
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="min-h-screen flex flex-col bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100"
//     >
//       {/* ─ header */}
//       <header className="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow">
//         <div className="max-w-7xl mx-auto flex items-center gap-4 p-4 flex-wrap">
//           <button onClick={() => navigate(-1)} className="hover:underline">
//             &larr; Back
//           </button>
//           <h1 className="text-xl sm:text-2xl font-bold flex-grow">
//             Suspicious Vehicle Reports
//           </h1>
//           <button
//             title="Refresh"
//             onClick={loadReports}
//             className="p-2 rounded-full text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 transition"
//           >
//             <FaSyncAlt />
//           </button>

//           {/* 🔽 CSV download buttons */}
//           {["Approved", "Rejected", "Pending"].map(status => (
//             <button
//               key={status}
//               onClick={() => downloadCSV(status)}
//               className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 border dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//             >
//               <FaDownload /> Download {status}
//             </button>
//           ))}
//         </div>
//       </header>

//       {/* ─ filter bar */}
//       <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
//         <div className="flex gap-2">
//           {["All", "Pending", "Approved", "Rejected"].map(t => (
//             <button
//               key={t}
//               onClick={() => setTab(t)}
//               className={`px-3 py-1 rounded-full text-sm font-medium transition
//                 ${tab === t
//                   ? "bg-blue-600 text-white shadow"
//                   : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-700 hover:bg-gray-300"}`}
//             >
//               {t}
//             </button>
//           ))}
//         </div>
//         <label className="relative flex-grow sm:max-w-xs">
//           <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             id="searchBox"
//             type="text"
//             placeholder="Search…   ( / )"
//             value={q}
//             onChange={e => setQ(e.target.value)}
//             className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/90 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 text-sm placeholder-gray-400"
//           />
//         </label>
//       </section>

//       {/* ─ list */}
//       <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 mt-8">
//         {loading ? (
//           <Skeleton />
//         ) : filtered.length === 0 ? (
//           <p className="text-center text-gray-600 dark:text-gray-400">
//             No reports match your filter.
//           </p>
//         ) : (
//           <ul className="grid gap-6">
//             <AnimatePresence>
//               {filtered.map(r => (
//                 <motion.li
//                   key={r._id}
//                   layoutId={r._id}
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   className="bg-white/90 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-lg cursor-pointer transition"
//                   onClick={() => setDrawer(r)}
//                 >
//                   <div className="flex justify-between flex-wrap gap-2">
//                     <span className="font-semibold">
//                       {r.vehicleType} • {r.plateNumber}
//                     </span>
//                     {badge(r.status)}
//                   </div>
//                   <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
//                     {r.description || "—"}
//                   </p>
//                 </motion.li>
//               ))}
//             </AnimatePresence>
//           </ul>
//         )}
//       </main>

//       {/* ─ drawer */}
//       <AnimatePresence>
//         {drawer && (
//           <>
//             <motion.div
//               key="backdrop"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.6 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setDrawer(null)}
//               className="fixed inset-0 bg-black backdrop-blur-sm z-30"
//             />
//             <motion.div
//               key="modal"
//               layoutId={drawer._id}
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 20, stiffness: 300 }}
//               className="fixed inset-0 z-40 flex items-center justify-center p-4"
//             >
//               <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
//                 <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
//                   <h2 className="font-semibold text-lg">
//                     {drawer.vehicleType} • {drawer.plateNumber}
//                   </h2>
//                   <button onClick={() => setDrawer(null)} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
//                     <FaTimes className="h-5 w-5" />
//                   </button>
//                 </div>

//                 <div className="p-6 space-y-4 overflow-y-auto max-h-[75vh]">
//                   <Meta label="Reporter">{drawer.fullName}</Meta>
//                   <Meta label="Email">{drawer.email}</Meta>
//                   <Meta label="Location">{drawer.locationSeen}</Meta>
//                   <Meta label="Seen at">{new Date(drawer.datetimeSeen).toLocaleString()}</Meta>
//                   {drawer.description && (
//                     <p className="text-gray-700 dark:text-gray-300 text-sm">{drawer.description}</p>
//                   )}
//                   {drawer.imageUrl && (
//                     <img className="w-full rounded-lg shadow" src={`http://localhost:5000${drawer.imageUrl}`} alt="evidence" />
//                   )}
//                 </div>

//                 {drawer.status === "Pending" && (
//                   <div className="p-4 border-t dark:border-gray-700 flex justify-end gap-3">
//                     <button
//                       onClick={() => updateStatus(drawer._id, "Rejected")}
//                       className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
//                     >
//                       <FaTimes /> Reject
//                     </button>
//                     <button
//                       onClick={() => updateStatus(drawer._id, "Approved")}
//                       className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
//                     >
//                       <FaCheck /> Approve
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// /* Skeleton loader */
// const Skeleton = () => (
//   <div className="grid gap-6">
//     {Array.from({ length: 4 }).map((_, i) => (
//       <div key={i} className="animate-pulse h-24 rounded-2xl bg-gray-300/60 dark:bg-gray-700/50" />
//     ))}
//   </div>
// );



















/*  InspectorSuspiciousCars.jsx – modern, stand‑alone full‑screen view */

import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaSyncAlt,
  FaSearch,
  FaTimes,
  FaCheck,
  FaDownload,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/* ───────────────────────── helpers */

const badge = (status = "Pending") => {
  const map = {
    Approved: ["bg-green-100 text-green-800", <FaCheckCircle />],
    Rejected: ["bg-red-100 text-red-800", <FaTimesCircle />],
    Pending: ["bg-yellow-100 text-yellow-800", <FaClock />],
  };
  const [cls, icon] = map[status] ?? map.Pending;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-[2px] rounded-full text-xs font-medium ${cls}`}>
      {icon} {status}
    </span>
  );
};

const Meta = ({ label, children }) => (
  <p className="text-sm">
    <span className="font-medium">{label}:</span>&nbsp;
    {children || "—"}
  </p>
);

/* ───────────────────────── component */

export default function InspectorSuspiciousCars() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("All");
  const [q, setQ] = useState("");
  const [drawer, setDrawer] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  /* ─ fetch */
  const loadReports = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/inspector/suspicious-reports",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setReports(data);
    } catch (err) {
      toast.error("Failed to load reports");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadReports();
  }, [loadReports]);

  /* ─ approve / reject */
  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/inspector/suspicious-reports/${id}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(`Report ${status.toLowerCase()}!`);
      setReports(prev => prev.map(r => (r._id === id ? { ...r, status } : r)));
      setDrawer(null);
    } catch (err) {
      toast.error("Update failed");
      console.error(err);
    }
  };

  /* ─ search + filter */
  const filtered = useMemo(() => {
    let list = tab === "All" ? reports : reports.filter(r => r.status === tab);
    if (q.trim()) {
      const needle = q.toLowerCase();
      list = list.filter(
        r =>
          r.plateNumber?.toLowerCase().includes(needle) ||
          r.vehicleType?.toLowerCase().includes(needle) ||
          r.fullName?.toLowerCase().includes(needle)
      );
    }
    return list;
  }, [reports, tab, q]);

  /* ─ download CSV */
  const downloadCSV = async (status) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/inspector/download-firs/${status}`, {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const blob = new Blob([response.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `FIRs_${status}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      toast.error(`Failed to download ${status} FIRs`);
      console.error(err);
    }
  };

  /* ─ download filtered */
  const downloadFilteredFIRs = async () => {
    if (!startDate || !endDate) {
      toast.warning("Start and end date are required.");
      return;
    }

    try {
      const { data } = await axios.get("http://localhost:5000/api/inspector/filter-firs", {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          startDate,
          endDate,
        },
      });

      if (!data.length) {
        toast.info("No FIRs found in this filter.");
        return;
      }

      const csv = [
        [
          "FIR ID", "Full Name", "Email", "Vehicle Type", "Plate Number",
          "Location Seen", "Date/Time Seen", "Description", "Status", "Submitted At",
        ].join(","),
        ...data.map(row =>
          [
            row._id,
            row.fullName,
            row.email,
            row.vehicleType,
            row.plateNumber,
            row.locationSeen,
            new Date(row.datetimeSeen).toLocaleString(),
            (row.description || "").replace(/,/g, ";"),
            row.status,
            new Date(row.createdAt).toLocaleString(),
          ].join(",")
        ),
      ].join("\n");

      const blob = new Blob([csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Filtered_FIRs.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      toast.error("Failed to download filtered FIRs.");
      console.error(err);
    }
  };

  /* quick "/" to focus */
  useEffect(() => {
    const handler = e => {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        document.getElementById("searchBox")?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100"
    >
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow">
        <div className="max-w-7xl mx-auto flex items-center gap-4 p-4 flex-wrap">
          <button onClick={() => navigate(-1)} className="hover:underline">
            &larr; Back
          </button>
          <h1 className="text-xl sm:text-2xl font-bold flex-grow">
            Suspicious Vehicle Reports
          </h1>
          <button
            title="Refresh"
            onClick={loadReports}
            className="p-2 rounded-full text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 transition"
          >
            <FaSyncAlt />
          </button>

          {['Approved', 'Rejected', 'Pending'].map(status => (
            <button
              key={status}
              onClick={() => downloadCSV(status)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 border dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <FaDownload /> Download {status}
            </button>
          ))}

          <div className="flex gap-2 items-end">
            <div>
              <label className="text-sm">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="block w-full rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 border dark:border-gray-700"
              />
            </div>
            <div>
              <label className="text-sm">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                className="block w-full rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 border dark:border-gray-700"
              />
            </div>
            <button
              onClick={downloadFilteredFIRs}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              <FaDownload /> Download Filtered FIRs
            </button>
          </div>
        </div>
      </header>

      {/* ... rest of the unchanged code ... */}
      {/* ─ filter bar */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex gap-2">
          {["All", "Pending", "Approved", "Rejected"].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition
                ${tab === t
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <label className="relative flex-grow sm:max-w-xs">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="searchBox"
            type="text"
            placeholder="Search…   ( / )"
            value={q}
            onChange={e => setQ(e.target.value)}
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-white/90 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 text-sm placeholder-gray-400"
          />
        </label>
      </section>

      {/* ─ list */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 mt-8">
        {loading ? (
          <Skeleton />
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No reports match your filter.
          </p>
        ) : (
          <ul className="grid gap-6">
            <AnimatePresence>
              {filtered.map(r => (
                <motion.li
                  key={r._id}
                  layoutId={r._id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/90 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-lg cursor-pointer transition"
                  onClick={() => setDrawer(r)}
                >
                  <div className="flex justify-between flex-wrap gap-2">
                    <span className="font-semibold">
                      {r.vehicleType} • {r.plateNumber}
                    </span>
                    {badge(r.status)}
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {r.description || "—"}
                  </p>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </main>

      {/* ─ drawer */}
      <AnimatePresence>
        {drawer && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawer(null)}
              className="fixed inset-0 bg-black backdrop-blur-sm z-30"
            />
            <motion.div
              key="modal"
              layoutId={drawer._id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed inset-0 z-40 flex items-center justify-center p-4"
            >
              <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                  <h2 className="font-semibold text-lg">
                    {drawer.vehicleType} • {drawer.plateNumber}
                  </h2>
                  <button onClick={() => setDrawer(null)} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
                    <FaTimes className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6 space-y-4 overflow-y-auto max-h-[75vh]">
                  <Meta label="Reporter">{drawer.fullName}</Meta>
                  <Meta label="Email">{drawer.email}</Meta>
                  <Meta label="Location">{drawer.locationSeen}</Meta>
                  <Meta label="Seen at">{new Date(drawer.datetimeSeen).toLocaleString()}</Meta>
                  {drawer.description && (
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{drawer.description}</p>
                  )}
                  {drawer.imageUrl && (
                    <img className="w-full rounded-lg shadow" src={`http://localhost:5000${drawer.imageUrl}`} alt="evidence" />
                  )}
                </div>

                {drawer.status === "Pending" && (
                  <div className="p-4 border-t dark:border-gray-700 flex justify-end gap-3">
                    <button
                      onClick={() => updateStatus(drawer._id, "Rejected")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
                    >
                      <FaTimes /> Reject
                    </button>
                    <button
                      onClick={() => updateStatus(drawer._id, "Approved")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
                    >
                      <FaCheck /> Approve
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </motion.div>
  );
}

const Skeleton = () => (
  <div className="grid gap-6">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="animate-pulse h-24 rounded-2xl bg-gray-300/60 dark:bg-gray-700/50" />
    ))}
  </div>
);
