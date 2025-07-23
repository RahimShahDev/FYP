import { useState, useEffect } from "react";
import DataTable from "../components/DataTable";
import {
  FiPlus,
  FiX,
  FiCheck,
  FiAlertCircle,
  FiSearch,
} from "react-icons/fi";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    plateNumber: "",
    chassisNumber: "",
    firStatus: "No",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:5000/api/admin";

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await fetch(`${API}/vehicles`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setVehicles(data);
    } catch (err) {
      console.error("Error fetching vehicles:", err);
    }
  };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!newVehicle.plateNumber.trim())
  //     newErrors.plateNumber = "Plate number is required";
  //   if (!newVehicle.chassisNumber.trim())
  //     newErrors.chassisNumber = "Chassis number is required";
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };
  const validateForm = () => {
  const newErrors = {};
  const platePattern = /^[A-Z]{3}[- ]?(?:[0-9]{1,4}|[0-9]{2}[- ]?[0-9]{1,4})$/;
  const chassisPattern = /^[A-HJ-NPR-Z0-9]{17}$/;

  if (!newVehicle.plateNumber.trim()) {
    newErrors.plateNumber = "Plate number is required";
  } else if (!platePattern.test(newVehicle.plateNumber)) {
    newErrors.plateNumber = "Invalid plate number format";
  }

  if (!newVehicle.chassisNumber.trim()) {
    newErrors.chassisNumber = "Chassis number is required";
  } else if (!chassisPattern.test(newVehicle.chassisNumber)) {
    newErrors.chassisNumber = "Invalid chassis number format";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("authToken");
      let firDetails = null;
      if (newVehicle.firStatus === "Yes") {
        firDetails = "FIR registered";
      } else if (newVehicle.firStatus === "Pending") {
        firDetails = "FIR pending";
      }

      const res = await fetch(
        `${API}/${editId ? `vehicle/${editId}` : "add"}`,
        {
          method: editId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            plateNumber: newVehicle.plateNumber,
            chassisNumber: newVehicle.chassisNumber,
            firStatus: newVehicle.firStatus,
            firDetails,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save vehicle");

      setSuccessMessage(
        editId ? "Vehicle updated successfully!" : "Vehicle added successfully!"
      );
      setNewVehicle({ plateNumber: "", chassisNumber: "", firStatus: "No" });
      setEditId(null);
      fetchVehicles();
      setTimeout(() => {
        setIsModalOpen(false);
        setSuccessMessage("");
      }, 2000);
    } catch (err) {
      console.error("Error saving vehicle:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (vehicle) => {
    setEditId(vehicle._id);
    setNewVehicle({
      plateNumber: vehicle.plateNumber,
      chassisNumber: vehicle.chassisNumber,
      firStatus: vehicle.firStatus || "No",
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this vehicle?")) return;
    try {
      const token = localStorage.getItem("authToken");
      await fetch(`${API}/vehicle/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchVehicles();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const filteredVehicles = vehicles.filter((v) => {
    const q = searchQuery.toLowerCase();
    return (
      v.plateNumber?.toLowerCase().includes(q) ||
      v.chassisNumber?.toLowerCase().includes(q) ||
      (v.firStatus || '').toLowerCase().includes(q)
    );
  });

  return (
    <div className="px-4 py-6 sm:p-6 min-h-screen bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Vehicle Records</h1>
          <button
            onClick={() => {
              setNewVehicle({ plateNumber: "", chassisNumber: "", firStatus: "No" });
              setEditId(null);
              setIsModalOpen(true);
            }}
            className="flex gap-2 items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md"
          >
            <FiPlus /> Add Vehicle
          </button>
        </div>

        <div className="mb-4">
          <div className="relative max-w-md">
            <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by plate, chassis, or FIR..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm"
            />
          </div>
        </div>

        {successMessage && (
          <div className="bg-green-100 text-green-800 p-3 rounded-lg mb-4 flex gap-2 items-center">
            <FiCheck /> {successMessage}
          </div>
        )}

        <DataTable data={filteredVehicles} onEdit={handleEdit} onDelete={handleDelete} noValidate={false} onSubmit={handleSubmit}/>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-xl">
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  {editId ? "Edit Vehicle" : "Add Vehicle"}
                </h2>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                >
                  <FiX />
                </button>
              </div>

              <div>
                <label className="block mb-1 font-medium">Plate Number</label>
                <input
                  type="text"
                  name="plateNumber"
                  value={newVehicle.plateNumber}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  pattern="^[A-Z]{3}[- ]?(?:[0-9]{1,4}|[0-9]{2}[- ]?[0-9]{1,4})$"
                  title="Plate number must be like ABC 1234 or ABC-12-1234"
   
                  className="w-full p-2 border rounded shadow-sm"
                />
                {errors.plateNumber && (
                  <p className="text-sm text-red-500 flex gap-1 items-center mt-1">
                    <FiAlertCircle /> {errors.plateNumber}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Chassis Number</label>
                <input
                  name="chassisNumber"
                  value={newVehicle.chassisNumber}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  pattern="^[A-HJ-NPR-Z0-9]{17}$"
                  title="Chassis number must be exactly 17 characters using capital letters and numbers only (excluding I, O, Q)"

                  className="w-full p-2 border rounded shadow-sm"
                />
                {errors.chassisNumber && (
                  <p className="text-sm text-red-500 flex gap-1 items-center mt-1">
                    <FiAlertCircle /> {errors.chassisNumber}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">FIR Status</label>
                <select
                  name="firStatus"
                  value={newVehicle.firStatus}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full p-2 border rounded shadow-sm"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 shadow"
              >
                {isSubmitting ? "Saving..." : editId ? "Update" : "Add"} Vehicle
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
