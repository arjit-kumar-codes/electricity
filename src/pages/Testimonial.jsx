const Testimonials = () => {
    const reviews = [
      { name: "Rahul", comment: "Excellent service! Very professional." },
      { name: "Priya", comment: "Timely and clean work. Highly recommend!" },
    ];
    return (
      <section id="testimonial" className="p-8 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-4 border rounded shadow-sm">
              <p className="italic">"{r.comment}"</p>
              <p className="mt-2 font-semibold">- {r.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;