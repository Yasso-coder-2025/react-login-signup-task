import React from 'react'
import RecommendCard from './RecommendCard'

const RecomendedSection = () => {
  return (
    <>
        <div className="py-30 px-15 bg-[#F5F5F5]">
            <h2 className='text-[#222222] text-[28px] font-bold mb-10'>Recomended For You</h2>
            <RecommendCard/>

        </div>
    </>
  )
}

export default RecomendedSection