import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get("https://mybackend-1mw6.onrender.com/api/about")
      .then((res) => setAbout(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!about) return <p className="text-center py-20">Loading...</p>;

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* Heading */}
      <div data-aos="fade-up" className="mb-12">
        <div className="border-t-4 border-[#950000] w-20 mb-4"></div>
        <h2 className="tracking-[4px] font-semibold text-sm text-gray-800">
          {about.title}
        </h2>
      </div>

      {/* Two-Column Content */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-800 leading-relaxed"
        data-aos="fade-up"
      >
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <p className="text-xl leading-[1.8] font-light">
            {about.description1}
          </p>

          <p>
            {about.description2}
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <p>
            {about.description3}
          </p>

          <p>
            {about.description4}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        data-aos="fade-up"
      >
        {/* <button className="border border-black py-4 text-sm tracking-[4px] uppercase hover:bg-black hover:text-white transition">
          Hire Me
        </button> */}

        <button className="bg-black text-white py-4 text-sm tracking-[4px] uppercase hover:bg-[#950000] transition">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default About;
