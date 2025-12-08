import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsBriefcase, BsMortarboard } from "react-icons/bs";

const Experience = () => {
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get("https://mybackend-1mw6.onrender.com/api/experience")
      .then(res => {
        setWork(res.data.filter(item => item.section === "work"));
        setEducation(res.data.filter(item => item.section === "education"));
      });
  }, []);

  return (
    <section className="bg-gray-200 flex justify-center py-24">
      <div className="w-[70%]">

        {/* Heading */}
        <div className="flex flex-col items-center mb-10">
          <div className="border-t-4 border-[#d20458] w-20 mb-4"></div>
          <h2 className="tracking-[4px] text-sm uppercase text-black">
            WORK & EDUCATION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* WORK */}
          <div>
            <TimelineIcon icon={<BsBriefcase size={22} />} />
            {work.map((item, i) => (
              <TimelineCard key={i} year={item.year} title={item.company} role={item.role} desc={item.desc} />
            ))}
          </div>

          {/* EDUCATION */}
          <div>
            <TimelineIcon icon={<BsMortarboard size={22} />} />
            {education.map((item, i) => (
              <TimelineCard key={i} year={item.year} title={item.company} role={item.role} desc={item.desc} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

const TimelineIcon = ({ icon }) => (
  <div className="flex justify-center mb-8">
    <div className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-sm">
      {icon}
    </div>
  </div>
);

const TimelineCard = ({ year, title, role, desc }) => (
  <div className="relative border-l mt-5 border-gray-400 pl-8">
    <span className="absolute -left-[6.5px] top-2 w-3 h-3 bg-black rounded-full"></span>

    <p className="text-xs tracking-widest text-gray-500 uppercase">{year}</p>
    <h3 className="text-xl font-semibold text-gray-900 mt-1">{title}</h3>
    <h5 className="text-sm text-gray-600 mb-3">{role}</h5>
    <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
  </div>
);
