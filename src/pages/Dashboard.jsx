// src/pages/Dashboard.jsx
// First Time 
// import { useEffect, useState } from 'react';
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
// } from 'recharts';
// import { motion } from 'framer-motion';
// import StatsCard from '../components/StatsCard';
// import { FaCar, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

// const BAR_COLORS = ['#3b82f6', '#ef4444', '#10b981'];
// const PIE_COLORS = ['#ef4444', '#10b981'];

// export default function Dashboard() {
//   const [stats, setStats] = useState(null);
//   const [loading, setLoad] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     (async () => {
//       try {
//         const token = localStorage.getItem('authToken');
//         const res = await fetch('http://localhost:5000/api/admin/stats', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (!res.ok) throw new Error('Could not load stats');

//         const d = await res.json();
//         setStats({
//           vehicles: d.totalVehicles,
//           firCases: d.totalFIRs,
//           nonFir: d.clearVehicles,
//         });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoad(false);
//       }
//     })();
//   }, []);

//   const barData = stats && [
//     { name: 'Vehicles', value: stats.vehicles },
//     { name: 'FIR', value: stats.firCases },
//     { name: 'Non‑FIR', value: stats.nonFir },
//   ];
//   const pieData = stats && [
//     { name: 'FIR', value: stats.firCases },
//     { name: 'Non‑FIR', value: stats.nonFir },
//   ];

//   if (loading) {
//     return (
//       <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
//         {['a', 'b', 'c'].map(k => (
//           <div
//             key={k}
//             className="h-24 bg-gray-300 dark:bg-gray-700 rounded-xl"
//           />
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <p className="p-6 text-red-600 dark:text-red-400">
//         {error}
//       </p>
//     );
//   }

//   return (
//     <div
//       className="p-6 min-h-screen
//                  bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200
//                  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
//     >
//       {/* 🚔 Dashboard Title */}
//       <div className="inline-block px-6 py-3 rounded-3xl shadow-xl
//                       bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-2">
//           🚔 Vehicle&nbsp;FIR&nbsp;Dashboard
//         </h1>
//       </div>

//       {/* KPI Tiles */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <StatsCard
//           title="Total Vehicles"
//           value={stats.vehicles}
//           icon={<FaCar className="text-white" />}
//           bg="from-blue-600 to-blue-700"
//         />
//         <StatsCard
//           title="FIR Cases"
//           value={stats.firCases}
//           icon={<FaFileAlt className="text-white" />}
//           bg="from-red-600 to-red-700"
//         />
//         <StatsCard
//           title="Non‑FIR Vehicles"
//           value={stats.nonFir}
//           icon={<FaCheckCircle className="text-white" />}
//           bg="from-emerald-600 to-emerald-700"
//         />
//       </div>

//       {/* Charts */}
//       <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Overview Chart */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="rounded-2xl shadow-xl p-6 bg-white dark:bg-gray-800"
//         >
//           <div className="w-full px-4 py-2 mb-4 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center">
//   📊 Overview
// </div>



//           <ResponsiveContainer width="100%" height={260}>
//             <BarChart data={barData}>
//               <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} />
//               <YAxis allowDecimals={false} tick={{ fill: '#94a3b8' }} />
//               <Tooltip contentStyle={{ background: '#1e293b', color: '#fff' }} />
//               <Bar dataKey="value" radius={[6, 6, 0, 0]}>
//                 {barData.map((_, i) => (
//                   <Cell key={i} fill={BAR_COLORS[i]} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </motion.div>

//         {/* Donut Chart */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="rounded-2xl shadow-xl p-6 bg-white dark:bg-gray-800"
//         >
//           <div className="w-full px-4 py-2 mb-4 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center">
//   🧭 FIR vs Non-FIR Ratio
// </div>


//           <ResponsiveContainer width="100%" height={260}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={70}
//                 outerRadius={100}
//                 paddingAngle={4}
//                 dataKey="value"
//               >
//                 {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
//               </Pie>
//               {/* Central Labels */}
//               <text
//                 x="50%" y="46%" textAnchor="middle" dominantBaseline="central"
//                 className="fill-gray-700 dark:fill-white text-sm font-bold"
//               >
//                 {stats.firCases} FIR
//               </text>
//               <text
//                 x="50%" y="56%" textAnchor="middle" dominantBaseline="central"
//                 className="fill-green-600 text-sm font-bold"
//               >
//                 {stats.nonFir} Clear
//               </text>
//               <Tooltip contentStyle={{ background: '#1e293b', color: '#fff' }} />
//             </PieChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>
//     </div>
//   );
// }





















// // Third time  
// import { useEffect, useState } from 'react';
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
// } from 'recharts';
// import { motion } from 'framer-motion';
// import StatsCard from '../components/StatsCard';
// import {
//   FaCar,
//   FaFileAlt,
//   FaCheckCircle,
//   FaTimesCircle,
//   FaClock,
// } from 'react-icons/fa';

// const BAR_COLORS = ['#3b82f6', '#ef4444', '#10b981'];
// const PIE_COLORS = ['#ef4444', '#10b981', '#facc15']; // Yes, No, Pending


// export default function Dashboard() {
//   const [stats, setStats] = useState(null);
//   const [reportStats, setReportStats] = useState(null);
//   const [loading, setLoad] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     (async () => {
//       try {
//         const token = localStorage.getItem('authToken');

//         const [vehicleRes, reportRes] = await Promise.all([
//           fetch('http://localhost:5000/api/admin/stats', {
//             headers: { Authorization: `Bearer ${token}` },
//           }),
//           fetch('http://localhost:5000/api/admin/report-stats', {
//             headers: { Authorization: `Bearer ${token}` },
//           }),
          
//         ]);
        

//         if (!vehicleRes.ok || !reportRes.ok) throw new Error('Could not load stats');

//         const vehicleData = await vehicleRes.json();
//         const reportData = await reportRes.json();

//         setStats({
//           vehicles: vehicleData.totalVehicles,
//           firCases: vehicleData.totalFIRs,
//           nonFir: vehicleData.clearVehicles,
//         });

//         setReportStats(reportData);
//         // ✅ Safe logging after data is ready
//       console.log('Fetched Vehicle Stats:', vehicleData);
//       console.log('Fetched Report Stats:', reportData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoad(false);
//       }
//     })();
//   }, []);

//   const barData = stats && [
//     { name: 'Vehicles', value: stats.vehicles },
//     { name: 'FIR', value: stats.firCases },
//     { name: 'Non‑FIR', value: stats.nonFir },
//   ];

//   // const pieData = stats && [
//   //   { name: 'FIR', value: stats.firCases },
//   //   { name: 'Non‑FIR', value: stats.nonFir },
//   // ];

//   const pieData = stats && [
//   { name: 'Yes', value: stats.firCases },    // Approved FIRs
//   { name: 'No', value: stats.nonFir },       // Clear
//   { name: 'Pending', value: stats.pendingFir || 0 }, // Add this from backend later if needed
// ];


//   if (loading) {
//     return (
//       <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
//         {['a', 'b', 'c'].map(k => (
//           <div key={k} className="h-24 bg-gray-300 dark:bg-gray-700 rounded-xl" />
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <p className="p-6 text-red-600 dark:text-red-400">
//         {error}
//       </p>
//     );
//   }

//   return (
//     <div
//       className="p-6 min-h-screen
//                  bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200
//                  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
//     >
//       {/* 🚔 Dashboard Title */}
//       <div className="inline-block px-6 py-3 rounded-3xl shadow-xl
//                       bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-2">
//           🚔 Vehicle&nbsp;FIR&nbsp;Dashboard
//         </h1>
//       </div>

//       {/* Vehicle KPI Tiles */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <StatsCard
//           title="Total Vehicles"
//           value={stats.vehicles}
//           icon={<FaCar className="text-white" />}
//           bg="from-blue-600 to-blue-700"
//         />
//         <StatsCard
//           title="FIR Cases"
//           value={stats.firCases}
//           icon={<FaFileAlt className="text-white" />}
//           bg="from-red-600 to-red-700"
//         />
//         <StatsCard
//           title="Non‑FIR Vehicles"
//           value={stats.nonFir}
//           icon={<FaCheckCircle className="text-white" />}
//           bg="from-emerald-600 to-emerald-700"
//         />
//       </div>

//       {/* Suspicious Report Stats Tiles */}
//       {reportStats && (
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
//           <StatsCard
//             title="Total Reports"
//             value={reportStats.total}
//             icon={<FaFileAlt className="text-white" />}
//             bg="from-purple-600 to-purple-700"
//           />
//           <StatsCard
//             title="Approved"
//             value={reportStats.approved}
//             icon={<FaCheckCircle className="text-white" />}
//             bg="from-green-600 to-green-700"
//           />
//           <StatsCard
//             title="Rejected"
//             value={reportStats.rejected}
//             icon={<FaTimesCircle className="text-white" />}
//             bg="from-red-600 to-red-700"
//           />
//           <StatsCard
//             title="Pending"
//             value={reportStats.pending}
//             icon={<FaClock className="text-white" />}
//             bg="from-yellow-600 to-yellow-700"
//           />
//         </div>
//       )}

//       {/* Charts */}
//       <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Bar Chart */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="rounded-2xl shadow-xl p-6 bg-white dark:bg-gray-800"
//         >
//           <div className="w-full px-4 py-2 mb-4 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center">
//             📊 Overview
//           </div>

//           <ResponsiveContainer width="100%" height={260}>
//             <BarChart data={barData}>
//               <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} />
//               <YAxis allowDecimals={false} tick={{ fill: '#94a3b8' }} />
//               <Tooltip contentStyle={{ background: '#1e293b', color: '#fff' }} />
//               <Bar dataKey="value" radius={[6, 6, 0, 0]}>
//                 {barData.map((_, i) => (
//                   <Cell key={i} fill={BAR_COLORS[i]} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </motion.div>

//         {/* Pie Chart */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="rounded-2xl shadow-xl p-6 bg-white dark:bg-gray-800"
//         >
//           <div className="w-full px-4 py-2 mb-4 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center">
//             🧭 FIR vs Non-FIR Ratio
//           </div>

//           <ResponsiveContainer width="100%" height={260}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={70}
//                 outerRadius={100}
//                 paddingAngle={4}
//                 dataKey="value"
//               >
//                 {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
//               </Pie>
//                   <text
//       x="50%" y="44%" textAnchor="middle" dominantBaseline="central"
//       className="fill-red-600 text-sm font-bold"
//     >
//       Yes: {stats.firCases}
//     </text>
//     <text
//       x="50%" y="52%" textAnchor="middle" dominantBaseline="central"
//       className="fill-green-600 text-sm font-bold"
//     >
//       No: {stats.nonFir}
//     </text>
//     <text
//       x="50%" y="60%" textAnchor="middle" dominantBaseline="central"
//       className="fill-yellow-500 text-sm font-bold"
//     >
//       Pending: {stats.pendingFir || 0}
//     </text>

//               <Tooltip contentStyle={{ background: '#1e293b', color: '#fff' }} />
//             </PieChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>
//     </div>
//   );
// }







// import { useEffect, useState } from 'react';
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
// } from 'recharts';
// import { motion } from 'framer-motion';
// import StatsCard from '../components/StatsCard';
// import {
//   FaCar,
//   FaFileAlt,
//   FaCheckCircle,
//   FaTimesCircle,
//   FaClock,
// } from 'react-icons/fa';

// const BAR_COLORS = ['#3b82f6', '#ef4444', '#10b981'];
// const PIE_COLORS = ['#ef4444', '#10b981', '#facc15'];

// export default function Dashboard() {
//   const [stats, setStats] = useState(null);
//   const [reportStats, setReportStats] = useState(null);
//   const [loading, setLoad] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     (async () => {
//       try {
//         const token = localStorage.getItem('authToken');

//         const [vehicleRes, reportRes] = await Promise.all([
//           fetch('http://localhost:5000/api/admin/stats', {
//             headers: { Authorization: `Bearer ${token}` },
//           }),
//           fetch('http://localhost:5000/api/admin/report-stats', {
//             headers: { Authorization: `Bearer ${token}` },
//           }),
//         ]);

//         if (!vehicleRes.ok || !reportRes.ok) throw new Error('Could not load stats');

//         const vehicleData = await vehicleRes.json();
//         const reportData = await reportRes.json();

//         setStats({
//           vehicles: vehicleData.totalVehicles,
//           firCases: vehicleData.totalFIRs,
//           nonFir: vehicleData.clearVehicles,
//           pendingFir: vehicleData.pendingFIRs || 0,
//         });

//         setReportStats(reportData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoad(false);
//       }
//     })();
//   }, []);

//   const barData = stats && [
//     { name: 'Vehicles', value: stats.vehicles },
//     { name: 'FIR', value: stats.firCases },
//     { name: 'Non‑FIR', value: stats.nonFir },
//   ];

//   const pieData = stats && [
//     { name: 'FIR', value: stats.firCases },
//     { name: 'Clear', value: stats.nonFir },
//     { name: 'Pending', value: stats.pendingFir },
//   ];

//   if (loading) {
//     return (
//       <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
//         {['a', 'b', 'c'].map((k) => (
//           <div key={k} className="h-24 bg-gray-300 dark:bg-gray-700 rounded-xl" />
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return <p className="p-6 text-red-600 dark:text-red-400">{error}</p>;
//   }

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//       <div className="inline-block px-6 py-3 rounded-3xl shadow-xl bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-2">
//           🚔 Vehicle&nbsp;FIR&nbsp;Dashboard
//         </h1>
//       </div>

//       <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <StatsCard title="Total Vehicles" value={stats.vehicles} icon={<FaCar className="text-white" />} bg="from-blue-600 to-blue-700" />
//         <StatsCard title="FIR Cases" value={stats.firCases} icon={<FaFileAlt className="text-white" />} bg="from-red-600 to-red-700" />
//         <StatsCard title="Non‑FIR Vehicles" value={stats.nonFir} icon={<FaCheckCircle className="text-white" />} bg="from-emerald-600 to-emerald-700" />
//       </div>

//       {reportStats && (
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
//           <StatsCard title="Total Reports" value={reportStats.total} icon={<FaFileAlt className="text-white" />} bg="from-purple-600 to-purple-700" />
//           <StatsCard title="Approved" value={reportStats.approved} icon={<FaCheckCircle className="text-white" />} bg="from-green-600 to-green-700" />
//           <StatsCard title="Rejected" value={reportStats.rejected} icon={<FaTimesCircle className="text-white" />} bg="from-red-600 to-red-700" />
//           <StatsCard title="Pending" value={reportStats.pending} icon={<FaClock className="text-white" />} bg="from-yellow-600 to-yellow-700" />
//         </div>
//       )}

//       <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl shadow-xl p-6 bg-white dark:bg-gray-800">
//           <div className="w-full px-4 py-2 mb-4 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center">
//             📊 Overview
//           </div>

//           <ResponsiveContainer width="100%" height={260}>
//             <BarChart data={barData}>
//               <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} />
//               <YAxis allowDecimals={false} tick={{ fill: '#94a3b8' }} />
//               <Tooltip contentStyle={{ background: '#1e293b', color: '#fff' }} />
//               <Bar dataKey="value" radius={[6, 6, 0, 0]}>
//                 {barData.map((_, i) => (
//                   <Cell key={i} fill={BAR_COLORS[i]} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl shadow-xl p-6 bg-white dark:bg-gray-800">
//           <div className="w-full px-4 py-2 mb-4 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center">
//             🧭 FIR vs Non-FIR Ratio
//           </div>

//           <ResponsiveContainer width="100%" height={260}>
//             <PieChart>
//               <Pie data={pieData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={4} dataKey="value">
//                 {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
//               </Pie>
//               <Tooltip contentStyle={{ background: '#1e293b', color: '#fff' }} />
//             </PieChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>
//     </div>
//   );
// }












import { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { motion } from 'framer-motion';
import StatsCard from '../components/StatsCard';
import {
  FaCar,
  FaFileAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
} from 'react-icons/fa';

const BAR_COLORS = ['#3b82f6', '#ef4444', '#10b981', '#facc15'];
const PIE_COLORS = ['#ef4444', '#10b981', '#facc15']; // FIR, Clear, Pending

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [reportStats, setReportStats] = useState(null);
  const [loading, setLoad] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('authToken');

        const [vehicleRes, reportRes] = await Promise.all([
          fetch('http://localhost:5000/api/admin/vehicles', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch('http://localhost:5000/api/admin/report-stats', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!vehicleRes.ok || !reportRes.ok) throw new Error('Could not load stats');

        const vehicleData = await vehicleRes.json();
        const reportData = await reportRes.json();

        const statusCounts = vehicleData.reduce(
          (acc, item) => {
            const status = (item.firStatus || 'Unknown').trim();
            acc[status] = (acc[status] || 0) + 1;
            return acc;
          },
          {}
        );

        setStats({
          vehicles: vehicleData.length,
          firCases: statusCounts['Yes'] || 0,
          nonFir: statusCounts['No'] || 0,
          pendingFir: statusCounts['Pending'] || 0,
        });

        setReportStats(reportData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoad(false);
      }
    })();
  }, []);

  const barData = stats && [
    { name: 'Vehicles', value: stats.vehicles },
    { name: 'FIR', value: stats.firCases },
    { name: 'Clear', value: stats.nonFir },
    { name: 'Pending', value: stats.pendingFir },
  ];

  const pieData = stats && [
    { name: 'FIR', value: stats.firCases },
    { name: 'Clear', value: stats.nonFir },
    { name: 'Pending', value: stats.pendingFir },
  ];

  if (loading) {
    return (
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
        {['a', 'b', 'c'].map((k) => (
          <div key={k} className="h-24 bg-gray-300 dark:bg-gray-700 rounded-xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="p-6 text-red-600 dark:text-red-400">
        {error}
      </p>
    );
  }

  return (
    <div
      className="p-6 min-h-screen
                 bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* 🚔 Dashboard Title */}
      <div className="inline-block px-6 py-3 rounded-3xl shadow-xl
                      bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-2">
          🚔 Vehicle&nbsp;FIR&nbsp;Dashboard
        </h1>
      </div>

      {/* Vehicle KPI Tiles */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Total Vehicles"
          value={stats.vehicles}
          icon={<FaCar className="text-white" />}
          bg="from-blue-600 to-blue-700"
        />
        <StatsCard
          title="FIR Cases"
          value={stats.firCases}
          icon={<FaFileAlt className="text-white" />}
          bg="from-red-600 to-red-700"
        />
        <StatsCard
          title="Non‑FIR Vehicles"
          value={stats.nonFir}
          icon={<FaCheckCircle className="text-white" />}
          bg="from-emerald-600 to-emerald-700"
        />
        <StatsCard
        title="Pending FIR Cases"
        value={stats.pendingFir}
        icon={<FaClock className="text-white" />}
        bg="from-yellow-600 to-yellow-700"
/>

      </div>

      {/* Suspicious Report Stats Tiles */}
      {reportStats && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            title="Total Reports"
            value={reportStats.total}
            icon={<FaFileAlt className="text-white" />}
            bg="from-purple-600 to-purple-700"
          />
          <StatsCard
            title="Approved"
            value={reportStats.approved}
            icon={<FaCheckCircle className="text-white" />}
            bg="from-green-600 to-green-700"
          />
          <StatsCard
            title="Rejected"
            value={reportStats.rejected}
            icon={<FaTimesCircle className="text-white" />}
            bg="from-red-600 to-red-700"
          />
          <StatsCard
            title="Pending"
            value={reportStats.pending}
            icon={<FaClock className="text-white" />}
            bg="from-yellow-600 to-yellow-700"
          />
        </div>
      )}

      {/* Charts */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-xl p-6 bg-white dark:bg-gray-800"
        >
          <div className="w-full px-4 py-2 mb-4 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center">
            📊 Overview
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={barData}>
              <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} />
              <YAxis allowDecimals={false} tick={{ fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ background: '#1e293b', color: '#fff' }} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {barData.map((_, i) => (
                  <Cell key={i} fill={BAR_COLORS[i]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl shadow-xl p-6 bg-white dark:bg-gray-800"
        >
          <div className="w-full px-4 py-2 mb-4 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center">
            🧭 FIR, Non-FIR Ratio & Pending Ratio
          </div>

          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: '#1e293b', color: '#fff' }} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}






















// // Second Time 
// // src/pages/Dashboard.jsx
// import { useEffect, useState } from 'react';
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
// } from 'recharts';
// import { motion } from 'framer-motion';
// import StatsCard from '../components/StatsCard';
// import { FaCar, FaFileAlt, FaCheckCircle, FaCarCrash, FaSearch, FaCarSide } from 'react-icons/fa';

// const BAR_COLORS = ['#3b82f6', '#ef4444', '#10b981'];
// const PIE_COLORS = ['#ef4444', '#10b981'];

// export default function Dashboard() {
//   const [stats, setStats] = useState(null);
//   const [reportStats, setReportStats] = useState(null);
//   const [loading, setLoad] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     (async () => {
//       try {
//         const token = localStorage.getItem('authToken');

//         const [adminRes, reportsRes] = await Promise.all([
//           fetch('http://localhost:5000/api/admin/stats', {
//             headers: { Authorization: `Bearer ${token}` },
//           }),
//           fetch('http://localhost:5000/api/inspector/suspicious-reports', {
//             headers: { Authorization: `Bearer ${token}` },
//           }),
//         ]);

//         if (!adminRes.ok || !reportsRes.ok) throw new Error('Could not load stats');

//         const adminData = await adminRes.json();
//         const reportsData = await reportsRes.json();

//         const approved = reportsData.filter(r => r.status === 'Approved').length;
//         const rejected = reportsData.filter(r => r.status === 'Rejected').length;
//         const pending = reportsData.filter(r => r.status === 'Pending').length;

//         setStats({
//           vehicles: adminData.totalVehicles,
//           firCases: adminData.totalFIRs,
//           nonFir: adminData.clearVehicles,
//         });

//         setReportStats({
//           total: reportsData.length,
//           approved,
//           rejected,
//           pending,
//         });

//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoad(false);
//       }
//     })();
//   }, []);

//   const barData = stats && [
//     { name: 'Vehicles', value: stats.vehicles },
//     { name: 'FIR', value: stats.firCases },
//     { name: 'Non‑FIR', value: stats.nonFir },
//   ];

//   const pieData = stats && [
//     { name: 'FIR', value: stats.firCases },
//     { name: 'Non‑FIR', value: stats.nonFir },
//   ];

//   if (loading) {
//     return (
//       <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
//         {['a', 'b', 'c'].map(k => (
//           <div
//             key={k}
//             className="h-24 bg-gray-300 dark:bg-gray-700 rounded-xl"
//           />
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <p className="p-6 text-red-600 dark:text-red-400">
//         {error}
//       </p>
//     );
//   }

//   return (
//     <div
//       className="p-6 min-h-screen
//                  bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200
//                  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
//     >
//       {/* 🚔 Dashboard Title */}
//       <div className="inline-block px-6 py-3 rounded-3xl shadow-xl
//                       bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-2">
//           🚔 Vehicle&nbsp;FIR&nbsp;Dashboard
//         </h1>
//       </div>

//       {/* KPI Tiles */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <StatsCard
//           title="Total Vehicles"
//           value={stats.vehicles}
//           icon={<FaCar className="text-white" />}
//           bg="from-blue-600 to-blue-700"
//         />
//         <StatsCard
//           title="FIR Cases"
//           value={stats.firCases}
//           icon={<FaFileAlt className="text-white" />}
//           bg="from-red-600 to-red-700"
//         />
//         <StatsCard
//           title="Non‑FIR Vehicles"
//           value={stats.nonFir}
//           icon={<FaCheckCircle className="text-white" />}
//           bg="from-emerald-600 to-emerald-700"
//         />
//       </div>

//       {/* 🚨 Suspicious Report Summary */}
//       {reportStats && (
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
//           <StatsCard
//             title="Total Reports"
//             value={reportStats.total}
//             icon={<FaCarSide className="text-white" />}
//             bg="from-gray-600 to-gray-700"
//           />
//           <StatsCard
//             title="Approved"
//             value={reportStats.approved}
//             icon={<FaCarCrash className="text-white" />}
//             bg="from-green-600 to-green-700"
//           />
//           <StatsCard
//             title="Rejected"
//             value={reportStats.rejected}
//             icon={<FaCar className="text-white" />}
//             bg="from-red-500 to-red-600"
//           />
//           <StatsCard
//             title="Pending"
//             value={reportStats.pending}
//             icon={<FaSearch className="text-white" />}
//             bg="from-yellow-600 to-yellow-700"
//           />
//         </div>
//       )}

//       {/* Charts */}
//       <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Overview Chart */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="rounded-2xl shadow-xl p-6 bg-white dark:bg-gray-800"
//         >
//           <div className="w-full px-4 py-2 mb-4 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center">
//             📊 Overview
//           </div>
//           <ResponsiveContainer width="100%" height={260}>
//             <BarChart data={barData}>
//               <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} />
//               <YAxis allowDecimals={false} tick={{ fill: '#94a3b8' }} />
//               <Tooltip contentStyle={{ background: '#1e293b', color: '#fff' }} />
//               <Bar dataKey="value" radius={[6, 6, 0, 0]}>
//                 {barData.map((_, i) => (
//                   <Cell key={i} fill={BAR_COLORS[i]} />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </motion.div>

//         {/* Donut Chart */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="rounded-2xl shadow-xl p-6 bg-white dark:bg-gray-800"
//         >
//           <div className="w-full px-4 py-2 mb-4 rounded-md text-white font-semibold text-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center">
//             🧭 FIR vs Non-FIR Ratio
//           </div>
//           <ResponsiveContainer width="100%" height={260}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={70}
//                 outerRadius={100}
//                 paddingAngle={4}
//                 dataKey="value"
//               >
//                 {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
//               </Pie>
//               {/* Central Labels */}
//               <text
//                 x="50%" y="46%" textAnchor="middle" dominantBaseline="central"
//                 className="fill-gray-700 dark:fill-white text-sm font-bold"
//               >
//                 {stats.firCases} FIR
//               </text>
//               <text
//                 x="50%" y="56%" textAnchor="middle" dominantBaseline="central"
//                 className="fill-green-600 text-sm font-bold"
//               >
//                 {stats.nonFir} Clear
//               </text>
//               <Tooltip contentStyle={{ background: '#1e293b', color: '#fff' }} />
//             </PieChart>
//           </ResponsiveContainer>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
