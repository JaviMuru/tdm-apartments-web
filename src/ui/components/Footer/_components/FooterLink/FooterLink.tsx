import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface FooterLinkProps {
  title: ReactNode
  url: string
}

export const FooterLink = ({ title, url }: FooterLinkProps) => {
  return (
    <li>
      <Link to={url}>{title}</Link>
    </li>
  )
}
