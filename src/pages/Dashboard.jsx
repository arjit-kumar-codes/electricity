import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Landing from './Landing'
import About from './about'
import Services from './service'
import Contact from './contact'
import Testimonials from './Testimonial'
import Gallery from './Gallery'

function Dashboard() {
    return (
        <div>
            <Navbar />
            <Landing />
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
