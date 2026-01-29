import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import PasswordChangedSucceful from '../../common/PasswordChangedSucceful';

const ResetPassword = () => {

    const handleResetPassword = (values)=>{
          console.log(values);
          setShowPopup(true);
      }


    const ForgetPasswordSchema = Yup.object({
      password: Yup.string().min(8).required("Enter your new password"),
      password_confirmation : Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm password is required")
    })


    const [showPopup, setShowPopup] = useState(false)

  return (
    <>
    <div className="flex flex-col justify-center items-center gap-10 mt-15">    
      <div className="flex flex-col justify-center items-center gap-4">
        <h4 className='text-(--mainColor) font-semibold text-lg'>Create new password!</h4>
        <div className="flex flex-col justify-center items-center">
          <p className='text-[#22222280]'>Create a strong password</p>
          <p className='text-[#22222280]'>Your new password must be different from previous one</p>
        </div>
      </div>
      <Formik initialValues={{ password: "", password_confirmation: "" }} validationSchema={ForgetPasswordSchema} onSubmit={(values)=>handleResetPassword(values)}>
        <Form className='w-141.75 flex flex-col gap-10'>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="password" className='text-[18px] font-semibold'>Password</label>
            <Field name="password" type="password"  placeholder='Enter password' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
            <p className="text-[#22222280] text-sm"> Must be at least 8 characterss</p>
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm  relative -top-7 bg-white" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password_confirmation" className='text-[18px] font-semibold'>Confirm Password</label>
            <Field name="password_confirmation" type="password"  placeholder='Confirm password' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
            <ErrorMessage name="password_confirmation" component="div" className="text-red-500 text-sm" />
          <div className="flex items-center gap-0.75 mt-4">
            <Field type='checkbox' name='checkbox'/>
            <label htmlFor="checkbox" className='font-normal text-[14px] pl-2'>Remember me</label>
          </div>
          </div>
          <button type="submit" className="mt-4 px-4 py-2.5 bg-(--mainColor) text-white rounded-lg cursor-pointer border border-(--mainColor) hover:bg-white hover:text-(--mainColor)  duration-300 w-full" >
          Reset Password
          </button>
          </Form>
      </Formik>
    </div>
    {showPopup && <PasswordChangedSucceful />}
    </>
  )
}

export default ResetPassword