// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "boxicons/css/boxicons.min.css";

// export default function AdminRegisterForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   /* ───────── handlers ───────── */
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/admin/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Registration failed");
//       alert("Registration successful!");
//       navigate("/inspector-login");
//     } catch (err) {
//       alert(err.message || "Something went wrong");
//       console.error("Admin registration error:", err);
//     }
//   };

//   /* ───────── UI ───────── */
//   return (
//     <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
//       {/* bubbles */}
//       <div className="absolute w-[200px] h-[200px] rounded-full -top-28 -left-14 md:w-[400px] md:h-[400px] bg-gradient-to-b from-[#12192C] to-transparent" />
//       <div className="absolute w-[200px] h-[200px] rounded-full -bottom-24 -right-22 md:w-[300px] md:h-[300px] bg-gradient-to-b from-[#12192C] to-transparent rotate-180" />

//       <div className="h-full grid place-items-center px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
//         <img
//           src="/assets/images/authentications.svg"
//           alt="Admin authentication"
//           className="hidden md:block md:w-[700px] md:justify-self-center"
//         />

//         <div className="w-[290px] md:w-[320px]">
//           {/* gradient header */}
//             <h2 className="text-[1.5rem] font-medium mb-8 md:text-[2rem]">Inspector Portal Registration</h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <InputField
//               icon="bx-user"
//               id="username"
//               label="Username"
//               value={formData.username}
//               onChange={handleChange}
//             />
//             <InputField
//               icon="bx-envelope"
//               id="email"
//               label="Email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <InputField
//               icon="bx-lock"
//               id="password"
//               label="Password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <InputField
//               icon="bx-lock-alt"
//               id="confirmPassword"
//               label="Confirm Password"
//               type="password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />

//             <button type="submit" className="w-full py-4 bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all">
//               Register as Inspector
//             </button>

//             <div className="text-center">
//               <span className="text-[0.938rem]">Already have an account? </span>
//               <Link to="/inspector-login" className="text-[0.938rem] text-[#12192C] font-medium hover:underline">
//                 Login
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* floating‑label field */
// function InputField({ icon, id, label, value, onChange, type = "text", placeholder = "" }) {
//   return (
//     <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
//       <div className="grid grid-cols-[7%_93%] items-center">
//         <i className={`bx ${icon} text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors`} />
//         <div className="relative">
//           <label
//             htmlFor={id}
//             className={`absolute left-3 transition-all duration-200 pointer-events-none ${
//               value ? "-top-6 text-[0.875rem] text-[#12192C]" : "top-1 text-[0.938rem] text-[#8590AD] group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]"
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
//             placeholder={placeholder}
//             required
//             autoComplete="off"
//             className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }







































import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

export default function AdminRegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  /* ───────── handlers ───────── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");
      alert("Registration successful!");
      navigate("/inspector-login");
    } catch (err) {
      alert(err.message || "Something went wrong");
      console.error("Admin registration error:", err);
    }
  };

  /* ───────── UI ───────── */
  return (
    <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
      {/* bubbles */}
      <div className="absolute w-[200px] h-[200px] rounded-full -top-28 -left-14 md:w-[400px] md:h-[400px] bg-gradient-to-b from-[#12192C] to-transparent" />
      <div className="absolute w-[200px] h-[200px] rounded-full -bottom-24 -right-22 md:w-[300px] md:h-[300px] bg-gradient-to-b from-[#12192C] to-transparent rotate-180" />

      <div className="h-full grid place-items-center px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
        <img
          src="/assets/images/authentications.svg"
          alt="Admin authentication"
          className="hidden md:block md:w-[700px] md:justify-self-center"
        />

        <div className="w-[290px] md:w-[320px]">
          <h2 className="text-[1.5rem] font-medium mb-8 md:text-[2rem]">
            Inspector Portal Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              icon="bx-user"
              id="username"
              label="Username"
              value={formData.username}
              onChange={handleChange}
              pattern="^[A-Za-z0-9]{3,20}$"
              title="Username must be 3–20 characters long and contain only letters and numbers"

            />

            <InputField
              icon="bx-envelope"
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
              title="Please enter a valid email address"
            />

            <InputField
              icon="bx-lock"
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              pattern="^[A-Za-z\d]{6,}$"
              title="Password must be at least 6 characters long and contain only letters or numbers"

            />

            <InputField
              icon="bx-lock-alt"
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              title="Please confirm your password"
            />

            <button
              type="submit"
              className="w-full py-4 bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
            >
              Register as Inspector
            </button>

            <div className="text-center">
              <span className="text-[0.938rem]">Already have an account? </span>
              <Link
                to="/inspector-login"
                className="text-[0.938rem] text-[#12192C] font-medium hover:underline"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ───────── InputField Component ───────── */
function InputField({
  icon,
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  pattern,
  title,
}) {
  return (
    <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
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
            placeholder={placeholder}
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
