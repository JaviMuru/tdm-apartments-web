import React from 'react'
import './FormInput.css'

interface BookFormItemProps {
  field: string
  placeholder: string
  required?: boolean
}

export const FormInput = ({ field, placeholder, required = false }: BookFormItemProps) => {
  return (
    <div className="bookFormTextItemContainer">
      <div className="bookFormTextItemField c-subject">
        <input type="text" id={field} name={field} placeholder={placeholder} required={required} />
      </div>
    </div>
  )
}
