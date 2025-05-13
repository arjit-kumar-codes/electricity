import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import About from './about'
import Services from './service'
import Contact from './contact'
import Testimonials from './Testimonial'
import Gallery from './Gallery'
import Home from './home'

function Dashboard() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default Dashboard
