import React from 'react'
import ImageSlider from './ImageSlider'
import Button from '../../common/Button'


const SectionBestSeller = () => {
  return (
    <>
        <div className="bg-(--footer-bg) py-30 flex flex-col items-center justify-center text-center gap-20">
            <div className="w-125">
                <h2 className='font-bold text-[27px] text-white'>Best Seller</h2>
                <p className='text-white/50 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
            </div>
        <ImageSlider/>
        <Button className={`text-white hover:bg-white hover:text-(--mainColor)  duration-300 w-45`}>
            Shop Now
        </Button>
        </div>
    </>
  )
}

export default SectionBestSeller