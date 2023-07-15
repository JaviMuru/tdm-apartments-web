import React from 'react'

interface BookFormTextAreaProps {
  key: string
  placeholder: string
}

export const FormTextArea = ({ key, placeholder }: BookFormTextAreaProps) => {
  return (
    <div className="contact-field p-relative c-message mb-30">
      <textarea name={key} id={key} cols={30} rows={10} placeholder={placeholder} />
    </div>
  )
}
