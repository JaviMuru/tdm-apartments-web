import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './NavbarButton.css'

interface NavbarButtonProps {
  children: ReactNode
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
}

export const NavbarButton = ({
  children,
  type,
  onClick
}: NavbarButtonProps) => {
  return (
    <Link to="/sign-up">
      <button className="btn--outline" onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  )
}
