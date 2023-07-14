import React, { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './NavbarItem.css'

interface NavbarItemPrpos {
  title: ReactNode
  url: string
  onClick: () => void
  customStyle?: CSSProperties
}

export const NavbarItem = ({
  title,
  url,
  onClick,
  customStyle
}: NavbarItemPrpos) => {
  return (
    <li style={customStyle} className="nav-item">
      <Link to={url} className="nav-links" onClick={onClick}>
        {title}
      </Link>
    </li>
  )
}
