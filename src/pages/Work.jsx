import React, { useEffect, useState } from "react";
import axios from "axios";

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://mybackend-1mw6.onrender.com/api/project")
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  const openProject = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="border  px-4 w-full h-auto bg-[#FBF8EEFF]">

      <div className="my-10">
        <div className="border-t-4 border-[#d20458] w-20 mx-auto my-2"></div>
        <h2 className="tracking-[4px] text-sm uppercase text-black text-center">
          Projects
        </h2>
      </div>

      {projects.map((item, i) => (
        <div
          key={i}
          onClick={() => openProject(item.website)}   // <-- use website field
          className="
            cursor-pointer
            mt-5 md:w-[calc(100%-40%)] mx-auto bg-white rounded-xs shadow border 
            grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10
            transition transform hover:shadow-xl hover:-translate-y-1
          "
        >
          {/* IMAGE */}
          <div className="h-[354px] md:h-64 lg:h-72 bg-cover bg-center" style={{ backgroundImage: `url(${item.image || ""})` }}></div>


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

            {/* BUTTON (works separately without double trigger) */}
            <div className="px-5 mb-5">
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-white bg-[#d20458] px-4 py-2 rounded hover:bg-pink-700 transition"
                >
                  Visit Project 🔗
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Work;
