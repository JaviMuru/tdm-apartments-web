import React from 'react'
import './navbar.styles.css'
import logo from '../../assets/logo.png'
import { NavbarItem } from './components/NavbarItem'
import { NavbarLogo } from './components/NavbarLogo'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top ps-0">
      <div className="container">
        <NavbarLogo image={logo} />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="icon-bar">
            <i className="ti-line-double" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <NavbarItem name="Home" path="/" />
            <NavbarItem name="About" path="/about-us" />
            <NavbarItem name="Apartments" path="/rooms" />
            <NavbarItem name="Gallery" path="/gallery" />
            <NavbarItem name="Contact" path="/contact" />
          </ul>
        </div>
      </div>
    </nav>
  )
}
