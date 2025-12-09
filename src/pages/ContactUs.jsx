import React, { useState } from "react";
import axios from "axios";
import { FaFacebookF, FaDribbble, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", text: "Please fill all fields." });
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("https://mybackend-1mw6.onrender.com/api/contact", form);
      setStatus({ type: "success", text: res.data.message });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: "Failed to send message." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#1f2a3b] py-20 px-4">
      <div className="max-w-6xl mx-auto relative z-[2]">

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">

          <div className="flex flex-col lg:flex-row gap-14">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-[32px] font-semibold text-[#132238]">
                Let’s discuss your Project
              </h2>
              <p className="text-gray-600">
                I'm available for freelance work. Feel free to contact me anytime.
              </p>

              <div className="space-y-4">
                <InfoBox icon="email" label="Email" value="rohit15p3@gmail.com" />
                <InfoBox icon="phone" label="Phone" value="+91 9304322191" />
              </div>

             <div className="flex items-center gap-4 pt-3">
              <SocialIcon
                icon={<FaLinkedinIn />}
                link="https://www.linkedin.com/in/rohit-prasad-439316200"
              />
              <SocialIcon
                icon={
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.6c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.64 7.64 0 012 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.49 0 1.08-.01 1.94-.01 2.21 0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                }
                link="https://github.com/RohitPrasad1234"
              />
            </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <div className="w-full lg:w-1/2 space-y-4">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <LineInput
                  placeholder="Name*"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />

                <LineInput
                  placeholder="Email*"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  placeholder="Message*"
                  value={form.message}
                  onChange={handleChange}
                  className="border-b border-gray-300 focus:border-[#9b4dff] outline-none p-2 min-h-[120px]"
                />

                {status && (
                  <div
                    className={`text-sm p-2 rounded ${
                      status.type === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {status.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#9b4dff] text-white px-6 py-3 rounded-md hover:bg-[#7c2fff] transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;


/* 🔹 Reusable Components */
const LineInput = ({ name, value, onChange, placeholder }) => (
  <input
    className="border-b border-gray-300 focus:border-[#9b4dff] outline-none p-2"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

/* 🔹 UPDATED — Click Email / Call Phone */
const InfoBox = ({ icon, label, value }) => {
  const href = icon === "email" ? `mailto:${value}` : `tel:${value}`;

  return (
    <a
      href={href}
      className="flex items-center gap-4 bg-white shadow p-4 rounded-md hover:shadow-lg transition"
    >
      <div className="text-[#9b4dff] text-2xl">
        {icon === "email" ? "✉️" : "📞"}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-[#132238] text-base font-medium underline">
          {value}
        </p>
      </div>
    </a>
  );
};

const SocialIcon = ({ icon }) => (
  <div className="p-3 rounded-md text-[#9b4dff] hover:bg-[#9b4dff] hover:text-white transition">
    {icon}
  </div>
);
