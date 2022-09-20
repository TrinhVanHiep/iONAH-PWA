import React from 'react'
import './styles.css'

export default function Input({placeholder='',onChange, className='', ...props}) {
  return (
    <div className='_input'>
        <input 
            type="text" 
            className={`input ${className}`} 
            placeholder={placeholder} 
            onChange={onChange} 
            {...props}
        />
    </div>
  )
}
