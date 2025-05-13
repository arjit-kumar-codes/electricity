import { useState } from "react";
import { FiMenu, FiX, FiPhoneCall } from "react-icons/fi";
// import logo from "../assets/logo.png"; // Replace with your actual logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="shadow-md fixed top-0 w-full z-50 bg-gray-100/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
           <img src={""} alt="Logo" className="h-10 w-auto hidden" />
          <a href="#home" className="text-2xl font-bold text-yellow-600">Light On</a>
        </div>



        {/* Center nav links (desktop) */}
        <ul className="hidden md:flex space-x-6 font-semibold text-sm">
          <li><a href="#home" className="hover:text-yellow-600">HOME</a></li>
          <li><a href="#about" className="hover:text-yellow-600">ABOUT US</a></li>
          <li><a href="#services" className="hover:text-yellow-600">SERVICES</a></li>
          <li><a href="#gallery" className="hover:text-yellow-600">GALLERY</a></li>
          <li><a href="#blog" className="hover:text-yellow-600">BLOG</a></li>
          <li><a href="#contact" className="hover:text-yellow-600">CONTACT US</a></li>
        </ul>

        {/* Contact info (desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          <FiPhoneCall className="text-yellow-600" size={24} />
          <div className="text-sm leading-tight">
            <div>Quick Contact</div>
            <div className="font-bold text-black text-base">+91-7060955045</div>
          </div>
        </div>

        {/* Hamburger menu (mobile) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-yellow-600">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100/10 backdrop-blur-md px-4 pb-4">
          <ul className="space-y-2 font-semibold text-sm">
            <li><a href="#home" onClick={handleLinkClick} className="hover:text-yellow-600">HOME</a></li>
            <li><a href="#about" onClick={handleLinkClick} className="hover:text-yellow-600">ABOUT US</a></li>
            <li><a href="#services" onClick={handleLinkClick} className="hover:text-yellow-600">SERVICES</a></li>
            <li><a href="#gallery" onClick={handleLinkClick} className="hover:text-yellow-600">GALLERY</a></li>
            <li><a href="#blog" onClick={handleLinkClick} className="hover:text-yellow-600">BLOG</a></li>
            <li><a href="#contact" onClick={handleLinkClick} className="hover:text-yellow-600">CONTACT US</a></li>
            <li className="flex items-center space-x-2 pt-2 border-t">
              <FiPhoneCall className="text-yellow-600" size={20} />
              <div className="text-sm">
                <div>Quick Contact</div>
                <div className="font-bold text-black">+91-7060955045</div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
