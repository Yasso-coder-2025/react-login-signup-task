import React from 'react'
import { Link } from 'react-router'
import { earthIcon, facebookSocialIcon, instagramSocialIcon, TwitterSocialIcon, YoutubeSocialIcon } from '../../assets/icon/icons'
// import Button from '../../common/Button'
import { LogoImage } from '../../assets/images/images'

const Footer = () => {
  return (
    <>
      <div className="bg-(--footer-bg) pt-30 pb-40  px-15 mt-111.5">
        <div className="flex justify-between pb-5 border-b border-b-white/20">
          <div className="flex">
            <div className="flex items-center pe-4">
              <Link to={"/"}>
                <img className="w-full h-full" src={LogoImage} alt="bookIcon" />
              </Link>
            </div>
            <ul className="flex justify-center items-center pl-6 text-white gap-10">
                    <Link to={"/"} className="cursor-pointer">Home</Link>
                    <Link to={"/Books"} className="cursor-pointer">Books</Link>
                    <Link to={"/AboutUs"} className="cursor-pointer">About us</Link>
            </ul>
          </div>
          <div className="social-icons flex gap-6">
            <a className="w-6 h-6 cursor-pointer">
              <img src={facebookSocialIcon} alt="facebookSocialIcon" className='w-full h-full'/>
            </a>
            <a className="w-6 h-6 cursor-pointer">
              <img src={instagramSocialIcon} alt="facebookSocialIcon" className='w-full h-full'/>
            </a>
            <a className="w-6 h-6 cursor-pointer">
              <img src={YoutubeSocialIcon} alt="facebookSocialIcon" className='w-full h-full'/>
            </a>
            <a className="w-6 h-6 cursor-pointer">
              <img src={TwitterSocialIcon} alt="facebookSocialIcon" className='w-full h-full'/>
            </a>

          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <p className='text-white text-[14px] font-normal'>
            &lt;Developed By&gt; EraaSoft &lt;All Copy Rights Reserved @2024
          </p>
          <div className="flex gap-4">
            <div className="w-6 h-6 cursor-pointer">
            <img src={earthIcon} alt="earth-icon" className='w-full h-full' />
            </div>
            <select className="text-white/50 border rounded-lg px-4 outline-none">
              <option value="English" className='bg-(--footer-bg)'>English</option>
              <option value="Arabic" className='bg-(--footer-bg)'>Arabic</option>
            </select>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default Footer