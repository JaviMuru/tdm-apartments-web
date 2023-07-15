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
import { About } from './ui/screens/v2/About'
import { Activies } from './ui/screens/v2/Activities/Activies'
import { ApartmentDetails } from './ui/screens/v2/ApartmentDetails/ApartmentDetails'
import { Apartments } from './ui/screens/v2/Apartments'
import { BeachDetails } from './ui/screens/v2/BeachDetails/BeachDetails'
import { Book } from './ui/screens/v2/Book'
import { Contact } from './ui/screens/v2/Contact'
import { Faq } from './ui/screens/v2/Faq/Faq'
import { Gallery } from './ui/screens/v2/Gallery/Gallery'
import { Home } from './ui/screens/v2/Home'
import { NotFound } from './ui/screens/v2/NotFound'
import { ServiceDetails } from './ui/screens/v2/ServiceDetails/ServiceDetails'
import { Services } from './ui/screens/v2/Services'
import { WhatToSee } from './ui/screens/v2/WhatToSee/WhatToSee'

interface AppProps {
  locale: any
  handleLocaleChange: any
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
