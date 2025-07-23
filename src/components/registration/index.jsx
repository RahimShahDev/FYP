// For Design 
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'boxicons/css/boxicons.min.css';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     cnic: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     console.log('Registration submitted:', formData);
//   };

//   return (
//     <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
//       {/* Shapes */}
//       <div className="absolute w-[200px] h-[200px] rounded-full -top-28 -left-14 md:w-[400px] md:h-[400px] md:-top-44 md:-left-26 bg-gradient-to-b from-[#12192C] to-transparent"></div>
//       <div className="absolute w-[200px] h-[200px] rounded-full -bottom-24 -right-22 md:w-[300px] md:h-[300px] md:-right-26 bg-gradient-to-b from-[#12192C] to-transparent transform rotate-180"></div>

//       {/* Form Container */}
//       <div className="h-screen grid place-items-center px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
//         {/* Image (visible on larger screens) */}
//         <img 
//           src="/assets/images/authentications.svg" 
//           alt="Authentication illustration" 
//           className="hidden md:block md:w-[700px] md:justify-self-center"
//         />

//         {/* Form Content */}
//         <div className="w-[290px] md:w-[320px]">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">Register</h1>

//             {/* Username Field */}
//             <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
//               <div className="grid grid-cols-[7%_93%] items-center">
//                 <i className='bx bx-user-circle text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors'></i>
//                 <div className="relative">
//                   <label 
//                     htmlFor="username"
//                     className={`absolute left-3 top-1 text-[0.938rem] text-[#8590AD] transition-all ${
//                       formData.username ? '-top-6 text-[0.875rem] text-[#12192C]' : 
//                       'group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]'
//                     }`}
//                   >
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Email Field */}
//             <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
//               <div className="grid grid-cols-[7%_93%] items-center">
//                 <i className='bx bx-envelope text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors'></i>
//                 <div className="relative">
//                   <label 
//                     htmlFor="email"
//                     className={`absolute left-3 top-1 text-[0.938rem] text-[#8590AD] transition-all ${
//                       formData.email ? '-top-6 text-[0.875rem] text-[#12192C]' : 
//                       'group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]'
//                     }`}
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* CNIC Field */}
//             <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
//               <div className="grid grid-cols-[7%_93%] items-center">
//                 <i className='bx bx-id-card text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors'></i>
//                 <div className="relative">
//                   <label 
//                     htmlFor="cnic"
//                     className={`absolute left-3 top-1 text-[0.938rem] text-[#8590AD] transition-all ${
//                       formData.cnic ? '-top-6 text-[0.875rem] text-[#12192C]' : 
//                       'group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]'
//                     }`}
//                   >
//                     CNIC
//                   </label>
//                   <input
//                     type="text"
//                     id="cnic"
//                     name="cnic"
//                     value={formData.cnic}
//                     onChange={handleChange}
//                     placeholder="XXXXX-XXXXXXX-X"
//                     className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
//               <div className="grid grid-cols-[7%_93%] items-center">
//                 <i className='bx bx-lock text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors'></i>
//                 <div className="relative">
//                   <label 
//                     htmlFor="password"
//                     className={`absolute left-3 top-1 text-[0.938rem] text-[#8590AD] transition-all ${
//                       formData.password ? '-top-6 text-[0.875rem] text-[#12192C]' : 
//                       'group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]'
//                     }`}
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Confirm Password Field */}
//             <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
//               <div className="grid grid-cols-[7%_93%] items-center">
//                 <i className='bx bx-lock-alt text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors'></i>
//                 <div className="relative">
//                   <label 
//                     htmlFor="confirmPassword"
//                     className={`absolute left-3 top-1 text-[0.938rem] text-[#8590AD] transition-all ${
//                       formData.confirmPassword ? '-top-6 text-[0.875rem] text-[#12192C]' : 
//                       'group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]'
//                     }`}
//                   >
//                     Confirm Password
//                   </label>
//                   <input
//                     type="password"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
//                   />
//                 </div>
//               </div>
//             </div>

//             <button 
//               type="submit" 
//               className="w-full py-4 text-[0.938rem] bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
//             >
//               Register
//             </button>

//             <div className="text-center">
//               <span className="text-[0.938rem]">Already have an account? </span>
//               <Link to="/login" className="text-[0.938rem] text-[#12192C] font-medium hover:underline">
//                 Login
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RegisterForm;















// // For API Calling
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'boxicons/css/boxicons.min.css';
// import { useNavigate } from 'react-router-dom'; // 👈 Import this

// const RegisterForm = () => {
//     const navigate = useNavigate(); // 👈 Initialize it
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     cnic: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Optional: Basic client-side validation
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//         username: formData.username,          // ✅ Correct field
//         email: formData.email,
//         password: formData.password,
//         confirmPassword: formData.confirmPassword, // ✅ Correct field
//         cnic: formData.cnic
// })

//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Registration successful!");
//         navigate("/login"); // 👈 Go to login page
//         console.log(data);
//         // Optionally reset form
//         setFormData({
//           username: '',
//           email: '',
//           cnic: '',
//           password: '',
//           confirmPassword: ''
//         });
//       } else {
//         alert(data.message || "Registration failed");
//         console.error(data);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
//       <div className="absolute w-[200px] h-[200px] rounded-full -top-28 -left-14 md:w-[400px] md:h-[400px] md:-top-44 md:-left-26 bg-gradient-to-b from-[#12192C] to-transparent"></div>
//       <div className="absolute w-[200px] h-[200px] rounded-full -bottom-24 -right-22 md:w-[300px] md:h-[300px] md:-right-26 bg-gradient-to-b from-[#12192C] to-transparent transform rotate-180"></div>

//       <div className="h-screen grid place-items-center px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
//         <img 
//           src="/assets/images/authentications.svg" 
//           alt="Authentication illustration" 
//           className="hidden md:block md:w-[700px] md:justify-self-center"
//         />

//         <div className="w-[290px] md:w-[320px]">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">Register</h1>

//             {/* Username */}
//             <InputField
//               icon="bx-user-circle"
//               id="username"
//               label="Username"
//               value={formData.username}
//               onChange={handleChange}
//             />

//             {/* Email */}
//             <InputField
//               icon="bx-envelope"
//               id="email"
//               label="Email"
//               value={formData.email}
//               onChange={handleChange}
//               type="email"
//             />

//             {/* CNIC */}
//             <InputField
//             icon="bx-id-card"
//             id="cnic"
//             label="CNIC"
//             value={formData.cnic}
//             onChange={(e) => {
//             let value = e.target.value.replace(/\D/g, ''); // remove non-digits
//             if (value.length > 13) value = value.slice(0, 13);

//             const part1 = value.slice(0, 5);
//             const part2 = value.slice(5, 12);
//             const part3 = value.slice(12, 13);

//             const formatted = [part1, part2, part3].filter(Boolean).join('-');
//             setFormData(prev => ({ ...prev, cnic: formatted }));
//   }}
//   placeholder="XXXXX-XXXXXXX-X"
// />


//             {/* Password */}
//             <InputField
//               icon="bx-lock"
//               id="password"
//               label="Password"
//               value={formData.password}
//               onChange={handleChange}
//               type="password"
//             />

//             {/* Confirm Password */}
//             <InputField
//               icon="bx-lock-alt"
//               id="confirmPassword"
//               label="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               type="password"
//             />

//             <button 
//               type="submit" 
//               className="w-full py-4 text-[0.938rem] bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
//             >
//               Register
//             </button>

//             <div className="text-center">
//               <span className="text-[0.938rem]">Already have an account? </span>
//               <Link to="/login" className="text-[0.938rem] text-[#12192C] font-medium hover:underline">
//                 Login
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Reusable Input Field Component
// const InputField = ({ icon, id, label, value, onChange, type = "text", placeholder = "" }) => (
//   <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
//     <div className="grid grid-cols-[7%_93%] items-center">
//       <i className={`bx ${icon} text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors`}></i>
//       <div className="relative">
//         <label
//           htmlFor={id}
//           className={`absolute left-3 transition-all duration-200 pointer-events-none
//             ${value
//               ? '-top-6 text-[0.875rem] text-[#12192C]'
//               : 'top-1 text-[0.938rem] text-[#8590AD] group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]'
//             }`}
//         >
//           {label}
//         </label>
//         <input
//           type={type}
//           id={id}
//           name={id}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
//           autoComplete="off"
//         />
//       </div>
//     </div>
//   </div>
// );


// export default RegisterForm;























import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    cnic: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      const response = await fetch('https://fyp-backend-production-5d98.up.railway.app/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Registration successful!");
        setFormData({
          username: '',
          email: '',
          cnic: '',
          password: '',
          confirmPassword: ''
        });
        navigate("/login");
      } else {
        alert("❌ " + (data.message || "Registration failed"));
        console.error(data);
      }
    } catch (error) {
      console.error("🔥 Error submitting form:", error);
      alert("Something went wrong:\n" + error.message);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
      <div className="absolute w-[200px] h-[200px] rounded-full -top-28 -left-14 md:w-[400px] md:h-[400px] bg-gradient-to-b from-[#12192C] to-transparent" />
      <div className="absolute w-[200px] h-[200px] rounded-full -bottom-24 -right-22 md:w-[300px] md:h-[300px] bg-gradient-to-b from-[#12192C] to-transparent rotate-180" />

      <div className="h-screen grid place-items-center px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
        <img
          src="/assets/images/authentications.svg"
          alt="Authentication Illustration"
          className="hidden md:block md:w-[700px]"
        />

        <div className="w-[290px] md:w-[320px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">Register</h1>

            <InputField
              icon="bx-user-circle"
              id="username"
              label="Username"
              value={formData.username}
              onChange={handleChange}
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,20}$"
title="Username must be 3–20 characters, and include both letters and numbers"

            />

            <InputField
              icon="bx-envelope"
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
              title="Enter a valid email address"
            />

            <InputField
              icon="bx-id-card"
              id="cnic"
              label="CNIC"
              value={formData.cnic}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 13) value = value.slice(0, 13);
                const part1 = value.slice(0, 5);
                const part2 = value.slice(5, 12);
                const part3 = value.slice(12, 13);
                const formatted = [part1, part2, part3].filter(Boolean).join('-');
                setFormData(prev => ({ ...prev, cnic: formatted }));
              }}
              placeholder="XXXXX-XXXXXXX-X"
              pattern="^\d{5}-\d{7}-\d{1}$"
              title="Enter CNIC in format 12345-1234567-1"
            />

            <InputField
              icon="bx-lock"
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              pattern="^[A-Za-z0-9]{6,}$"
              title="Password must be at least 6 characters with letters or numbers"
            />

            <InputField
              icon="bx-lock-alt"
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              pattern="^[A-Za-z0-9]{6,}$"
              title="Confirm password must match password"
            />

            <button
              type="submit"
              className="w-full py-4 text-[0.938rem] bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
            >
              Register
            </button>

            <div className="text-center">
              <span className="text-[0.938rem]">Already have an account? </span>
              <Link to="/login" className="text-[0.938rem] text-[#12192C] font-medium hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ icon, id, label, value, onChange, type = "text", placeholder = "", pattern, title }) => (
  <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
    <div className="grid grid-cols-[7%_93%] items-center">
      <i className={`bx ${icon} text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors`}></i>
      <div className="relative">
        <label
          htmlFor={id}
          className={`absolute left-3 transition-all duration-200 pointer-events-none ${
            value
              ? '-top-6 text-[0.875rem] text-[#12192C]'
              : 'top-1 text-[0.938rem] text-[#8590AD] group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]'
          }`}
        >
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          pattern={pattern}
          title={title}
          className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
          autoComplete="off"
          required
        />
      </div>
    </div>
  </div>
);

export default RegisterForm;
