import React, { ReactNode } from 'react'
import { Link, To } from 'react-router-dom'
import './NavbarButton.css'

interface NavbarButtonProps {
  children: ReactNode
  type?: 'submit' | 'reset' | 'button'
  url: To
  onClick?: () => void
}

export const NavbarButton = ({ children, type, url, onClick }: NavbarButtonProps) => {
  return (
    <Link to={url}>
      <button className="btn--outline" onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  )
}
