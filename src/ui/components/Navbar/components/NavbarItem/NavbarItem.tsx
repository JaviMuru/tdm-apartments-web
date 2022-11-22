import { NavLink } from 'react-router-dom'
import React from 'react'

interface Props {
  name: string
  path: string
}

export const NavbarItem = ({ name, path }: Props) => {
  return (
    <li className="nav-item">
      <NavLink className={navData => (navData.isActive ? 'nav-link active' : 'nav-link')} to={path}>
        {name}
      </NavLink>
    </li>
  )
}
