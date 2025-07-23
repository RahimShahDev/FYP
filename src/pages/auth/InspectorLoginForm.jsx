// // src/pages/auth/InspectorLoginForm.jsx
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { api } from "../../utils/api";
// import { useAuth } from "../../context/AuthContext";

// export default function InspectorLoginForm() {
//   const nav = useNavigate();
//   const { login } = useAuth();
//   const [f, setF] = useState({ email: "", password: "" });
//   const change = (e) => setF({ ...f, [e.target.name]: e.target.value });

//   const submit = async (e) => {
//     e.preventDefault();
//     const { token } = await api("/api/inspector/login", {
//       method: "POST",
//       body: JSON.stringify(f),
//       headers: { "Content-Type": "application/json" },
//     });
//     login({ token, role: "inspector" });
//     nav("/inspector/dashboard");
//   };

//   return (
//     <form onSubmit={submit} className="max-w-sm mx-auto p-6 space-y-4">
//       <h1 className="text-2xl font-bold mb-4">Inspector Login</h1>
//       <input name="email" value={f.email} onChange={change} placeholder="Email" type="email" className="input" required />
//       <input name="password" value={f.password} onChange={change} placeholder="Password" type="password" className="input" required />
//       <button className="btn w-full">Login</button>
//       <p className="text-center text-sm">No account? <Link to="/inspector-register" className="underline">Register</Link></p>
//     </form>
//   );
// }
