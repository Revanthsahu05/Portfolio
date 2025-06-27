import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false); 
  
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); 

    try {
      const API = import.meta.env.VITE_BACKEND_URL || "/api"; 

      const res=await axios.post(`${API}/contact`, {
        name: formData.name,
        email: formData.email,
        contactnumber: formData.contactNumber,
        message: formData.message,
      });
      if (res.data.success) {
        toast.success(" Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          message: "",
        });
      } else {
        toast.error(" Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error(" An error occurred. Please try again.");
    } finally {
      setIsSending(false); 
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 w-full max-w-md space-y-4"
      >
        <input
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Your Email"
          type="email"
          className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="contactNumber"
          placeholder="Your Contact Number"
          type="tel"
          className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700 transition flex justify-center items-center"
          disabled={isSending}
        >
          {isSending ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send"
          )}
        </button>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </section>
  );
}
