// // src/utils/api.js
// export const BASE_URL = "http://localhost:5000";

// /** Read JWT saved inside the user object in localStorage */
// function getToken() {
//   try {
//     const stored = JSON.parse(localStorage.getItem("user"));
//     return stored?.token || null;
//   } catch {
//     return null;
//   }
// }

// export async function api(path, opts = {}) {
//   const token = getToken();
//   const headers = {
//     ...(opts.headers || {}),
//     ...(token ? { Authorization: `Bearer ${token}` } : {}),
//   };

//   const res = await fetch(`${BASE_URL}${path}`, { ...opts, headers });

//   const data = await res.json();

//   if (!res.ok) {
//     console.error(`❌ API Error on ${path}:`, data.error || res.statusText);
//     // 👇 Just throw without redirecting
//     throw new Error(data.error || "Request failed");
//   }

//   return data;
// }
