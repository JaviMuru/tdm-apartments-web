import React from 'react'

interface Props {
  title: string
  subtitle: string
  image: string
}

export const Header = ({ title, subtitle, image }: Props) => {
  return (
    <div
      className="banner-header section-padding valign bg-img bg-fixed"
      data-overlay-dark="3"
      style={{ backgroundImage: `url(/${image})` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-left caption mt-90">
            <h5>{subtitle}</h5>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
