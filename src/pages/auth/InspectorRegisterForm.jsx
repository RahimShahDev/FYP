// // src/pages/auth/InspectorRegisterForm.jsx
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { api } from "../../utils/api";

// export default function InspectorRegisterForm() {
//   const nav = useNavigate();
//   const [f, setF] = useState({ username: "", email: "", password: "", confirmPassword: "" });

//   const change = (e) => setF({ ...f, [e.target.name]: e.target.value });

//   const submit = async (e) => {
//     e.preventDefault();
//     await api("/api/inspector/register", { method: "POST", body: JSON.stringify(f), headers: { "Content-Type": "application/json" }});
//     alert("Registration successful!");
//     nav("/inspector-login");
//   };

//   return (
//     /* simple form – feel free to style like your existing components */
//     <form onSubmit={submit} className="max-w-sm mx-auto p-6 space-y-4">
//       <h1 className="text-2xl font-bold mb-4">Inspector Registration</h1>
//       <input name="username" value={f.username} onChange={change} placeholder="Username" className="input" required />
//       <input name="email"    value={f.email}    onChange={change} placeholder="Email" type="email" className="input" required />
//       <input name="password" value={f.password} onChange={change} placeholder="Password" type="password" className="input" required />
//       <input name="confirmPassword" value={f.confirmPassword} onChange={change} placeholder="Confirm Password" type="password" className="input" required />
//       <button className="btn w-full">Register</button>
//       <p className="text-center text-sm">Already have an account? <Link to="/inspector-login" className="underline">Login</Link></p>
//     </form>
//   );
// }
