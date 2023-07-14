import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarLogo.css'

interface NavbarLogoProps {
  image: string
  url: string
  onClick: () => void
}

export const NavbarLogo = ({ image, url, onClick }: NavbarLogoProps) => {
  return (
    <div className="logo">
      <Link to={url} className="navbar-logo" onClick={onClick}>
        <img src={image} alt="logo" />
      </Link>
    </div>
  )
}
