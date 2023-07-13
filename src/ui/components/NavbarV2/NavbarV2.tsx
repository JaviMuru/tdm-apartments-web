import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo/logo1.png'
import { Button } from './Button'
import './Navbar.css'

export const NavbarV2 = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [stickyNavbar, setStickyNavbar] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  const showStickyNavbar = () => {
    if (window.scrollY >= 85) {
      setStickyNavbar(true)
    } else {
      setStickyNavbar(false)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)
  window.addEventListener('scroll', showStickyNavbar)

  return (
    <>
      <nav className={stickyNavbar ? 'navbarTdm fixed' : 'navbarTdm'}>
        <div className="navbarTdm-container">
          <div className="logo">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu-tdm active' : 'nav-menu-tdm'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                Sobre nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/apartments"
                className="nav-links"
                onClick={closeMobileMenu}>
                Apartamentos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}>
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}>
                Contacto
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}
