// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'boxicons/css/boxicons.min.css';

// const AdminRegisterForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     adminCode: '',
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

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   console.log("📨 Form submitted with:", formData);

//   if (formData.password !== formData.confirmPassword) {
//     alert("❌ Passwords do not match");
//     return;
//   }

//   try {
//     const requestBody = {
//       name: formData.username,
//       email: formData.email,
//       password: formData.password,
//       adminCode: formData.adminCode
//     };

//     console.log("🔄 Sending POST request to backend...");
//     const response = await fetch('http://localhost:5000/api/admin/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(requestBody)
//     });

//     console.log("📬 Response received:", response);

//     const data = await response.json();

//     console.log("📦 Parsed JSON:", data);

//     if (response.ok) {
//       alert("✅ Admin registered successfully!");
//       setFormData({
//         username: '',
//         email: '',
//         adminCode: '',
//         password: '',
//         confirmPassword: ''
//       });
//       navigate("/admin-login");
//     } else {
//       alert("❌ Server responded with error: " + (data.message || response.statusText));
//     }

//   } catch (error) {
//     console.error("🔥 Fetch failed:", error);
//     alert("Something went wrong. Try again.\n\n" + error.message);
//   }
// };


//   return (
//     <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
//       <div className="absolute w-[200px] h-[200px] rounded-full -top-28 -left-14 md:w-[400px] md:h-[400px] bg-gradient-to-b from-[#12192C] to-transparent"></div>
//       <div className="absolute w-[200px] h-[200px] rounded-full -bottom-24 -right-22 md:w-[300px] md:h-[300px] bg-gradient-to-b from-[#12192C] to-transparent rotate-180"></div>

//       <div className="h-screen grid place-items-center px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
//         <img
//           src="/assets/images/authentications.svg"
//           alt="Admin Authentication"
//           className="hidden md:block md:w-[700px]"
//         />

//         <div className="w-[290px] md:w-[320px]">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">Admin Register</h1>

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
//               icon="bx-key"
//               id="adminCode"
//               label="Admin Code"
//               value={formData.adminCode}
//               onChange={handleChange}
//               placeholder="Secret admin key"
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

//             <button
//               type="submit"
//               className="w-full py-4 bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
//             >
//               Register as Admin
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// const InputField = ({ icon, id, label, value, onChange, type = "text", placeholder = "" }) => (
//   <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
//     <div className="grid grid-cols-[7%_93%] items-center">
//       <i className={`bx ${icon} text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C]`}></i>
//       <div className="relative">
//         <label
//           htmlFor={id}
//           className={`absolute left-3 top-1 text-[0.938rem] text-[#8590AD] transition-all ${
//             value ? '-top-6 text-[0.875rem] text-[#12192C]' :
//             'group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]'
//           }`}
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
//           className="w-full py-2 px-3 text-[1.2rem] bg-transparent outline-none"
//         />
//       </div>
//     </div>
//   </div>
// );

// export default AdminRegisterForm;






// import React, { useState } from 'react';

// const AdminRegister = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setMessage('');

//     try {
//       const response = await fetch('http://localhost:5000/api/admin/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.error || 'Registration failed');
//       }

//       setMessage(result.message);
//       setFormData({ username: '', password: '' });
//     } catch (err) {
//       setError(err.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
//       <h2 className="text-2xl font-bold mb-4">Admin Registration</h2>

//       {message && <div className="text-green-600 mb-2">{message}</div>}
//       {error && <div className="text-red-600 mb-2">{error}</div>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-medium">Username</label>
//           <input
//             type="text"
//             name="username"
//             className="w-full border rounded p-2"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="w-full border rounded p-2"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminRegister;


















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import 'boxicons/css/boxicons.min.css';

// const AdminRegisterForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//   username: '',
//   email: '',
//   password: '',
//   confirmPassword: ''
// });


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (formData.password !== formData.confirmPassword) {
//     alert("❌ Passwords do not match");
//     return;
//   }

//   try {
//     const requestBody = {
//       username: formData.username, // ✅ match key name with backend
//       email: formData.email,
//       password: formData.password,
//       confirmPassword: formData.confirmPassword // ✅ match exactly
//     };

//     const response = await fetch('http://localhost:5000/api/admin/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(requestBody)
//     });

//     const data = await response.json();

//     if (response.ok) {
//       alert("✅ " + data.message);
//       setFormData({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//       });
//       navigate("/admin-login");
//     } else {
//       alert("❌ " + (data.message || "Registration failed"));
//     }

//   } catch (error) {
//     console.error("🔥 Fetch failed:", error);
//     alert("Something went wrong:\n" + error.message);
//   }
// };


//   return (
//     <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
//       <div className="absolute w-[200px] h-[200px] rounded-full -top-28 -left-14 md:w-[400px] md:h-[400px] bg-gradient-to-b from-[#12192C] to-transparent"></div>
//       <div className="absolute w-[200px] h-[200px] rounded-full -bottom-24 -right-22 md:w-[300px] md:h-[300px] bg-gradient-to-b from-[#12192C] to-transparent rotate-180"></div>

//       <div className="h-screen grid place-items-center px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
//         <img
//           src="/assets/images/authentications.svg"
//           alt="Admin Authentication"
//           className="hidden md:block md:w-[700px]"
//         />

//         <div className="w-[290px] md:w-[320px]">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">Admin Register</h1>

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

//             <button
//               type="submit"
//               className="w-full py-4 bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
//             >
//               Register as Admin
//             </button>
//             <div className="text-center">
//               <span className="text-[0.938rem]">Already have an account? </span>
//               <Link to="/admin-login" className="text-[0.938rem] text-[#12192C] font-medium hover:underline">
//                 Login
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// const InputField = ({ icon, id, label, value, onChange, type = "text", placeholder = "" }) => (
//   <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
//     <div className="grid grid-cols-[7%_93%] items-center">
//       <i className={`bx ${icon} text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors`}></i>
//       <div className="relative">
//         <label
//           htmlFor={id}
//           className={`absolute left-3 transition-all duration-200 pointer-events-none
//             ${value?.length > 0
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
//         />
//       </div>
//     </div>
//   </div>
// );

// export default AdminRegisterForm;

























import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

const AdminRegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      const requestBody = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      };

      const response = await fetch('http://localhost:5000/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ " + data.message);
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        navigate("/admin-login");
      } else {
        alert("❌ " + (data.message || "Registration failed"));
      }

    } catch (error) {
      console.error("🔥 Fetch failed:", error);
      alert("Something went wrong:\n" + error.message);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
      <div className="absolute w-[200px] h-[200px] rounded-full -top-28 -left-14 md:w-[400px] md:h-[400px] bg-gradient-to-b from-[#12192C] to-transparent"></div>
      <div className="absolute w-[200px] h-[200px] rounded-full -bottom-24 -right-22 md:w-[300px] md:h-[300px] bg-gradient-to-b from-[#12192C] to-transparent rotate-180"></div>

      <div className="h-screen grid place-items-center px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
        <img
          src="/assets/images/authentications.svg"
          alt="Admin Authentication"
          className="hidden md:block md:w-[700px]"
        />

        <div className="w-[290px] md:w-[320px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">Admin Register</h1>

            <InputField
              icon="bx-user"
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
              title="Please enter a valid email address"
            />

            <InputField
              icon="bx-lock"
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              pattern="^[A-Za-z0-9]{6,}$"
              title="Password must be at least 6 characters and contain only letters or numbers"
            />

            <InputField
              icon="bx-lock-alt"
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              pattern="^[A-Za-z0-9]{6,}$"
              title="Confirm Password must match the password"
            />

            <button
              type="submit"
              className="w-full py-4 bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
            >
              Register as Admin
            </button>

            <div className="text-center">
              <span className="text-[0.938rem]">Already have an account? </span>
              <Link to="/admin-login" className="text-[0.938rem] text-[#12192C] font-medium hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const InputField = ({
  icon,
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  pattern,
  title
}) => (
  <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
    <div className="grid grid-cols-[7%_93%] items-center">
      <i className={`bx ${icon} text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors`}></i>
      <div className="relative">
        <label
          htmlFor={id}
          className={`absolute left-3 transition-all duration-200 pointer-events-none ${
            value?.length > 0
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
          required
          autoComplete="off"
          className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
        />
      </div>
    </div>
  </div>
);

export default AdminRegisterForm;
