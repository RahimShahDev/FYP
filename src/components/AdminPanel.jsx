// src/components/AdminPanel.jsx
import { useAuth } from '../context/AuthContext';

const AdminPanel = () => {
  const { user } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, {user?.name} (Admin)</p>
      <div className="mt-4">
        <p>This is the admin-only area.</p>
        <p>Here you would put admin-specific functionality.</p>
      </div>
    </div>
  );
};

export default AdminPanel;