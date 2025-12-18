import React from "react";

const Expertise = () => {

  const services = [
    {
      number: "01.",
      title: "Backend Development",
      desc: "Developing secure, scalable backend systems using Laravel & PHP, REST …"
    },
    {
      number: "02.",
      title: "Frontend Development",
      desc: "Building responsive web interfaces using HTML, CSS, JavaScript, Bootstrap with focus on clean UI/UX and cross-device compatibility."
    },
    {
      number: "03.",
      title: "API Integration",
      desc: "Integrating and managing REST APIs, implementing complex feature-level logic, authentication flows, and third-party services."
    },
    {
      number: "04.",
      title: "Payment Gateway Integration",
      desc: "Experience working with secure transaction flows including Stripe 3DS authentication, payment validation, and webhook handling."
    },
    {
      number: "05.",
      title: "Database Design & Optimization",
      desc: "Structuring databases, optimizing MySQL queries, indexing strategies, performance tuning, and data integrity management."
    },
    {
      number: "06.",
      title: "Full-Stack Development",
      desc: "Working across the full stack using Node.js, Express, Laravel, MySQL along with frontend technologies for scalable applications."
    }
  ];

  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="border-t-4 border-[#d20458] w-20 mx-auto mb-4"></div>
          <h2 className="tracking-[4px] text-sm uppercase text-gray-300">
            Capabilities
          </h2>

          <p className="text-3xl md:text-4xl font-light mt-4 leading-snug">
            My passion and goal is to help you <br /> make your business standout.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-gray-700 pt-16">
          {services.map((service, index) => (
            <div key={index} className="relative p-5">
              <span className="text-5xl text-[#d20458] font-semibold block mb-4">
                {service.number}
              </span>

              <h4 className="text-lg font-semibold mb-2">
                {service.title}
              </h4>

              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>

              {(index + 1) % 3 !== 0 && (
                <span className="hidden lg:block absolute right-0 top-0 h-full border-r border-gray-700"></span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;
