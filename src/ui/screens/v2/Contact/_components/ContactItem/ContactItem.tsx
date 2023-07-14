import React, { ReactNode } from 'react'

interface ContactItemProps {
  title: ReactNode
  description: ReactNode
}

export const ContactItem = ({ title, description }: ContactItemProps) => (
  <div
    className="single-cta pb-30 mb-30 wow fadeInUp animated"
    data-animation="fadeInDown animated"
    data-delay=".2s">
    <div className="f-cta-icon">
      <i className="far fa-map"></i>
    </div>
    <h5>{title}</h5>
    <p>{description}</p>
  </div>
)
