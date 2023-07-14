import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/logo/logo1.png'
import { NavbarButton } from './_components/NavbarButton'
import { NavbarItem } from './_components/NavbarItem'
import { NavbarLogo } from './_components/NavbarLogo'
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
          <NavbarLogo url="/" image={logo} onClick={closeMobileMenu} />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu-tdm active' : 'nav-menu-tdm'}>
            <NavbarItem title="Inicio" url="/" onClick={closeMobileMenu} />
            <NavbarItem title="Tossa" url="/about" onClick={closeMobileMenu} />
            <NavbarItem
              title="Apartamentos"
              url="/apartments"
              onClick={closeMobileMenu}
            />
            <NavbarItem
              title="Galeria"
              url="/gallery"
              onClick={closeMobileMenu}
            />
            <NavbarItem
              title="Servicios"
              url="/services"
              onClick={closeMobileMenu}
            />
            <NavbarItem
              title="Contacto"
              url="/contact"
              onClick={closeMobileMenu}
            />
          </ul>
          {button && (
            <NavbarButton buttonStyle="btn--outline">Reserva</NavbarButton>
          )}
        </div>
      </nav>
    </>
  )
}
