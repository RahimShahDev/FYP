import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function DataTable({ data, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-800">
      <table className="min-w-full text-sm text-left text-gray-800 dark:text-gray-100">
        <thead className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white text-xs uppercase sticky top-0 z-10">
          <tr>
            <th className="px-6 py-3 whitespace-nowrap">Plate Number</th>
            <th className="px-6 py-3 whitespace-nowrap">Chassis Number</th>
            <th className="px-6 py-3 whitespace-nowrap">FIR Status</th>
            <th className="px-6 py-3 whitespace-nowrap">Created At</th>
            <th className="px-6 py-3 whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
          {data.map((vehicle) => (
            <tr
              key={vehicle._id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <td className="px-6 py-4 font-medium">{vehicle.plateNumber}</td>
              <td className="px-6 py-4">{vehicle.chassisNumber}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    vehicle.firStatus === "Yes"
                      ? "bg-red-100 text-red-800"
                      : vehicle.firStatus === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {vehicle.firStatus || "No"}
                </span>
              </td>
              <td className="px-6 py-4">
                {vehicle.createdAt
                  ? new Date(vehicle.createdAt).toLocaleDateString()
                  : "-"}
              </td>
              <td className="px-6 py-4 flex gap-4 items-center">
                <button
                  onClick={() => onEdit(vehicle)}
                  className="text-blue-600 hover:text-blue-800 transition"
                  title="Edit"
                >
                  <FiEdit size={16} />
                </button>
                <button
                  onClick={() => onDelete(vehicle._id)}
                  className="text-red-600 hover:text-red-800 transition"
                  title="Delete"
                >
                  <FiTrash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
