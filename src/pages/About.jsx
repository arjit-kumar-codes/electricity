import React from "react";
import aboutImg from "../assets/landingBG.jpg"; // Replace with your image path

const About = () => {
  return (
    <section id="about" className="bg-gray-50 p-8 md:px-10" data-aos="fade-up">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">
            About Light On
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Welcome to <strong>Light On</strong> — your trusted partner for professional
            electrical fitting services across India. With over a decade of experience,
            we specialize in providing safe, efficient, and modern electrical solutions
            for homes, offices, and commercial spaces.
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Our certified technicians are trained in the latest standards and equipped
            with modern tools to ensure hassle-free installations and repairs. From
            wiring and switchboards to lighting, AC points, and power backups —
            we handle it all with precision and care.
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Currently serving <strong>30+ cities</strong> across India, our services are
            delivered with punctuality, transparency, and 100% customer satisfaction.
            Whether it's a new setup or a repair job, we focus on safety, hygiene, and
            long-lasting performance.
          </p>
          <p className="text-gray-700 text-base md:text-lg">
            Choose Light On for <strong>verified professionals</strong>,
            <strong>eco-conscious solutions</strong>, and a <strong>commitment to quality</strong>—
            because when it comes to electricity, there should be no compromise.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="Professional electrician working"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
