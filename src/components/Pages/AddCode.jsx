import React from 'react'
import Button from '../../common/Button'

const AddCode = () => {
  return (
  <>
    <div className="flex flex-col justify-center items-center gap-10 mt-15">    
      <div className="flex flex-col justify-center items-center gap-4">
        <h4 className='text-(--mainColor) font-semibold text-lg'>Reset your password!</h4>
        <p className='text-[#22222280]'>Enter the 4 dights code that you received on your email</p>
      </div>
      <div className="inputs flex gap-6">
        <input type="text" className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>
        <input type="text" className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>
        <input type="text" className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>
        <input type="text" className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>
      </div>
      <Button className="text-white  hover:bg-white hover:text-(--mainColor)  duration-300 w-[312PX]">
        Reset Password
      </Button>
    </div>
    
    
    
    
  </>
  )
}

export default AddCode