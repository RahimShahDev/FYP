// // ReportSuspiciousVehicleForm.jsx
// // Suspicious‑vehicle report form wired to POST /api/public/report‑suspicious
// // --- Dependencies ---
// // npm install axios react-toastify framer-motion react-icons
// // Tailwind CSS already configured in the project.

// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { ToastContainer, toast } from "react-toastify";
// import { FaTimes } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";

// export default function ReportSuspiciousVehicleForm({ onClose }) {
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     vehicleType: "",
//     plateNumber: "",
//     locationSeen: "",
//     datetimeSeen: "",
//     description: "",
//     image: null,
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const fd = new FormData();
//     Object.entries(form).forEach(([key, val]) => {
//       if (val) fd.append(key, val);
//     });

//     try {
//       const { data } = await axios.post(
//         "http://localhost:5000/api/public/report-suspicious",
//         fd,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       toast.success(data.message || "Report submitted successfully!");
//       setForm({
//         fullName: "",
//         email: "",
//         vehicleType: "",
//         plateNumber: "",
//         locationSeen: "",
//         datetimeSeen: "",
//         description: "",
//         image: null,
//       });
//     } catch (err) {
//       console.error(err);
//       toast.error(
//         err.response?.data?.error || "Failed to submit report. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
//       <ToastContainer position="top-right" />
//       {onClose && (
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-red-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-red-700 focus:outline-none"
//           aria-label="Close form"
//         >
//           <FaTimes />
//         </button>
//       )}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-xl w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl"
//       >
//         <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">
//           Report Suspicious Vehicle
//         </h2>
//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//           encType="multipart/form-data"
//         >
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             value={form.fullName}
//             onChange={handleChange}
//             className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
//             required
//           />
//           <select
//             name="vehicleType"
//             value={form.vehicleType}
//             onChange={handleChange}
//             className="border px-4 py-2 rounded-md"
//             required
//           >
//             <option value="" disabled>
//               Select Vehicle Type
//             </option>
//             <option value="Car">Car</option>
//             <option value="Motorcycle">Motorcycle</option>
//             <option value="Truck">Truck</option>
//             <option value="Bus">Bus</option>
//             <option value="Rickshaw">Rickshaw</option>
//             <option value="SUV">SUV</option>
//             <option value="Van">Van</option>
//             <option value="Tractor">Tractor</option>
//             <option value="Trailer">Trailer</option>
//             <option value="Other">Other</option>
//           </select>
//           <input
//             type="text"
//             name="plateNumber"
//             placeholder="Plate Number"
//             value={form.plateNumber}
//             onChange={handleChange}
//             className="border px-4 py-2 rounded-md"
//             required
//           />
//           <input
//             type="text"
//             name="locationSeen"
//             placeholder="Location Seen"
//             value={form.locationSeen}
//             onChange={handleChange}
//             className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
//             required
//           />
//           <input
//             type="datetime-local"
//             name="datetimeSeen"
//             value={form.datetimeSeen}
//             onChange={handleChange}
//             className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Describe the incident…"
//             value={form.description}
//             onChange={handleChange}
//             className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
//             rows="4"
//           />
//           <input
//             type="file"
//             name="image"
//             onChange={handleChange}
//             accept="image/*"
//             className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
//           />
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             disabled={loading}
//             className="col-span-1 sm:col-span-2 bg-red-600 text-white py-3 rounded-md font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
//           >
//             {loading ? "Submitting…" : "Submit Report"}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }










// ReportSuspiciousVehicleForm.jsx
import React, { useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function ReportSuspiciousVehicleForm({ onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    vehicleType: "",
    plateNumber: "",
    locationSeen: "",
    datetimeSeen: "",
    description: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const imageInputRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData();
    Object.entries(form).forEach(([key, val]) => {
      if (val) fd.append(key, val);
    });

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/public/report-suspicious",
        fd,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(data.message || "Report submitted successfully!");

      setForm({
        fullName: "",
        email: "",
        vehicleType: "",
        plateNumber: "",
        locationSeen: "",
        datetimeSeen: "",
        description: "",
        image: null,
      });

      if (imageInputRef.current) imageInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.error ||
          "Failed to submit report. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <ToastContainer position="top-right" />

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-600 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-red-700 focus:outline-none"
          aria-label="Close form"
        >
          <FaTimes />
        </button>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">
          Report Suspicious Vehicle
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          encType="multipart/form-data"
        >
          {/* <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
            required
          /> */}

          <input
  type="text"
  name="fullName"
  placeholder="Full Name"
  value={form.fullName}
  onChange={handleChange}
  pattern="^[A-Za-z ]+$"
  title="Full name must contain only alphabets or with special characters"
  className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
  required
/>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
            required
          />
          <select
            name="vehicleType"
            value={form.vehicleType}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md"
            required
          >
            <option value="" disabled>
              Select Vehicle Type
            </option>
            <option value="Car">Car</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Truck">Truck</option>
            <option value="Bus">Bus</option>
            <option value="Rickshaw">Rickshaw</option>
            <option value="SUV">SUV</option>
            <option value="Van">Van</option>
            <option value="Tractor">Tractor</option>
            <option value="Trailer">Trailer</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="plateNumber"
            placeholder="Plate Number"
            value={form.plateNumber}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md"
            required
          />
          <input
            type="text"
            name="locationSeen"
            placeholder="Location Seen"
            value={form.locationSeen}
            onChange={handleChange}
            className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
            required
          />
          <input
            type="datetime-local"
            name="datetimeSeen"
            value={form.datetimeSeen}
            onChange={handleChange}
            className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
            required
          />
          <textarea
            name="description"
            placeholder="Describe the incident…"
            value={form.description}
            onChange={handleChange}
            className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
            rows="4"
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            ref={imageInputRef}
            className="col-span-1 sm:col-span-2 border px-4 py-2 rounded-md"
          />

          {/* Buttons row */}
          <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-4 mt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full sm:w-1/2 bg-red-600 text-white py-3 rounded-md font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting…" : "Submit Report"}
            </motion.button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-1/2 bg-gray-600 text-white py-3 rounded-md font-medium transition-all hover:bg-gray-700"
            >
              ← Go Back
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
