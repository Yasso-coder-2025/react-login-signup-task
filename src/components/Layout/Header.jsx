import React from 'react'
import { headerImage } from '../../assets/images/images'

const Header = ({children , height='84.5'}) => {
  return (
    <>
      <div className="relative">
        <div className={`w-full h-${height}`}>
          <img
            src={headerImage}
            alt="headerImage"
            className={`transform scale-x-[-1] w-full h-full object-cover`}
            />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      {children}
      </div> 
    
    </>
  )
}

export default Header