import React, { ReactNode } from 'react'

interface FormSubmitProps {
  text: ReactNode
}

export const FormSubmit = ({ text }: FormSubmitProps) => {
  return (
    <div className="slider-btn">
      <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">
        <span>{text}</span>
      </button>
    </div>
  )
}
