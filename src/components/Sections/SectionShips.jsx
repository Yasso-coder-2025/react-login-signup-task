import React from 'react'
import { CreditIcon, RestockIcon, shippingFastIcon, userIcon } from '../../assets/icon/icons'

const SectionShips = () => {
  return (
    <>
      <div className="px-15 py-30 flex justify-between ">
          {/* 1box */}
        <div className="flex flex-col gap-2 w-[20%]">
          <div className="icon w-7.5 h-7.5">
            <img src={shippingFastIcon} alt="icon" className='w-full h-full'/>
          </div>
            <h3 className='font-bold text-lg'>Fast & Reliable Shipping</h3>
            <p className='text-[#22222280] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
          </div>
          {/* 2box */}
        <div className="flex flex-col gap-2 w-[20%]">
          <div className="icon w-7.5 h-7.5">
            <img src={CreditIcon} alt="icon" className='w-full h-full'/>
          </div>
            <h3 className='font-bold text-lg'>Secure Payment</h3>
            <p className='text-[#22222280] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
        </div>
          {/* 3box */}
        <div className="flex flex-col gap-2 w-[20%]">
          <div className="icon w-7.5 h-7.5">
            <img src={RestockIcon} alt="icon" className='w-full h-full'/>
          </div>
            <h3 className='font-bold text-lg'>Easy Returns</h3>
            <p className='text-[#22222280] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
        </div>
          {/* 4box */}
        <div className="flex flex-col gap-2 w-[20%]">
          <div className="icon w-7.5 h-7.5">
            <img src={userIcon} alt="icon" className='w-full h-full'/>
          </div>
            <h3 className='font-bold text-lg'>24/7 Customer Support</h3>
            <p className='text-[#22222280] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
        </div>
    </div>
    
    
    
    </>
  )
}

export default  SectionShips