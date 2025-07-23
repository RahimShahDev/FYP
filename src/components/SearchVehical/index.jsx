import React, { useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

const VehicleInfoForm = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!vehicleNumber.trim() || !chassisNumber.trim()) {
      alert("Both Vehicle Number and Chassis Number are required");
      return;
    }

    setIsLoading(true);
    setSearchResult(null);
    setNotFound(false);

    try {
      const response = await fetch("http://localhost:5000/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plateNumber: vehicleNumber,
          chassisNumber: chassisNumber,
        }),
      });

      const result = await response.json();
      setIsLoading(false);

      if (response.ok && result.found) {
        setSearchResult(result.data);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Search failed:", error);
      alert("Something went wrong while searching.");
    }
  };

  const handleImageError = () => setImageError(true);
  const closeResult = () => {
    setSearchResult(null);
    setNotFound(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 flex flex-col items-center p-4 relative">
      <div className="w-full mb-8">
        <div className="w-full flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white">
          <FaPaperPlane className="text-2xl" />
          <h2 className="text-2xl font-bold tracking-tight">Vehicle FIR Verification</h2>
        </div>
      </div>

      {(searchResult || notFound) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full relative pt-6 px-4 sm:px-4 pb-2">
            <button onClick={closeResult} className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-gray-400 hover:text-gray-700 transition duration-200" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {searchResult && (
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    FIR Record Found
                  </h2>
                  <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">Verified</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Info label="Plate Number" value={searchResult.plateNumber} />
                  <Info label="Chassis Number" value={searchResult.chassisNumber} />
                  <Info label="FIR Status" value={searchResult.firStatus} color={searchResult.firStatus === "Clear" ? "text-green-600" : "text-red-600"} />
                  <Info label="FIR Details" value={searchResult.firDetails || "No details provided"} isLong />
                </div>
                <p className="mt-6 text-sm text-center text-gray-500">
                  ✅ This record has been securely retrieved from our database.
                </p>
              </div>
            )}

            {notFound && (
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <svg className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Record Found</h3>
                <p className="text-gray-600 mb-6">No matching vehicle record found for the provided details.</p>
                <button onClick={closeResult} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Try Again</button>
              </div>
            )}
          </div>
        </div>
      )}

      <div ref={formRef} className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden transition-all hover:scale-[1.01] duration-300">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">Vehicle FIR Verification</h1>
          <p className="text-blue-200 mb-6">Verify your vehicle's FIR status with our secure online system.</p>

          <h2 className="text-xl font-semibold mb-2">Try example plate formats:</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["LXZ 123", "LXZ 0123", "LXZ 1111", "LXZ-07-1111"].map((plate, idx) => (
              <span key={idx} className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full cursor-pointer shadow transition" onClick={() => setVehicleNumber(plate)}>
                {plate}
              </span>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
                placeholder="PLATE NUMBER*"
                required
                className="w-full p-3 rounded-lg outline-none text-gray-800 placeholder-gray-500 font-medium border-2 border-transparent focus:border-yellow-400 transition"
              />
              <p className="text-xs text-blue-200 mt-1">Format: ABC 1234 or ABC-12-1234</p>
            </div>
            <div>
              <input
                type="text"
                value={chassisNumber}
                onChange={(e) => setChassisNumber(e.target.value)}
                placeholder="CHASSIS NUMBER*"
                required
                pattern="^[A-HJ-NPR-Z0-9]{17}$"
                title="Chassis number must be exactly 17 characters using capital letters and numbers only (excluding I, O, Q)"
                className="w-full p-3 rounded-lg outline-none text-gray-800 placeholder-gray-500 font-medium border-2 border-transparent focus:border-yellow-400 transition"
              />
              <p className="text-xs text-blue-200 mt-1">17-character chassis number</p>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-black font-semibold transition ${
                isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600 shadow-md"
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4zm2 5.3A8 8 0 014 12H0c0 3.1 1.1 5.8 3 7.9l3-2.6z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.9 3.5l4.8 4.8a1 1 0 01-1.4 1.4l-4.8-4.8A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  Verify FIR Status
                </>
              )}
            </button>
          </form>

          <p className="mt-4 text-sm text-blue-200">
            <span className="font-bold text-yellow-300">Note:</span> Both fields are mandatory for FIR verification.
          </p>
        </div>

        <div className="md:w-1/2 bg-white flex flex-col justify-center items-center p-6">
          {!imageError ? (
            <img
              src="/assets/images/ServicePage02.avif"
              alt="FIR Verification"
              className="w-full h-auto max-h-96 object-contain"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 10h.01M15 10h.01M9.2 16.2a4 4 0 015.6 0" />
                </svg>
                <p className="mt-2 text-gray-500">Image unavailable</p>
              </div>
            </div>
          )}
          <h3 className="mt-4 text-xl font-bold text-gray-800">Secure FIR Lookup</h3>
          <p className="text-gray-600 mt-2 text-center">Instantly check if any FIR is associated with your vehicle.</p>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value, color = "text-gray-800", isLong = false }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className={`text-${isLong ? "base" : "lg"} font-semibold ${color}`}>{value}</p>
  </div>
);

export default VehicleInfoForm;