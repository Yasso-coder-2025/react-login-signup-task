import React from 'react'

const Button = ({ className , children, text }) => {
  return (
    <button  type="submit"  className={`px-4 py-2.5 bg-(--mainColor) text-${text} rounded-lg cursor-pointer border border-(--mainColor) ${className}`}>

    {children}

    </button>

  )
}

export default Button