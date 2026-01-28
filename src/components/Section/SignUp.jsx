import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { use } from 'react'
import { facebookIcon, googleIcon } from '../../assets/icon/icons'
import Header from '../Header/Footer/Header'
import Footer from '../Header/Footer/Footer'
import { Link } from 'react-router'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router'



const SignUp = () => { 
    
    const navigate = useNavigate();
    
    
    const handleSignUp = async (values)=>{
        try {
            const res = await axios.post("https://bookstore.eraasoft.pro/api/register", values);
            navigate('/');
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const SignUpSchema = Yup.object({
        first_name: Yup.string().required("First name is required"),
        last_name: Yup.string().required("Last name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required"),
        password_confirmation : Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm password is required")
    })

 

  return (
    <>
    <Header/>
    <div className="flex flex-col justify-center items-center gap-10 mt-15">
        <Formik initialValues={{first_name: "", last_name: "", email: "", password: "", confirm_password: "" }} validationSchema={SignUpSchema} onSubmit={ (values) =>{handleSignUp(values)}}>
            <Form className='w-xl'>
                <div className="user-name grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="text" className='text-[18px] font-semibold'>First Name</label>
                    <Field  name="first_name" type="text"  placeholder='John' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                    <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="text" className='text-[18px] font-semibold'>last Name</label>
                    <Field name="last_name" type="text"  placeholder='Smith' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                    <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm" />
                </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className='text-[18px] font-semibold'>Email</label>
                        <Field  name="email" type="email"  placeholder='example@gmail.com' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className='text-[18px] font-semibold'>Password</label>
                        <Field name="password" type="password"  placeholder='Enter password' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className='text-[18px] font-semibold'>Confirm Password</label>
                        <Field name="password_confirmation" type="password"  placeholder='Enter password' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                    <ErrorMessage name="password_confirmation" component="div" className="text-red-500 text-sm" />

                    </div>
                    <div className="flex items-center gap-0.75">
                        <Field type='checkbox' name='checkbox'/>
                        <label htmlFor="checkbox" className='font-normal text-[14px] pl-2'>Agree with <a className='text-(--mainColor) cursor-pointer'>Terms & Conditions</a></label>
                    </div>
                        <button type="submit" className="mt-4 px-4 py-2.5 bg-(--mainColor) text-white rounded-lg cursor-pointer border border-(--mainColor) hover:bg-white hover:text-(--mainColor)  duration-300">
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
            </Form>
        </Formik>
    </div>
    <Footer/>
    </>
  )
}

export default SignUp