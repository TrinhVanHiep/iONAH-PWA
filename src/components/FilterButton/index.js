import React from 'react'
import './styles.css';

export default function FilterButton({  
    children,
    className = '',
    type = 'secondary',//primary; secondary
    ...props
}) {
  return (
    <div className='_filter-button' >
        <button className={`btn btn-${type} ${className}`}  {...props}>
           {children}
        </button>
    </div>
  )
}
