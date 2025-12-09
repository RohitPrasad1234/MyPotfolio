import React, { useState } from "react";
import axios from "axios";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

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
      const res = await axios.post(
        "https://mybackend-1mw6.onrender.com/api/contact",
        form
      );
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

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-4 pt-3">
                <SocialIcon
                  icon={<FaLinkedinIn />}
                  link="https://www.linkedin.com/in/rohit-prasad-439316200"
                />
                <SocialIcon
                  icon={<FaGithub />}
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

/* 🔹 Click Email (mailto) / Phone (tel) */
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

/* 🔹 Social Icons (Open in new tab) */
const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-md text-[#9b4dff] hover:bg-[#9b4dff] hover:text-white transition cursor-pointer"
  >
    {icon}
  </a>
);
