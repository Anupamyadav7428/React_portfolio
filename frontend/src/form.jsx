import { useState, useEffect } from "react";

export default function ContactForm({ open = true, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Load saved form data when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("contactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save data locally on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("✅ Form saved locally!");
    setFormData({ name: "", email: "", message: "" }); // reset
    onClose?.();
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed right-0 top-0 h-full w-full sm:w-[400px] z-50 
          bg-gradient-to-b from-blue-50 to-white shadow-2xl border-l 
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full flex flex-col text-black">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <h2 className="text-lg font-semibold">📬 Contact Me</h2>
            <button
              onClick={onClose}
              className="rounded-full px-2 py-1 text-lg hover:bg-white/20 transition"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 px-5 py-6 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full rounded-xl border px-4 py-2 outline-none border-blue-300
                  focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border px-4 py-2 outline-none border-blue-300
                  focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                placeholder="Write your message here..."
                className="w-full rounded-xl border px-4 py-2 outline-none border-blue-300
                  focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 
                  hover:from-blue-700 hover:to-indigo-700 
                  text-white px-4 py-2 rounded-xl shadow-lg transition"
              >
                ✈ Send Message
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="px-5 py-4 border-t text-xs text-gray-500 text-center">
            I will get back to you soon! 🚀
          </div>
        </div>
      </aside>
    </>
  );
}
