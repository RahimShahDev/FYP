import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (alert.text) setAlert({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert({ type: "", text: "" });

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send message");

      setAlert({ type: "success", text: "Your message has been sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setAlert({ type: "error", text: err.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 min-h-screen bg-gradient-to-tr from-indigo-200 via-sky-300 to-rose-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Contact Card ── */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10">
          <div className="flex items-center gap-3 px-5 py-3 mb-6 rounded-xl shadow-lg bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white w-full">
            <FaPaperPlane className="text-xl" />
            <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Have a question, suggestion, or concern? Our team is here to help you with vehicle verification or system‑related support.
          </p>

          {alert.text && (
            <div
              className={`flex items-center gap-2 p-3 mb-6 rounded-lg text-sm ${
                alert.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {alert.type === "success" ? (
                <FaCheckCircle className="text-green-600" />
              ) : (
                <FaTimesCircle className="text-red-600" />
              )}
              {alert.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                  pattern="^[A-Za-z ]+$"
                  title="Full name must contain only alphabets and spaces"
                required
                placeholder="John Doe"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition disabled:opacity-60"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l5-5-5-5v4A12 12 0 004 12z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* ── Illustration ── */}
<div className="w-full flex flex-col gap-6">
  <img
    src="/assets/images/contact-support.svg"
    alt="Contact support illustration"
    className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
  />

  {/* ── Embedded Google Map ── */}
  <iframe
    title="UET Peshawar Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13295.426998130946!2d71.4796386!3d34.0031223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9172ebe9aaad1%3A0x74de395b0ec3efb!2sUniversity%20of%20Engineering%20and%20Technology%2C%20Peshawar!5e0!3m2!1sen!2s!4v1720348772602!5m2!1sen!2s"
    width="100%"
    height="300"
    allowFullScreen=""
    loading="lazy"
    className="rounded-xl border-0 shadow-lg"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </div>
    </section>
  );
}
