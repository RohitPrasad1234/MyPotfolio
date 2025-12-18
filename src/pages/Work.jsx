import React from "react";

const Work = () => {

  const projects = [
    {
      title: "Backend API Integration for JohnsonHolidays Travel Platform",
      subtitle: "Laravel • REST API • Travel Booking Backend (In Progress)",
      desc: "Developing a full fledged Laravel backend and integrating REST APIs for flights, hotels, holiday packages, and complete booking workflows for the JohnsonHolidays travel platform (api.johnsonholidays.com). The project includes secure booking endpoints, dynamic hotel and destination data modules, and upcoming payment gateway implementation.",
      image: "https://mypotfolio-8kns.onrender.com/projects/1img.png",
      website: "https://api.johnsonholidays.com/"
    },
    {
      title: "LowCostCruises – Travel Booking Platform Backend & API",
      subtitle: "Laravel • REST API • Multi-Role Backend",
      desc: "Built a complete backend and REST API for LowCostCruises with multi-role access (admin, customer, agent), booking management, cruise listings, and dynamic database mapping. Implemented secure backend logic with scalable architecture.",
      image: "https://mypotfolio-8kns.onrender.com/projects/2img.png",
      website: "https://lowcostcruises.co.uk/"
    },
    {
      title: "Booking Genie – Responsive Dynamic Booking Website",
      subtitle: "Laravel • HTML/CSS/JS/Bootstrap • Full Stack",
      desc: "Developed the entire Booking Genie platform with a dynamic and responsive front-end UI and full Laravel backend. Implemented end-to-end booking workflows, content management, and user dashboard features.",
      image: "https://mypotfolio-8kns.onrender.com/projects/3img.png",
      website: "https://bookingenie.com/"
    },
    {
      title: "ExpressCourierCars – Location Autocomplete & Booking System",
      subtitle: "Laravel • Google API • GetAddress API • Frontend + Backend",
      desc: "Integrated Google API and GetAddress API for real-time location autocomplete and coordinates mapping. Built complete frontend and backend for courier-car bookings with seamless location-based functionality.",
      image: "https://mypotfolio-8kns.onrender.com/projects/4img.png",
      website: "https://expresscouriercars.co.uk/"
    },
    {
      title: "Miffy’s Mansion – Complete Responsive Website",
      subtitle: "Laravel • HTML/CSS/JS/Bootstrap • Frontend + Backend",
      desc: "Developed both frontend and backend for Miffy’s Mansion with a clean professional design and fully responsive layout across all devices. Implemented dynamic content management and optimized UX performance.",
      image: "https://mypotfolio-8kns.onrender.com/projects/6img.png",
      website: "https://miffysmansion.com/"
    }
  ];

  return (
    <div className="border w-full h-auto bg-[#FBF8EEFF]">

      <div className="my-10">
        <div className="border-t-4 border-[#d20458] w-20 mx-auto my-2"></div>
        <h2 className="tracking-[4px] text-sm uppercase text-black text-center">
          Projects
        </h2>
      </div>

      {projects.map((item, i) => (
        <a
          key={i}
          href={item.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="mt-5 md:w-[calc(100%-40%)] mx-auto bg-white rounded-xs shadow border grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10 cursor-pointer hover:shadow-xl transition">
            
            {/* IMAGE */}
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* TEXT */}
            <div className="mt-5">
              <div className="border-l-8 text-blue-900">
                <h3 className="text-xl font-bold mt-3 ml-5">
                  {item.title}
                </h3>
                <p className="ml-5 font-bold text-black text-xs">
                  {item.subtitle}
                </p>
              </div>

              <div className="px-5 my-5">
                <p className="font-thin">{item.desc}</p>
              </div>
            </div>
          </div>
        </a>
      ))}

    </div>
  );
};

export default Work;
