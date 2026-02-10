import React from 'react'
import { RichDadImg2 } from '../../assets/images/books/BooksImages'
import { Star } from '../../assets/icon/icons'


const RecommendCard = () => {
  return (
    <>
        <div className="bg-white p-10 flex gap-10">
            <div className="img h-66.25 w-43.75">
                <img src={RichDadImg2} alt="RichDadBook" className='w-full h-full' />
            </div>
            <div className="flex flex-col">
                <div className="img-details mb-2">
                    <h3 className='text-[18px] font-bold mb-1'>Rich Dad And Poor Dad</h3>
                    <p className='text-[#22222280]'>Author: <span className='text-black'>Robert T. Kiyosanki</span></p>
                </div>
                <p className='text-[#22222280] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,</p>
            </div>
            <div className="flex">
                <Star/>

            </div>

        </div>
    
    
    </>
  )
}

export default RecommendCard