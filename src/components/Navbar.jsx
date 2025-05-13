import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handles closing the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-yellow-50 shadow-md py-4 px-6 fixed top-0 right-0 w-full z-50">
      <div className="flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-yellow-600">Light On</a>

        {/* Toggle button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-yellow-600 focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop links */}
        <div className="space-x-4 hidden md:flex">
          <a href="#about" className="hover:text-yellow-600">About</a>
          <a href="#services" className="hover:text-yellow-600">Services</a>
          <a href="#gallery" className="hover:text-yellow-600">Gallery</a>
          <a href="#testimonials" className="hover:text-yellow-600">Testimonials</a>
          <a href="#contact" className="hover:text-yellow-600">Contact</a>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mt-4 space-y-2 md:hidden flex flex-col">
          <a href="#about" onClick={handleLinkClick} className="hover:text-yellow-600">About</a>
          <a href="#services" onClick={handleLinkClick} className="hover:text-yellow-600">Services</a>
          <a href="#gallery" onClick={handleLinkClick} className="hover:text-yellow-600">Gallery</a>
          <a href="#testimonials" onClick={handleLinkClick} className="hover:text-yellow-600">Testimonials</a>
          <a href="#contact" onClick={handleLinkClick} className="hover:text-yellow-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
