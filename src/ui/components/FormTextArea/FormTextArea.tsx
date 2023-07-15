import React from 'react'

interface BookFormTextAreaProps {
  field: string
  placeholder: string
}

export const FormTextArea = ({ field, placeholder }: BookFormTextAreaProps) => {
  return (
    <div className="contact-field p-relative c-message mb-30">
      <textarea name={field} id={field} cols={30} rows={10} placeholder={placeholder} />
    </div>
  )
}
