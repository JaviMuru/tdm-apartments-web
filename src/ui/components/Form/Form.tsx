import React, { ReactNode } from 'react'

interface FormProps {
  title: ReactNode
  children: any
}

export const Form = ({ title, children }: FormProps) => {
  return (
    <div className="contact-bg02">
      <div
        className="section-title center-align mb-40 text-center wow fadeInDown animated"
        data-animation="fadeInDown"
        data-delay=".4s">
        <h2>{title}</h2>
      </div>
      <form action="mail.php" method="post" className="contact-form mt-30">
        <div className="row">{children}</div>
      </form>
    </div>
  )
}
