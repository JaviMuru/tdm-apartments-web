import { Trans } from '@lingui/macro'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/logo/logo1.png'
import { locales } from '../Locales/LocaleLoader'
import { NavbarButton } from './_components/NavbarButton'
import { NavbarItem } from './_components/NavbarItem'
import { NavbarLogo } from './_components/NavbarLogo'
import './Navbar.css'

interface NavbarProps {
  locale: string
  handleLocaleChange: (locale: string) => void
}

export const Navbar = ({ locale, handleLocaleChange }: NavbarProps) => {
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
            <NavbarItem
              title={<Trans>Inicio</Trans>}
              url="/"
              onClick={closeMobileMenu}
            />
            <NavbarItem
              title={<Trans>Tossa de Mar</Trans>}
              url="/about"
              onClick={closeMobileMenu}
            />
            <NavbarItem
              title={<Trans>Apartamentos</Trans>}
              url="/apartments"
              onClick={closeMobileMenu}
            />
            <NavbarItem
              title={<Trans>Galeria</Trans>}
              url="/gallery"
              onClick={closeMobileMenu}
            />
            <NavbarItem
              title={<Trans>Servicios</Trans>}
              url="/services"
              onClick={closeMobileMenu}
            />
            <NavbarItem
              title={<Trans>Contacto</Trans>}
              url="/contact"
              onClick={closeMobileMenu}
            />
            <div className="dropdown">
              <button className="dropbtn">
                {/* @ts-ignore */}
                {locales[locale]} <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                {Object.keys(locales).map(key => (
                  <a key={key} onClick={() => handleLocaleChange(key)}>
                    {/* @ts-ignore */}
                    {locales[key]}
                  </a>
                ))}
              </div>
            </div>
          </ul>
          {button && (
            <NavbarButton>
              <Trans>Reserva</Trans>
            </NavbarButton>
          )}
        </div>
      </nav>
    </>
  )
}
