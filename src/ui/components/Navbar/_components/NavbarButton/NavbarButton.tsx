import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarButton.css'

const STYLES = ['btn--primary', 'btn--outline', 'btn--test']

const SIZES = ['btn--medium', 'btn--large']

export const NavbarButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}: any) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <Link to="/sign-up">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}>
        {children}
      </button>
    </Link>
  )
}
