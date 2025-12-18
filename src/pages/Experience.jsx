import React from "react";
import { BsBriefcase, BsMortarboard } from "react-icons/bs";

const Experience = () => {

  const work = [
    {
      year: "June 2025 — Present",
      company: "S.R Infotech Solution",
      role: "Laravel Developer",
      desc: "Developing backend features and business logic using Laravel & PHP. Integrating and managing complex REST APIs, optimizing MySQL performance, collaborating with UI/UX teams, handling deployment, debugging, and version control using Git."
    },
    {
      year: "Oct 2024 — Apr 2025",
      company: "Softonix MR Technologies Pvt. Ltd.",
      role: "Laravel Developer",
      desc: "Developed scalable Laravel applications, integrated APIs including Stripe 3DS authentication, managed relational database design, collaborated with frontend and API integration teams, optimized performance, and improved security."
    },
    {
      year: "Jun 2023 — Feb 2024",
      company: "Kodnest — Trainee Software Engineer",
      role: "Full Stack Developer",
      desc: "Developed backend systems with Java, Node.js, Express.js, and MySQL; built responsive UI with HTML, CSS, JavaScript, jQuery, Bootstrap; integrated APIs and built Twilio-based features."
    },
    {
      year: "Jan 2023 — Feb 2023",
      company: "Adityapur Auto Cluster",
      role: "PHP Full Stack Developer Trainee",
      desc: "Built an online e-learning portal using PHP, MySQL, Bootstrap, and implemented UI/UX and authentication system."
    }
  ];

  const education = [
    {
      year: "Jan 2024 — Present",
      company: "Jain University, Bangalore",
      role: "Master of Computer Applications (Full Stack Development)",
      desc: "Currently pursuing MCA with focus on full-stack development, backend engineering, and scalable web applications."
    },
    {
      year: "2020 — 2023",
      company: "Arka Jain University, Jharkhand",
      role: "Bachelor of Computer Application",
      desc: "Graduated with 80.18% and gained strong foundation in programming, database management, and software development."
    }
  ];

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
              <TimelineCard
                key={i}
                year={item.year}
                title={item.company}
                role={item.role}
                desc={item.desc}
              />
            ))}
          </div>

          {/* EDUCATION */}
          <div>
            <TimelineIcon icon={<BsMortarboard size={22} />} />
            {education.map((item, i) => (
              <TimelineCard
                key={i}
                year={item.year}
                title={item.company}
                role={item.role}
                desc={item.desc}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;

/* ---------- Components ---------- */

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
