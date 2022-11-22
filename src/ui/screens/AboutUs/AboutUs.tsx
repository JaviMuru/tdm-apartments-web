import { Facilities } from '../../components/Facilities'
import { Pricing } from './components/Pricing'
import { About } from '../../components/About'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import React from 'react'
import '../Home/Home.styles.css'
import '../Home/Home.new.styles.css'
import { Header } from '../../components/Header'

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Header title="About Us" subtitle="TDM apartments" image="backgroundAbout.jpg" />
      <About />
      <Facilities />
      <Pricing />
      <Footer />
    </>
  )
}
