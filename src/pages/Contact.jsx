import React from "react";
import { FiUser, FiMail, FiPhoneCall, FiSend } from "react-icons/fi";
import { BsGeoAlt } from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="p-8 bg-gray-50" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-8 text-justify">
                Feel free to place your order
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="space-y-4">
                    <form className="space-y-4">
                        <div className="flex items-center gap-2 border p-3 rounded">
                            <FiUser className="text-yellow-600" />
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-2 border p-3 rounded">
                            <FiMail className="text-yellow-600" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full outline-none"
                            />
                        </div>
                        <div className="flex items-start gap-2 border p-3 rounded">
                            <FiSend className="text-yellow-600 mt-1" />
                            <textarea
                                placeholder="Your Message"
                                className="w-full outline-none"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded font-semibold flex items-center gap-2"
                        >
                            <FiSend /> Send Message
                        </button>
                    </form>

                    <div className="mt-6 text-center flex justify-center items-center gap-2 text-yellow-600 font-semibold text-2sxl">
                        <FiPhoneCall />
                        <a href="tel:+917060955045">Call Us: +91-7060955045</a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="mt-4 flex justify-center gap-6 text-yellow-600 text-4xl">
                        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-700">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-700">
                            <FaFacebookF />
                        </a>
                        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-700">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* Google Map */}
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14306.534963087095!2d77.32024145644964!3d28.598946414924765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747166486415!5m2!1sen!2sin"
                        title="Our location"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
