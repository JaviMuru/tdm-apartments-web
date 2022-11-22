import React from 'react'

interface Props {
  image: string
}

export const NavbarLogo = ({ image }: Props) => {
  return (
    <div className="logo-wrapper navbar-brand valign">
      <a href="/">
        <div className="logo">
          <img src={image} className="logo-img" alt="" />
        </div>
      </a>
    </div>
  )
}
