import React from "react";
import {
  MdElectricalServices,
  MdOutlinePower,
  MdOutlineLightbulb,
  MdOutlineSwitchCamera,
} from "react-icons/md";
import { FaFan, FaRegSnowflake } from "react-icons/fa";

const services = [
  {
    title: "Wiring Installation",
    icon: <MdElectricalServices className="text-6xl md:text-6xl text-yellow-600" />,
    description:
      "Expert residential and commercial wiring with safety, proper load handling, and aesthetic routing.",
  },
  {
    title: "Switch Board Setup",
    icon: <MdOutlineSwitchCamera className="text-6xl md:text-6xl text-yellow-600" />,
    description:
      "Installation and maintenance of modular switchboards with secure circuit design and labeling.",
  },
  {
    title: "AC Point Setup",
    icon: <FaRegSnowflake className="text-6xl md:text-6xl text-yellow-600" />,
    description:
      "Dedicated AC sockets with surge protection, correct MCB rating, and concealed wiring solutions.",
  },
  {
    title: "Lighting Fixtures",
    icon: <MdOutlineLightbulb className="text-6xl md:text-6xl text-yellow-600" />,
    description:
      "Setup of designer lights, spotlights, and LED panels for homes, offices, and commercial spaces.",
  },
  {
    title: "Fan Installation",
    icon: <FaFan className="text-6xl md:text-6xl text-yellow-600" />,
    description:
      "Mounting of ceiling, wall, and exhaust fans with safe fitting, wiring, and noise control.",
  },
  {
    title: "Power Backup Solutions",
    icon: <MdOutlinePower className="text-6xl md:text-6xl text-yellow-600" />,
    description:
      "Reliable inverter and UPS installations with automatic switchovers and safe battery housing.",
  },
];

const Services = () => {
  return (
    <section id="services" className="p-8 bg-gray-50" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-10">
        Our Electrical Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold text-yellow-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
