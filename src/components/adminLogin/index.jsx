// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import 'boxicons/css/boxicons.min.css';

// const AdminLoginForm = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/admin/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Login failed');
//       }

//       const token = data.token;
//       const admin = data.admin;

//       localStorage.setItem('authToken', token);

//       login({
//         role: 'admin',
//         name: admin.username,
//         id: admin._id,
//         email: admin.email,
//         avatar: `https://i.pravatar.cc/150?u=${admin._id}`,
//         isAuthenticated: true,
//         token
//       });

//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message || 'Something went wrong during login');
//       console.error('Admin login error:', error);
//     }
//   };

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
//             <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">Admin Login</h1>

//             <InputField
//               icon="bx-envelope"
//               id="email"
//               label="Email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//             />

//             <InputField
//               icon="bx-lock-alt"
//               id="password"
//               label="Password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//             />

//             {/* <Link
//               to="#"
//               className="block text-right text-[0.938rem] text-[#8590AD] font-medium hover:text-[#104382] transition-colors"
//             >
//               Forgot Password?
//             </Link> */}

//             <button
//               type="submit"
//               className="w-full py-4 bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
//             >
//               Login as Admin
//             </button>
//             <div className="text-center mt-6">
//               <p className="text-[0.938rem] text-[#8590AD]">
//               Don’t have an account?{' '}
//               <Link to="/admin-registration" className="text-[0.938rem] text-[#12192C] font-medium hover:underline">
//               Register Now
//               </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// const InputField = ({ icon, id, label, type, value, onChange }) => (
//   <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-6">
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
//           required
//           className="w-full py-2 px-3 text-[1.2rem] text-[#12192C] bg-transparent outline-none"
//         />
//       </div>
//     </div>
//   </div>
// );


// export default AdminLoginForm;



















import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import 'boxicons/css/boxicons.min.css';

const AdminLoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      const token = data.token;
      const admin = data.admin;

      localStorage.setItem('authToken', token);

      login({
        role: 'admin',
        name: admin.username,
        id: admin._id,
        email: admin.email,
        avatar: `https://i.pravatar.cc/150?u=${admin._id}`,
        isAuthenticated: true,
        token
      });

      navigate('/dashboard');
    } catch (error) {
      alert(error.message || 'Something went wrong during login');
      console.error('Admin login error:', error);
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
            <h1 className="text-[2rem] font-medium mb-8 md:text-[2.5rem]">Admin Login</h1>

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
              icon="bx-lock-alt"
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              pattern="^[A-Za-z0-9]{6,}$"
              title="Password must be at least 6 characters and contain only letters or numbers"
            />

            <button
              type="submit"
              className="w-full py-4 bg-[#104382] text-white rounded-lg hover:shadow-lg transition-all"
            >
              Login as Admin
            </button>

            <div className="text-center mt-6">
              <p className="text-[0.938rem] text-[#8590AD]">
                Don’t have an account?{' '}
                <Link to="/admin-registration" className="text-[0.938rem] text-[#12192C] font-medium hover:underline">
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

const InputField = ({
  icon,
  id,
  label,
  type,
  value,
  onChange,
  pattern,
  title
}) => (
  <div className="relative pb-1 border-b border-[#8590AD] group focus-within:border-[#12192C] mb-6">
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

export default AdminLoginForm;
