import React from 'react'
// import Header from '../Layout/Header'
import SectionBestSeller from '../Home-Sections/SectionBestSeller'
import SectionShips from '../Home-Sections/SectionShips'
import RecomendedSection from '../Home-Sections/RecomendedSection'
// import { micIcon } from '../../assets/icon/icons'

const Home = () => {
  return (
  <>
  {/* <Header height="84.5"/> */}
    {/* <input type="text" placeholder='Search' className='w-134 h-14.75 absolute top-1/2 left-1/2   transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-6 py-2 outline-0'/> */}
      {/* <img src={micIcon} alt="micIcon" className="absolute -top-2 right-10 w-6 h-6 bg-red-500"/> */}
    <SectionShips/>
    <SectionBestSeller/>
    <RecomendedSection/>
  </>
  )
}

export default Home