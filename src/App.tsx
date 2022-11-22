import React from 'react'
import './App.css'
import { Home } from './ui/screens/Home'
import { AboutUs } from './ui/screens/AboutUs'
import { Gallery } from './ui/screens/Gallery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotFound } from './ui/screens/NotFound'
import { Contact } from './ui/screens/Contact'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
