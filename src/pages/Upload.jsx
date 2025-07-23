// import { useState } from "react";
// import { FaUpload, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// export default function Upload() {
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState({ type: "", text: "" });

//   const API = "http://localhost:5000/api/admin/upload-csv";

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setMessage({ type: "", text: "" });
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     setUploading(true);
//     setMessage({ type: "", text: "" });

//     const formData = new FormData();
//     formData.append("csv", file);

//     try {
//       const token = localStorage.getItem("authToken");
//       const res = await fetch(API, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: formData,
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Upload failed");

//       setMessage({ type: "success", text: "CSV uploaded successfully!" });
//       setFile(null);
//     } catch (err) {
//       console.error("CSV upload error:", err);
//       setMessage({ type: "error", text: err.message });
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div
//       className="p-6 min-h-screen
//                  bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200
//                  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
//     >
//       {/* Page title */}
//       <div className="inline-flex items-center gap-3 px-6 py-3 mb-10 rounded-xl shadow-lg
//                       bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white">
//         <FaUpload className="text-2xl" />
//         <h1 className="text-2xl sm:text-3xl font-bold">Upload Vehicle Data (CSV)</h1>
//       </div>

//       {/* Upload card */}
//       <div className="bg-white dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-2xl max-w-xl mx-auto p-8">
//         {/* Drop zone */}
//         <label
//           htmlFor="csv-upload"
//           className="flex flex-col items-center gap-3 border-2 border-dashed border-gray-300 dark:border-gray-600
//                      rounded-xl p-10 cursor-pointer hover:border-blue-500 transition"
//         >
//           <input
//             id="csv-upload"
//             type="file"
//             accept=".csv"
//             onChange={handleFileChange}
//             className="hidden"
//           />
//           <FaUpload className="text-4xl text-blue-600 dark:text-blue-400" />
//           <span className="text-blue-700 dark:text-blue-300 font-medium">
//             {file ? "Change file" : "Click to choose CSV or drag & drop"}
//           </span>
//           {file && (
//             <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
//               Selected: <span className="font-semibold">{file.name}</span>
//             </p>
//           )}
//         </label>

//         {/* Upload button */}
//         <button
//           onClick={handleUpload}
//           disabled={!file || uploading}
//           className="mt-6 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700
//                      text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
//         >
//           {uploading ? (
//             <>
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                   fill="none"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v4l5-5-5-5v4A12 12 0 004 12z"
//                 />
//               </svg>
//               Uploading…
//             </>
//           ) : (
//             <>
//               <FaUpload /> Upload
//             </>
//           )}
//         </button>

//         {/* Message */}
//         {message.text && (
//           <div
//             className={`mt-6 flex items-center gap-2 px-4 py-3 rounded-md text-sm ${
//               message.type === "success"
//                 ? "bg-green-100 text-green-800"
//                 : "bg-red-100 text-red-800"
//             }`}
//           >
//             {message.type === "success" ? (
//               <FaCheckCircle className="text-green-600" />
//             ) : (
//               <FaTimesCircle className="text-red-600" />
//             )}
//             {message.text}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }











import { useState } from "react";
import { FaUpload, FaCheckCircle, FaTimesCircle, FaDownload } from "react-icons/fa";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const API_UPLOAD = "http://localhost:5000/api/admin/upload-csv";
  const API_TEMPLATE = "http://localhost:5000/api/admin/sample-csv-template";

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage({ type: "", text: "" });
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setMessage({ type: "", text: "" });

    const formData = new FormData();
    formData.append("csv", file);

    try {
      const token = localStorage.getItem("authToken");
      const res = await fetch(API_UPLOAD, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      setMessage({ type: "success", text: "CSV uploaded successfully!" });
      setFile(null);
    } catch (err) {
      console.error("CSV upload error:", err);
      setMessage({ type: "error", text: err.message });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="p-6 min-h-screen
                 bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Page title */}
      <div className="inline-flex items-center gap-3 px-6 py-3 mb-10 rounded-xl shadow-lg
                      bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white">
        <FaUpload className="text-2xl" />
        <h1 className="text-2xl sm:text-3xl font-bold">Upload Vehicle Data (CSV)</h1>
      </div>

      {/* Upload card */}
      <div className="bg-white dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-2xl max-w-xl mx-auto p-8">
        {/* Drop zone */}
        <label
          htmlFor="csv-upload"
          className="flex flex-col items-center gap-3 border-2 border-dashed border-gray-300 dark:border-gray-600
                     rounded-xl p-10 cursor-pointer hover:border-blue-500 transition"
        >
          <input
            id="csv-upload"
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="hidden"
          />
          <FaUpload className="text-4xl text-blue-600 dark:text-blue-400" />
          <span className="text-blue-700 dark:text-blue-300 font-medium">
            {file ? "Change file" : "Click to choose CSV or drag & drop"}
          </span>
          {file && (
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              Selected: <span className="font-semibold">{file.name}</span>
            </p>
          )}
        </label>

        {/* Upload button */}
        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className="mt-6 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700
                     text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
        >
          {uploading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l5-5-5-5v4A12 12 0 004 12z"
                />
              </svg>
              Uploading…
            </>
          ) : (
            <>
              <FaUpload /> Upload
            </>
          )}
        </button>

        {/* Download template */}
        <a
          href={API_TEMPLATE}
          className="mt-4 block w-full text-center bg-blue-600 hover:bg-blue-700
                     text-white font-semibold py-2 rounded-lg transition"
          download
        >
          <div className="flex justify-center items-center gap-2">
            <FaDownload /> Download Sample CSV Template
          </div>
        </a>

        {/* Message */}
        {message.text && (
          <div
            className={`mt-6 flex items-center gap-2 px-4 py-3 rounded-md text-sm ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.type === "success" ? (
              <FaCheckCircle className="text-green-600" />
            ) : (
              <FaTimesCircle className="text-red-600" />
            )}
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}
