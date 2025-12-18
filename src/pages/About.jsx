import React from "react";

const About = () => {
  const about = {
    title: "ABOUT ME",
    description1:
      "I am a Full Stack Developer currently pursuing my Master of Computer Applications (MCA) with a specialization in Full Stack Development. I specialize in backend engineering using Laravel and PHP, and have strong experience in building secure, scalable REST APIs, database architecture, and performance optimization. I enjoy solving complex backend problems and collaborating with teams to build user-friendly web applications.",
    description2:
      "Over the years, I have worked with multiple organizations where I contributed to designing robust backend modules, integrating APIs and payment gateways, and managing complete deployment pipelines. My work includes improving performance, enhancing security, and delivering production-level projects under tight deadlines. I strongly focus on writing clean, maintainable code and following best practices in software development.",
    description3:
      "I also have hands-on experience in frontend development using HTML, CSS, JavaScript, jQuery, and Bootstrap. I frequently interact with UI/UX teams to ensure smooth integration between frontend and backend systems. My experience includes working on authentication systems, role-based modules, database structuring, and Git-based version control workflows.",
    description4:
      "With professional experience as both a Full Stack Developer and Trainee Developer, I have built applications involving MySQL, PHP, Laravel, Stripe 3DS authentication, API integration, and system automation. I am committed to continuous learning, improving my technical skills, and contributing effectively to modern web application development.",
    cv: "/Rohit_Prasad_CV.pdf",
  };

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
          <p>{about.description2}</p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <p>{about.description3}</p>
          <p>{about.description4}</p>
        </div>
      </div>

      {/* Button */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16" data-aos="fade-up">
        <a
          href={about.cv}
          download
          className="bg-black text-white py-4 text-sm tracking-[4px] uppercase text-center hover:bg-[#950000] transition"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
