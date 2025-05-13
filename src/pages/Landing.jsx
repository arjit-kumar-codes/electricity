const Landing = () => {
    return (
        <section id="landing" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white">
            <h1 className="text-5xl font-bold mb-4 text-yellow-600" data-aos="fade-up">Welcome to Light On</h1>
            <p className="text-lg mb-6 max-w-xl" data-aos="fade-up" data-aos-delay="200">
                Professional electrical fitting services for homes and businesses. Reliable. Affordable. On time.
            </p>
            <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded" data-aos="fade-up" data-aos-delay="400">
                Book a Slot
            </a>
        </section>
    );
};

export default Landing;