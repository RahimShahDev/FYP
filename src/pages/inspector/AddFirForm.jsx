// // src/pages/inspector/AddFirForm.jsx
// import React, { useState } from "react";
// import { api } from "../../utils/api";

// export default function AddFirForm() {
//   const [f, setF] = useState({ plateNumber: "", chassisNumber: "", description: "" });

//   const change = (e) => setF({ ...f, [e.target.name]: e.target.value });

//   const submit = async (e) => {
//     e.preventDefault();
//     await api("/api/inspector/add-fir", {
//       method: "POST",
//       body: JSON.stringify({ ...f, firDetails: { description: f.description, dateFiled: new Date() } }),
//       headers: { "Content-Type": "application/json" },
//     });
//     alert("FIR added!");
//     setF({ plateNumber: "", chassisNumber: "", description: "" });
//   };

//   return (
//     <form onSubmit={submit} className="p-6 max-w-md space-y-4">
//       <h1 className="text-2xl font-bold">Add FIR to Vehicle</h1>
//       <input name="plateNumber" value={f.plateNumber} onChange={change} placeholder="Plate Number" className="input" />
//       <input name="chassisNumber" value={f.chassisNumber} onChange={change} placeholder="Chassis Number" className="input" />
//       <textarea name="description" value={f.description} onChange={change} placeholder="FIR Description" rows="4" className="input" required />
//       <button className="btn w-full">Add FIR</button>
//     </form>
//   );
// }
