const Gallery = () => {
    return (
      <section id="gallery" className="p-8 bg-gray-50 grid sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-up">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-48 bg-yellow-100 rounded shadow-md"></div>
        ))}
      </section>
    );
  };
  
  export default Gallery;