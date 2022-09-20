import React from 'react'
import './button.css';

export default function Button({  
    children,
    className = '',
    type = 'primary',//primary; secondary; tertiary
    disable,
    onClick = () => {},
    ...props
}) {
  return (
    <div className='_button' >
        <button className={`btn btn-${type} ${className} btn--${disable&&"disabled"}`} onClick={onClick} {...props}  >
           {children}
        </button>
    </div>
  )
}
