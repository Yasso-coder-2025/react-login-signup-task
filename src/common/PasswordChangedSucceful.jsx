import { checkIcon } from '../assets/icon/icons'
import React, { useState } from 'react'

const PasswordChangedSucceful = () => {

 const [isHidden, setIsHidden] = useState(false);



  return (
    <>
      <div className={`fixed inset-0 z-20 w-full h-screen bg-black/50 flex justify-center items-center ${isHidden ? 'hidden' : ''}`}>
        <div className=" w-175 bg-white border border-[#22222233] rounded-[20px] flex flex-col justify-center items-center gap-10 pt-15 px-25 pb-10">
          <div className="w-30 h-30 ">
            <img className='w-full h-full' src={checkIcon} alt="checkIcon" />
          </div>
          <div className="flex flex-col justify-center items-center text-center mb-10">
            <p className='font-semibold text-[24px] '>Password changed!</p>
            <p className='text-[#22222280]'>Your password has been </p>
            <p className='text-[#22222280]'>changed successfully</p>
          </div>
          <button className='popup px-4 py-2.5 bg-(--mainColor) text-white rounded-lg cursor-pointer border border-(--mainColor) hover:bg-white hover:text-(--mainColor) duration-300 w-full font-semibold text-[16px]'
            onClick={() => setIsHidden(true)}> Finish </button>
        </div>
      </div>




    </>
  )
}

export default PasswordChangedSucceful