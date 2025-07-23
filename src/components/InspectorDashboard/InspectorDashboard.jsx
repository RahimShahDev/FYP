// // InspectorDashboard.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, Outlet } from "react-router-dom";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Cell,
//   PieChart,
//   Pie,
//   LineChart,
//   Line,
//   Legend,
//   CartesianGrid,
// } from "recharts";
// import { motion } from "framer-motion";
// import { FaCarCrash, FaCarSide, FaSearch, FaCar } from "react-icons/fa";
// import StatsCard from "../StatsCard";

// const BAR_COLORS = ["#ef4444", "#facc15", "#3b82f6"];

// export default function InspectorDashboard() {
//   const [stats, setStats] = useState({ total: 0, approved: 0, rejected: 0, pending: 0 });

//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const token = localStorage.getItem("authToken") || localStorage.getItem("token");
//         const { data } = await axios.get("http://localhost:5000/api/inspector/suspicious-reports", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const approved = data.filter((r) => r.status === "Approved").length;
//         const rejected = data.filter((r) => r.status === "Rejected").length;
//         const pending = data.filter((r) => r.status === "Pending").length;
//         setStats({ total: data.length, approved, rejected, pending });
        
//       } catch (err) {
//         console.error("Failed to load dashboard stats", err);
        
//       }
//     };
//     fetchReports();
//   }, []);

//   const barData = [
//     { name: "Approved", value: stats.approved },
//     { name: "Rejected", value: stats.rejected },
//     { name: "Pending", value: stats.pending },
//   ];

//   return (
//     <section className="min-h-screen p-4 sm:p-6 bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-[#0d1117] dark:via-[#10141c] dark:to-[#0d1117]">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl shadow-2xl bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white backdrop-blur-xl ring-1 ring-white/20 mb-10"
//       >
//         <FaCarCrash className="text-3xl" />
//         <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Inspector Dashboard</h1>
//       </motion.div>

//       {/* KPI tiles */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
//         {[
//           {
//             title: "Total Reports",
//             value: stats.total,
//             icon: <FaCarSide className="text-white" />,
//             bg: "from-gray-600 to-gray-700",
//           },
//           {
//             title: "Approved",
//             value: stats.approved,
//             icon: <FaCarCrash className="text-white" />,
//             bg: "from-green-600 to-green-700",
//           },
//           {
//             title: "Rejected",
//             value: stats.rejected,
//             icon: <FaCar className="text-white" />,
//             bg: "from-red-500 to-red-600",
//           },
//           {
//             title: "Pending",
//             value: stats.pending,
//             icon: <FaSearch className="text-white" />,
//             bg: "from-yellow-600 to-yellow-700",
//           },
//         ].map((card, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.04 }}
//             transition={{ type: "spring", stiffness: 120 }}
//           >
//             <StatsCard {...card} />
//           </motion.div>
//         ))}
//       </div>

//       {/* CTA + Bar chart */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-white/60 dark:bg-white/5 backdrop-blur-lg ring-1 ring-white/20 dark:ring-white/10 rounded-2xl shadow-xl p-8 flex flex-col justify-between hover:shadow-2xl transition-shadow"
//         >
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
//               <FaCarCrash className="text-red-600" /> Suspicious Vehicles
//             </h2>
//             <p className="text-gray-600 dark:text-gray-300 mb-6">
//               Review vehicles flagged as stolen, fake registration, or wanted in active FIRs.
//             </p>
//           </div>
//           <Link
//                to="/inspector/suspicious-vehicles"  
//               className="inline-flex items-center gap-2 self-start bg-blue-700 hover:bg-blue-800
//               text-white px-6 py-3 rounded-md font-medium transition"
//               >
//               <FaSearch /> View List
//             </Link>

//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="bg-white/60 dark:bg-white/5 backdrop-blur-lg ring-1 ring-white/20 dark:ring-white/10 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
//         >
//           <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white py-2 rounded-md mb-4">
//             Reports Snapshot
//           </h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <BarChart data={barData} barSize={45}>
//               <CartesianGrid stroke="rgba(148, 163, 184, 0.2)" vertical={false} />
//               <XAxis dataKey="name" tick={{ fill: "#64748b" }} />
//               <YAxis allowDecimals={false} tick={{ fill: "#64748b" }} />
//               <Tooltip
//                 wrapperStyle={{ outline: "none" }}
//                 contentStyle={{ background: "#1e293b", borderRadius: 8, border: "none" }}
//                 labelStyle={{ color: "#fff" }}
//               />
//               <Bar dataKey="value" radius={[6, 6, 0, 0]}>
//                 {barData.map((_, i) => (
//                   <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>

//       <Outlet />

//       <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-white/60 dark:bg-white/5 backdrop-blur-lg ring-1 ring-white/20 dark:ring-white/10 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
//         >
//           <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100 bg-gradient-to-r from-green-600 to-emerald-700 text-white py-2 rounded-md mb-4">
//             FIR Category Breakdown
//           </h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <PieChart>
//               <Pie data={barData} cx="50%" cy="50%" outerRadius={90} label dataKey="value">
//                 {barData.map((_, i) => (
//                   <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip
//                 wrapperStyle={{ outline: "none" }}
//                 contentStyle={{ background: "#1e293b", border: "none", borderRadius: 8 }}
//                 labelStyle={{ color: "#fff" }}
//               />
//             </PieChart>
//           </ResponsiveContainer>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="bg-white/60 dark:bg-white/5 backdrop-blur-lg ring-1 ring-white/20 dark:ring-white/10 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
//         >
//           <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100 bg-gradient-to-r from-pink-600 to-red-600 text-white py-2 rounded-md mb-4">
//             Weekly Reports Trend
//           </h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <LineChart
//               data={[
//                 { day: "Mon", approved: 3, rejected: 2, pending: 1 },
//                 { day: "Tue", approved: 2, rejected: 4, pending: 2 },
//                 { day: "Wed", approved: 5, rejected: 1, pending: 3 },
//                 { day: "Thu", approved: 3, rejected: 3, pending: 1 },
//                 { day: "Fri", approved: 4, rejected: 2, pending: 4 },
//                 { day: "Sat", approved: 2, rejected: 3, pending: 2 },
//                 { day: "Sun", approved: 1, rejected: 2, pending: 1 },
//               ]}
//             >
//               <XAxis dataKey="day" tick={{ fill: "#94a3b8" }} />
//               <YAxis allowDecimals={false} tick={{ fill: "#94a3b8" }} />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="approved" stroke="#10b981" strokeWidth={2} />
//               <Line type="monotone" dataKey="rejected" stroke="#ef4444" strokeWidth={2} />
//               <Line type="monotone" dataKey="pending" stroke="#facc15" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
























import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  LineChart,
  Line,
  Legend,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";
import { FaCarCrash, FaCarSide, FaSearch, FaCar } from "react-icons/fa";
import StatsCard from "../StatsCard";

const BAR_COLORS = ["#ef4444", "#facc15", "#3b82f6"];

// Project-related image (police car example)
const PROJECT_IMAGE = "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

export default function InspectorDashboard() {
  const [stats, setStats] = useState({ total: 0, approved: 0, rejected: 0, pending: 0 });
  const navigate = useNavigate();
  const handleLogout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("token");
  navigate("/inspector-login");
};


  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem("authToken") || localStorage.getItem("token");
        const { data } = await axios.get("http://localhost:5000/api/inspector/suspicious-reports", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const approved = data.filter((r) => r.status === "Approved").length;
        const rejected = data.filter((r) => r.status === "Rejected").length;
        const pending = data.filter((r) => r.status === "Pending").length;
        setStats({ total: data.length, approved, rejected, pending });
      } catch (err) {
        console.error("Failed to load dashboard stats", err);
      }
    };
    fetchReports();
  }, []);

  const handleStatClick = (status) => {
    navigate('/inspector/suspicious-vehicles', { state: { defaultTab: status } });
  };

  const barData = [
    { name: "Approved", value: stats.approved },
    { name: "Rejected", value: stats.rejected },
    { name: "Pending", value: stats.pending },
  ];

  return (
    <section className="min-h-screen p-4 sm:p-6 bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-[#0d1117] dark:via-[#10141c] dark:to-[#0d1117]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl shadow-2xl bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white backdrop-blur-xl ring-1 ring-white/20 mb-10"
      >
        <FaCarCrash className="text-3xl" />
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Inspector Dashboard</h1>
      </motion.div>
      <div className="flex justify-end mb-6">
  <button
    onClick={handleLogout}
    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md transition"
  >
    Logout
  </button>
</div>


      {/* KPI tiles - Now clickable and navigates to specific tabs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          {
            title: "Total Reports",
            value: stats.total,
            icon: <FaCarSide className="text-white" />,
            bg: "from-gray-600 to-gray-700",
            status: "all"
          },
          {
            title: "Approved",
            value: stats.approved,
            icon: <FaCarCrash className="text-white" />,
            bg: "from-green-600 to-green-700",
            status: "approved"
          },
          {
            title: "Rejected",
            value: stats.rejected,
            icon: <FaCar className="text-white" />,
            bg: "from-red-500 to-red-600",
            status: "rejected"
          },
          {
            title: "Pending",
            value: stats.pending,
            icon: <FaSearch className="text-white" />,
            bg: "from-yellow-600 to-yellow-700",
            status: "pending"
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 120 }}
            onClick={() => handleStatClick(card.status)}
            className="cursor-pointer"
          >
            <StatsCard {...card} />
          </motion.div>
        ))}
      </div>

      {/* CTA + Bar chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 dark:bg-white/5 backdrop-blur-lg ring-1 ring-white/20 dark:ring-white/10 rounded-2xl shadow-xl p-8 flex flex-col justify-between hover:shadow-2xl transition-shadow"
        >
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
              <FaCarCrash className="text-red-600" /> Suspicious Vehicles
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Review vehicles flagged as stolen, fake registration, or wanted in active FIRs.
            </p>
            <div className="mb-6 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              <img 
                src={PROJECT_IMAGE}
                alt="Traffic Police Vehicle" 
                className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x400?text=Traffic+Police";
                }}
              />
            </div>
          </div>
          <Link
            to="/inspector/suspicious-vehicles"  
            className="inline-flex items-center gap-2 self-start bg-blue-700 hover:bg-blue-800
            text-white px-6 py-3 rounded-md font-medium transition"
          >
            <FaSearch /> View List
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/60 dark:bg-white/5 backdrop-blur-lg ring-1 ring-white/20 dark:ring-white/10 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
        >
          <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white py-2 rounded-md mb-4">
            Reports Overview
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={barData} barSize={45}>
              <CartesianGrid stroke="rgba(148, 163, 184, 0.2)" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "#64748b" }} />
              <YAxis allowDecimals={false} tick={{ fill: "#64748b" }} />
              <Tooltip
                wrapperStyle={{ outline: "none" }}
                contentStyle={{ background: "#1e293b", borderRadius: 8, border: "none" }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {barData.map((_, i) => (
                  <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <Outlet />

      {/* Charts section */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 dark:bg-white/5 backdrop-blur-lg ring-1 ring-white/20 dark:ring-white/10 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
        >
          <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100 bg-gradient-to-r from-green-600 to-emerald-700 text-white py-2 rounded-md mb-4">
            FIR Category Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie 
                data={barData} 
                cx="50%" 
                cy="50%" 
                outerRadius={90} 
                label 
                dataKey="value"
              >
                {barData.map((_, i) => (
                  <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                wrapperStyle={{ outline: "none" }}
                contentStyle={{ background: "#1e293b", border: "none", borderRadius: 8 }}
                labelStyle={{ color: "#fff" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/60 dark:bg-white/5 backdrop-blur-lg ring-1 ring-white/20 dark:ring-white/10 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
        >
          <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100 bg-gradient-to-r from-pink-600 to-red-600 text-white py-2 rounded-md mb-4">
            Weekly Reports Trend
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart
              data={[
                { day: "Mon", approved: 3, rejected: 2, pending: 1 },
                { day: "Tue", approved: 2, rejected: 4, pending: 2 },
                { day: "Wed", approved: 5, rejected: 1, pending: 3 },
                { day: "Thu", approved: 3, rejected: 3, pending: 1 },
                { day: "Fri", approved: 4, rejected: 2, pending: 4 },
                { day: "Sat", approved: 2, rejected: 3, pending: 2 },
                { day: "Sun", approved: 1, rejected: 2, pending: 1 },
              ]}
            >
              <XAxis dataKey="day" tick={{ fill: "#94a3b8" }} />
              <YAxis allowDecimals={false} tick={{ fill: "#94a3b8" }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="approved" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="rejected" stroke="#ef4444" strokeWidth={2} />
              <Line type="monotone" dataKey="pending" stroke="#facc15" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}