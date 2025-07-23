import React, { useEffect, useState } from "react";
import axios from "axios";

export default function InspectorSuspiciousList() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem("inspectorToken"); // or whatever key you use
        const res = await axios.get("http://localhost:5000/api/inspector/suspicious-reports", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setReports(res.data);
      } catch (err) {
        console.error("Failed to fetch reports:", err);
      }
    };

    fetchReports();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("inspectorToken");
      const res = await axios.put(
        `http://localhost:5000/api/inspector/suspicious-reports/${id}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setReports((prev) =>
        prev.map((report) =>
          report._id === id ? { ...report, status: res.data.report.status } : report
        )
      );
    } catch (err) {
      console.error(`Failed to ${status.toLowerCase()} report:`, err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        🚓 Suspicious Reports
      </h2>

      <div className="grid gap-6">
        {reports.map((report) => (
          <div
            key={report._id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border-l-4"
          >
            <p className="font-semibold text-lg text-gray-800 dark:text-white">
              {report.fullName} ({report.plateNumber})
            </p>
            <p className="text-gray-600 dark:text-gray-300">{report.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Seen at: {report.locationSeen} on {new Date(report.datetimeSeen).toLocaleString()}
            </p>
            <p
              className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                report.status === "Approved"
                  ? "bg-green-100 text-green-700"
                  : report.status === "Rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              Status: {report.status}
            </p>

            {report.status === "Pending" && (
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => updateStatus(report._id, "Approved")}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(report._id, "Rejected")}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
