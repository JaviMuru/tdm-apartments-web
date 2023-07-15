import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import './ui/assets/css/animate.min.css'
import './ui/assets/css/bootstrap.min.css'
import './ui/assets/css/default.css'
import './ui/assets/css/dripicons.css'
import './ui/assets/css/magnific-popup.css'
import './ui/assets/css/meanmenu.css'
import './ui/assets/css/responsive.css'
import './ui/assets/css/slick.css'
import './ui/assets/css/style.css'
import './ui/assets/fontawesome/css/all.min.css'
import { Navbar } from './ui/components/Navbar'
import { About } from './ui/screens/About'
import { Activies } from './ui/screens/Activities/Activies'
import { ApartmentDetails } from './ui/screens/ApartmentDetails/ApartmentDetails'
import { Apartments } from './ui/screens/Apartments'
import { BeachDetails } from './ui/screens/BeachDetails/BeachDetails'
import { Book } from './ui/screens/Book'
import { Contact } from './ui/screens/Contact'
import { Faq } from './ui/screens/Faq/Faq'
import { Gallery } from './ui/screens/Gallery/Gallery'
import { Home } from './ui/screens/Home'
import { NotFound } from './ui/screens/NotFound'
import { ServiceDetails } from './ui/screens/ServiceDetails/ServiceDetails'
import { Services } from './ui/screens/Services'
import { WhatToSee } from './ui/screens/WhatToSee/WhatToSee'

interface AppProps {
  locale: string
  handleLocaleChange: (locale: string) => void
}

export function App({ locale, handleLocaleChange }: AppProps) {
  return (
    <Router basename="/">
      <Navbar locale={locale} handleLocaleChange={handleLocaleChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/apartment-details" element={<ApartmentDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/beach-details" element={<BeachDetails />} />
        <Route path="/what-to-see" element={<WhatToSee />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/activies" element={<Activies />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
