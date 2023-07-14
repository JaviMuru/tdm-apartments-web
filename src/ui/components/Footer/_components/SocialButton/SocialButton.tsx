import React from 'react'
import { Link } from 'react-router-dom'

interface SocialButtonProps {
  url: string
  icon: string
}

export const SocialButton = ({ icon, url }: SocialButtonProps) => (
  <Link to={url} target="_blank">
    <i className={`fab ${icon}`}></i>
  </Link>
)
