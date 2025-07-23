// src/pages/unauthorized.jsx

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Unauthorized</h1>
        <p className="text-gray-600">You don’t have access to this page.</p>
      </div>
    </div>
  );
};

export default Unauthorized; // ✅ Add this line
