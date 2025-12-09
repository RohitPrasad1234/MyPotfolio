import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1f2a3b] relative -mt-40">
      <div className="pt-20 md:pt-40 px-4">

        {/* TOP SECTION */}
       <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center w-full gap-6">


          {/* LOGO */}
          {/* <a href="#home" className="flex items-center">
            <p className="text-3xl sm:text-[32px] ms-3 font-semibold">
              MyProject.
            </p>
          </a> */}

          {/* NAVIGATION LINKS */}
          <div className="mx-7 my-7 md:my-10 lg:my-0 text-center">
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Experience", link: "#experience" },
              { name: "Services", link: "#expertise" },
              { name: "Projects", link: "#work" },
              { name: "Contact", link: "#contactus" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>

          {/* COPYRIGHT */}
          {/* <p className="text-[12px] sm:text-[16px]">
            Copyright © 2025 MyProject.
          </p> */}
        </div>

        {/* SPACING */}
        <p className="text-white text-center text-[12px] md:text-[14px] w-full py-10">
          {/* Footer Credit (optional) */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
