const Contact = () => {
    return (
      <section id="contact" className="p-8 bg-gray-50 max-w-xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-2 rounded" rows="4"></textarea>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
        <div className="mt-6 text-center">
          <a href="tel:+919999999999" className="text-yellow-600 font-semibold">📞 Call Us: +91-9999999999</a>
        </div>
      </section>
    );
  };
  
  export default Contact;
  