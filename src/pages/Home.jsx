import React from "react";
import backgroundImage from "../assets/landingBG.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      {/* Main Content */}
      <div className="z-10 px-4 w-full max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-600">
          Power Up Your Space with Expert Electrical Services
        </h1>

        {/* Contact Form Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl mt-8 w-full text-left text-black">
          <h2 className="text-xl font-bold mb-4 text-yellow-600">Request an Estimate</h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded border border-black placeholder-black"
            />
            <input
              type="tel"
              placeholder="Contact Phone No."
              className="p-3 rounded border border-black placeholder-black"
            />
            <select className="p-3 rounded border border-black text-black">
              <option>Select Your Service</option>
              <option>Wiring Installation</option>
              <option>Switch Board Setup</option>
              <option>AC Point Setup</option>
              <option>Lighting Fixtures</option>
              <option>Fan Installation</option>
              <option>Power Backup Solutions</option>
            </select>
          </form>

          <button
            type="submit"
            className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 mt-6 rounded-lg flex items-center justify-center gap-2"
          >
            Submit Now
            <span className="text-xl">&#x27A4;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
