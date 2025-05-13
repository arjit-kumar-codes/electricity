const Services = () => {
    const services = [
      "Wiring Installation",
      "Switch Board Setup",
      "AC Point Setup",
      "Lighting Fixtures",
      "Fan Installation",
      "Power Backup Solutions",
    ];
    return (
      <section id="services" className="p-8 bg-white grid md:grid-cols-2 gap-4" data-aos="fade-up">
        {services.map((service, idx) => (
          <div key={idx} className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-600">{service}</h3>
          </div>
        ))}
      </section>
    );
  };
  
  export default Services;
  