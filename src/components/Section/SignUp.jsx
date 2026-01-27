import { Formik } from 'formik'
import React from 'react'
import { facebookIcon, googleIcon } from '../../assets/icon/icons'
import Header from '../Header/Footer/Header'
import Footer from '../Header/Footer/Footer'
import { Link } from 'react-router'

const SignUp = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-col justify-center items-center gap-10 mt-15">
        <Formik>
            <form className='w-xl'>
                <div className="user-name grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="text" className='text-[18px] font-semibold'>First Name</label>
                    <input type="text"  placeholder='John' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="text" className='text-[18px] font-semibold'>last Name</label>
                    <input type="text"  placeholder='Smith' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                </div>

                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className='text-[18px] font-semibold'>Email</label>
                        <input type="gmail"  placeholder='example@gmail.com' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className='text-[18px] font-semibold'>Password</label>
                        <input type="password"  placeholder='Enter password' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className='text-[18px] font-semibold'>Confirm Password</label>
                        <input type="password"  placeholder='Enter password' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                    </div>
                    <div className="flex items-center gap-0.75">
                        <input type='checkbox' name='checkbox'/>
                        <label htmlFor="checkbox" className='font-normal text-[14px] pl-2'>Agree with <a className='text-(--mainColor) cursor-pointer'>Terms & Conditions</a></label>
                    </div>
                        <button className="mt-4 px-4 py-2.5 bg-(--mainColor) text-white rounded-lg cursor-pointer border border-(--mainColor) hover:bg-white hover:text-(--mainColor)  duration-300">
                        Sign Up
                        </button>
                </div>
                <div className="mt-10 ">
                    <p className='text-center text-[16px] font-normal'>Already have an account? <Link to={'/'} className='text-(--mainColor) cursor-pointer'>Login</Link></p>
                </div>
                <div className="mt-10 text-[14px] font-normal text-center text-black/50">or</div>
                <div className="mt-6 flex flex-col gap-3">
                    <button className="w-full px-4 py-2.5 bg-white text-black rounded-lg cursor-pointer flex justify-center items-center gap-2.5 shadow">
                        <div className="w-5 h-5">
                            <img src={googleIcon} alt="google-icon" className='w-full h-full' />
                        </div>
                        Login with Google
                    </button>
                    <button className="w-full px-4 py-2.5 bg-white text-black rounded-lg cursor-pointer flex justify-center items-center gap-2.5 shadow">
                        <div className="w-5 h-5">
                            <img src={facebookIcon} alt="google-icon" className='w-full h-full' />
                        </div>
                        Login with Facebook
                    </button>
                </div>
            </form>
        </Formik>
    </div>
    <Footer/>
    </>
  )
}

export default SignUp