// // ✅ src/components/ReportSuspiciousVehicleForm/index.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const fd = new FormData();
//       fd.append("fullName", form.fullName);
//       fd.append("email", form.email);
//       fd.append("vehicleType", form.vehicleType);
//       fd.append("plateNumber", form.plateNumber);
//       fd.append("locationSeen", form.location);
//       fd.append("datetimeSeen", form.datetime);
//       fd.append("description", form.description);
//       if (form.image) fd.append("image", form.image);

//       const res = await fetch("http://localhost:5000/api/public/report-suspicious", {
//         method: "POST",
//         body: fd,
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Submission failed");

//       alert("✅ Report submitted!");
//       setForm({
//         fullName: "",
//         email: "",
//         vehicleType: "",
//         plateNumber: "",
//         location: "",
//         datetime: "",
//         description: "",
//         image: null,
//       });
//     } catch (err) {
//       alert(err.message || "Something went wrong");
//       console.error("Report submit error:", err);
//     }
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
//           <InputField label="Full Name" name="fullName" type="text" value={form.fullName} onChange={handleChange} required />
//           <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
//           <SelectField label="Vehicle Type" name="vehicleType" value={form.vehicleType} onChange={handleChange} required />
//           <InputField label="Plate Number (if visible)" name="plateNumber" type="text" value={form.plateNumber} onChange={handleChange} />
//           <InputField label="Location Seen" name="location" type="text" value={form.location} onChange={handleChange} required />
//           <InputField label="Date & Time" name="datetime" type="datetime-local" value={form.datetime} onChange={handleChange} required />
//           <TextareaField label="Description" name="description" value={form.description} onChange={handleChange} required />
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Upload Image (optional)</label>
//             <input type="file" name="image" accept="image/*" onChange={handleChange} className="text-gray-700 dark:text-gray-300" />
//           </div>
//           <div className="text-end">
//             <button type="submit" className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-md font-semibold transition">
//               Submit Report
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </section>
//   );
// }

// function InputField({ label, name, type, value, onChange, required }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         required={required}
//         className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
//       />
//     </div>
//   );
// }

// function SelectField({ label, name, value, onChange, required }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//         required={required}
//         className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
//       >
//         <option value="">Select Type</option>
//         <option>Car</option>
//         <option>Bike</option>
//         <option>Truck</option>
//         <option>Bus</option>
//         <option>Other</option>
//       </select>
//     </div>
//   );
// }

// function TextareaField({ label, name, value, onChange, required }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
//       <textarea
//         name={name}
//         value={value}
//         onChange={onChange}
//         rows={4}
//         required={required}
//         className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
//       />
//     </div>
//   );
// }






// ✅ src/components/ReportSuspiciousVehicleForm/index.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ReportSuspiciousVehicleForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    vehicleType: "",
    plateNumber: "",
    location: "",
    datetime: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      Object.entries({
        fullName: form.fullName,
        email: form.email,
        vehicleType: form.vehicleType,
        plateNumber: form.plateNumber,
        locationSeen: form.location,
        datetimeSeen: form.datetime,
        description: form.description,
      }).forEach(([k, v]) => fd.append(k, v));
      if (form.image) fd.append("image", form.image);

      const res = await fetch("http://localhost:5000/api/public/report-suspicious", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      alert("✅ Report submitted!");
      setForm({
        fullName: "",
        email: "",
        vehicleType: "",
        plateNumber: "",
        location: "",
        datetime: "",
        description: "",
        image: null,
      });
    } catch (err) {
      alert(err.message || "Something went wrong");
      console.error("Report submit error:", err);
    }
  };

  return (
    <section className="min-h-screen p-6 bg-gradient-to-tr from-blue-100 via-sky-200 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white/70 dark:bg-white/5 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10 p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          📄 Report Suspicious Vehicle
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <Input label="Full Name" name="fullName" type="text" value={form.fullName} onChange={handleChange} />
          <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
          <Select name="vehicleType" value={form.vehicleType} onChange={handleChange} />
          <Input label="Plate Number (optional)" name="plateNumber" type="text" value={form.plateNumber} onChange={handleChange} />
          <Input label="Location Seen" name="location" type="text" value={form.location} onChange={handleChange} />
          <Input label="Date & Time" name="datetime" type="datetime-local" value={form.datetime} onChange={handleChange} />
          <Textarea name="description" value={form.description} onChange={handleChange} />
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image (optional)</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} />
          </div>
          <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-md font-semibold place-self-end" type="submit">Submit Report</button>
        </form>
      </motion.div>
    </section>
  );
}

/* Utilities */
const Input = ({ label, ...rest }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
    <input {...rest} required className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700" />
  </div>
);

const Select = ({ name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Vehicle Type</label>
    <select name={name} value={value} onChange={onChange} required className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
      <option value="">Select Type</option>
      {['Car','Bike','Truck','Bus','Other'].map(t=> <option key={t}>{t}</option>)}
    </select>
  </div>
);

const Textarea = ({ name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
    <textarea name={name} value={value} onChange={onChange} rows={4} required className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700" />
  </div>
);
