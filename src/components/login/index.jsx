// Correct Design 
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import 'boxicons/css/boxicons.min.css';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login({
//       role: 'user',
//       name: formData.username || 'Guest User',
//       id: `user-${Date.now()}`,
//       email: `${formData.username}@example.com`,
//       avatar: `https://i.pravatar.cc/150?u=${formData.username || 'guest'}`,
//       isAuthenticated: true
//     });
//     navigate('/dashboard'); // Redirect after login
//   };

//   const handleTestLogin = (role) => {
//     login({ 
//       role, 
//       name: role === 'admin' ? 'Admin User' : 'Regular User',
//       id: `${role}-${Date.now()}`,
//       email: `${role}@test.com`,
//       avatar: `https://i.pravatar.cc/150?u=${role}-${Date.now()}`,
//       isAuthenticated: true
//     });
//      // Redirect to home for regular users, dashboard for admin
//   navigate(role === 'admin' ? '/dashboard' : '/home'); 
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
//             <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">Welcome</h1>

//             {/* Username Field */}
//             <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-12">
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
//                     required
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
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             <Link to="#" className="block text-right text-[0.938rem] text-[#8590AD] font-medium hover:text-[#104382] transition-colors">
//               Forgot Password?
//             </Link>

//             <button 
//               type="submit" 
//               className="w-full py-4 text-[0.938rem] bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
//             >
//               Login
//             </button>

//             {/* Test Login Buttons */}
//             <div className="text-center space-y-2">
//               <button 
//                 type="button"
//                 onClick={() => handleTestLogin('admin')}
//                 className="w-full py-2 text-[0.938rem] bg-[#dc3545] text-white rounded-lg hover:shadow-lg transition-all"
//               >
//                 Test Admin Login
//               </button>
//               <button 
//                 type="button"
//                 onClick={() => handleTestLogin('user')}
//                 className="w-full py-2 text-[0.938rem] bg-[#28a745] text-white rounded-lg hover:shadow-lg transition-all"
//               >
//                 Test User Login
//               </button>
//             </div>

//             {/* Social Login */}
//             <div className="text-center">
//               <span className="block text-[0.938rem] mb-4">Our login with</span>
//               <div className="flex justify-center space-x-4">
//                 <Link to="#" className="flex items-center justify-center w-8 h-8 bg-[#8590AD] text-white text-[1.25rem] rounded-full hover:bg-[#104382] transition-colors">
//                   <i className='bx bxl-facebook'></i>
//                 </Link>
//                 <Link to="#" className="flex items-center justify-center w-8 h-8 bg-[#8590AD] text-white text-[1.25rem] rounded-full hover:bg-[#104382] transition-colors">
//                   <i className='bx bxl-google'></i>
//                 </Link>
//                 <Link to="#" className="flex items-center justify-center w-8 h-8 bg-[#8590AD] text-white text-[1.25rem] rounded-full hover:bg-[#104382] transition-colors">
//                   <i className='bx bxl-instagram'></i>
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoginForm;







// // for API callimport React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import React, { useState } from 'react';
// import 'boxicons/css/boxicons.min.css';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password
//         })
//       });

//       if (!response.ok) {
//         const data = await response.json();
//         throw new Error(data.error || 'Login failed');
//       }

//       const data = await response.json();
//       const token = data.token;

//       localStorage.setItem('authToken', token);

//       login({
//         role: 'user',
//         name: formData.email,
//         id: `user-${Date.now()}`,
//         email: formData.email,
//         avatar: `https://i.pravatar.cc/150?u=${formData.email}`,
//         isAuthenticated: true,
//         token
//       });

//       navigate('/home');
//     } catch (error) {
//       alert(error.message || 'Invalid email or password');
//       console.error('Login error:', error);
//     }
//   };

//   // const handleTestLogin = (role) => {
//   //   login({
//   //     role,
//   //     name: role === 'admin' ? 'Admin User' : 'Regular User',
//   //     id: `${role}-${Date.now()}`,
//   //     email: `${role}@test.com`,
//   //     avatar: `https://i.pravatar.cc/150?u=${role}-${Date.now()}`,
//   //     isAuthenticated: true
//   //   });
//   //   navigate(role === 'admin' ? '/dashboard' : '/home');
//   // };

//   return (
//     <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
//       {/* Background Bubbles */}
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
//             <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">Welcome</h1>

//             {/* Email Input */}
//             <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-12">
//               <div className="grid grid-cols-[7%_93%] items-center">
//                 <i className='bx bx-envelope text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors'></i>
//                 <div className="relative">
//                   <label
//                   htmlFor="email"
//                   className={`absolute left-3 transition-all duration-200 pointer-events-none
//                   ${formData.email
//                   ? '-top-6 text-[0.875rem] text-[#12192C]'
//                   : 'top-1 text-[0.938rem] text-[#8590AD] group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]'
//                   }`}
//                   >
//                   Email
//                   </label>

//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Password Input */}
//             <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-4">
//               <div className="grid grid-cols-[7%_93%] items-center">
//                 <i className='bx bx-lock text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors'></i>
//                 <div className="relative">
//                   <label
//                   htmlFor="password"
//                   className={`absolute left-3 transition-all duration-200 pointer-events-none
//                   ${formData.password
//                   ? '-top-6 text-[0.875rem] text-[#12192C]'
//                   : 'top-1 text-[0.938rem] text-[#8590AD] group-focus-within:-top-6 group-focus-within:text-[0.875rem] group-focus-within:text-[#12192C]'
//                   }`}
//                   >
//                   Password
//                   </label>

//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* <Link to="#" className="block text-right text-[0.938rem] text-[#8590AD] font-medium hover:text-[#104382] transition-colors">
//               Forgot Password?
//             </Link> */}

//             <button
//               type="submit"
//               className="w-full py-4 text-[0.938rem] bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
//             >
//               Login
//             </button>

//             {/* <div className="text-center space-y-2">
//               <button
//                 type="button"
//                 onClick={() => handleTestLogin('admin')}
//                 className="w-full py-2 text-[0.938rem] bg-[#dc3545] text-white rounded-lg hover:shadow-lg transition-all"
//               >
//                 Test Admin Login
//               </button>
//               <button
//                 type="button"
//                 onClick={() => handleTestLogin('user')}
//                 className="w-full py-2 text-[0.938rem] bg-[#28a745] text-white rounded-lg hover:shadow-lg transition-all"
//               >
//                 Test User Login
//               </button>
//             </div> */}

//             <div className="text-center mt-6">
//               <p className="text-[0.938rem] text-[#8590AD]">
//                 Don’t have an account?{' '}
//                 <Link to="/registration" className="text-[#12192C] font-medium hover:underline">
//                   Register Now
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LoginForm;























import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import 'boxicons/css/boxicons.min.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      const token = data.token;

      localStorage.setItem('authToken', token);

      login({
        role: 'user',
        name: formData.email,
        id: `user-${Date.now()}`,
        email: formData.email,
        avatar: `https://i.pravatar.cc/150?u=${formData.email}`,
        isAuthenticated: true,
        token
      });

      navigate('/home');
    } catch (error) {
      alert(error.message || 'Invalid email or password');
      console.error('Login error:', error);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden font-['Roboto'] text-[#12192C]">
      {/* Background visuals */}
      <div className="absolute w-[200px] h-[200px] rounded-full -top-28 -left-14 md:w-[400px] md:h-[400px] bg-gradient-to-b from-[#12192C] to-transparent" />
      <div className="absolute w-[200px] h-[200px] rounded-full -bottom-24 -right-22 md:w-[300px] md:h-[300px] bg-gradient-to-b from-[#12192C] to-transparent rotate-180" />

      <div className="h-screen grid place-items-center px-4 md:grid-cols-[1.5fr_1fr] md:px-8">
        <img
          src="/assets/images/authentications.svg"
          alt="Login Visual"
          className="hidden md:block md:w-[700px] md:justify-self-center"
        />

        <div className="w-[290px] md:w-[320px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">User Login</h1>

            {/* Email Field */}
            <InputField
              icon="bx-envelope"
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            {/* Password Field */}
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

            <button
              type="submit"
              className="w-full py-4 text-[0.938rem] bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
            >
              Login
            </button>

            <div className="text-center mt-6">
              <p className="text-[0.938rem] text-[#8590AD]">
                Don’t have an account?{' '}
                <Link to="/registration" className="text-[#12192C] font-medium hover:underline">
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ icon, id, label, type, value, onChange, pattern, title }) => (
  <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-6">
    <div className="grid grid-cols-[7%_93%] items-center">
      <i className={`bx ${icon} text-[#8590AD] text-[1.5rem] group-focus-within:text-[#12192C] transition-colors`} />
      <div className="relative">
        <label
          htmlFor={id}
          className={`absolute left-3 transition-all duration-200 pointer-events-none
          ${value
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
          required
          pattern={pattern}
          title={title}
          className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
          autoComplete="off"
        />
      </div>
    </div>
  </div>
);

export default LoginForm;
