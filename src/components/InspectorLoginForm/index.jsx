// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import "boxicons/css/boxicons.min.css";

// export default function InspectorLoginForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/api/inspector/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Login failed");

//       const { token, inspectorName } = data;
//       localStorage.setItem("authToken", token);

//       login({
//         role: "inspector",
//         name: inspectorName || formData.email,
//         email: formData.email,
//         id: `inspector-${Date.now()}`,
//         avatar: `https://i.pravatar.cc/150?u=${formData.email}`,
//         token,
//         isAuthenticated: true,
//       });

//       navigate("/inspector-dashboard");
//     } catch (err) {
//       alert(err.message || "Invalid credentials");
//       console.error("Inspector login error:", err);
//     }
//   };

//   return (
//     <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
//       <div className="absolute w-[200px] h-[200px] rounded-full -top-28 -left-14 md:w-[400px] md:h-[400px] md:-top-44 md:-left-26 bg-gradient-to-b from-[#12192C] to-transparent" />
//       <div className="absolute w-[200px] h-[200px] rounded-full -bottom-24 -right-22 md:w-[300px] md:h-[300px] md:-right-26 bg-gradient-to-b from-[#12192C] to-transparent rotate-180" />

//       <div className="h-screen grid place-items-center px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
//         <img
//           src="/assets/images/authentications.svg"
//           alt="Inspector authentication illustration"
//           className="hidden md:block md:w-[700px] md:justify-self-center"
//         />

//         <div className="w-[290px] md:w-[320px]">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">
//               Inspector Portal Login
//             </h1>

//             <FormField
//               icon="bx-user"
//               id="email"
//               label="Official Email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <FormField
//               icon="bx-lock-alt"
//               id="password"
//               label="Password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//             />

//             <button
//               type="submit"
//               className="w-full py-4 text-[0.938rem] bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
//             >
//               Login as Inspector
//             </button>

//             <div className="text-center mt-6">
//               <p className="text-[0.938rem] text-[#8590AD]">
//                 Don't have an account?{" "}
//                 <Link
//                   to="/inspector-Registration"
//                   className="text-[#12192C] font-medium hover:underline"
//                 >
//                   Register here
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// function FormField({ icon, id, label, type, value, onChange }) {
//   return (
//     <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-8">
//       <div className="grid grid-cols-[7%_93%] items-center">
//         <i
//           className={`bx ${icon} text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors`}
//         />
//         <div className="relative">
//           <label
//             htmlFor={id}
//             className={`absolute left-3 transition-all duration-200 pointer-events-none ${
//               value
//                 ? "-top-6 text-[0.875rem] text-[#12192C]"
//                 : "top-1 text-[0.938rem] text-[#8590AD] group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]"
//             }`}
//           >
//             {label}
//           </label>
//           <input
//             id={id}
//             name={id}
//             type={type}
//             value={value}
//             onChange={onChange}
//             required
//             className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }










import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "boxicons/css/boxicons.min.css";

export default function InspectorLoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/inspector/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      const { token, inspectorName } = data;
      localStorage.setItem("authToken", token);

      login({
        role: "inspector",
        name: inspectorName || formData.email,
        email: formData.email,
        id: `inspector-${Date.now()}`,
        avatar: `https://i.pravatar.cc/150?u=${formData.email}`,
        token,
        isAuthenticated: true,
      });

      navigate("/inspector-dashboard");
    } catch (err) {
      alert(err.message || "Invalid credentials");
      console.error("Inspector login error:", err);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
      <div className="absolute w-[200px] h-[200px] rounded-full -top-28 -left-14 md:w-[400px] md:h-[400px] md:-top-44 md:-left-26 bg-gradient-to-b from-[#12192C] to-transparent" />
      <div className="absolute w-[200px] h-[200px] rounded-full -bottom-24 -right-22 md:w-[300px] md:h-[300px] md:-right-26 bg-gradient-to-b from-[#12192C] to-transparent rotate-180" />

      <div className="h-screen grid place-items-center px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
        <img
          src="/assets/images/authentications.svg"
          alt="Inspector authentication illustration"
          className="hidden md:block md:w-[700px] md:justify-self-center"
        />

        <div className="w-[290px] md:w-[320px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">
              Inspector Portal Login
            </h1>

            <FormField
              icon="bx-user"
              id="email"
              label="Official Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
              title="Please enter a valid email address"
            />

            <FormField
              icon="bx-lock-alt"
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              pattern="^[A-Za-z0-9]{6,}$"
              title="Password must be at least 6 characters and contain only letters and numbers"

            />

            <button
              type="submit"
              className="w-full py-4 text-[0.938rem] bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
            >
              Login as Inspector
            </button>

            <div className="text-center mt-6">
              <p className="text-[0.938rem] text-[#8590AD]">
                Don't have an account?{" "}
                <Link
                  to="/inspector-Registration"
                  className="text-[#12192C] font-medium hover:underline"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ───────── FormField Component ───────── */
function FormField({ icon, id, label, type, value, onChange, pattern, title }) {
  return (
    <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-8">
      <div className="grid grid-cols-[7%_93%] items-center">
        <i
          className={`bx ${icon} text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors`}
        />
        <div className="relative">
          <label
            htmlFor={id}
            className={`absolute left-3 transition-all duration-200 pointer-events-none ${
              value
                ? "-top-6 text-[0.875rem] text-[#12192C]"
                : "top-1 text-[0.938rem] text-[#8590AD] group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]"
            }`}
          >
            {label}
          </label>
          <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
            required
            autoComplete="off"
            pattern={pattern}
            title={title}
            className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
}
