import React from 'react'
import './FormInput.css'

interface BookFormItemProps {
  key: string
  placeholder: string
  required?: boolean
}

export const FormInput = ({ key, placeholder, required = false }: BookFormItemProps) => {
  return (
    <div className="bookFormTextItemContainer">
      <div className="bookFormTextItemField c-subject">
        <input type="text" id={key} name={key} placeholder={placeholder} required />
      </div>
    </div>
  )
}
