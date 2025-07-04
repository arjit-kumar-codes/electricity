const Gallery = () => {
  return (
    <section
      id="gallery"
      className="p-8 bg-gray-50"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-8 ">
        Our Gallery
      </h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-48 bg-yellow-100 rounded shadow-md"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
