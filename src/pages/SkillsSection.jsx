import React from "react";
import img from "../assets/darkimage.avif";

const SkillsSection = () => {

  const skillData = {
    title: "SKILLS",
    skills: [
      "Laravel, PHP",
      "REST API Integration",
      "HTML, CSS, JavaScript",
      "MySQL",
      "Bootstrap, jQuery, Responsive UI/UX"
    ]
  };

  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="border-t-4 border-[#d20458] w-20 mx-auto my-5"></div>

      <h2 className="tracking-[4px] text-sm uppercase text-white text-center mb-10">
        {skillData.title}
      </h2>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillData.skills.map((skill, index) => (
          <div
            key={index}
            className="px-8 py-6 bg-white/20 backdrop-blur-md rounded-lg text-center border border-white/30 shadow-lg"
          >
            <p className="text-white text-lg tracking-wide font-medium">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
