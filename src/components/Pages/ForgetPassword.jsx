import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const ForgetPassword = () => {

    const handleForgetPassword = (values)=>{

        console.log(values);
        
    }

    const ForgetPasswordSchema = Yup.object({
      email: Yup.string("Enter invalid email").email("Enter a valid email").required("Enter your registered email"), 
    })




  return (
    <>
    <div className="flex flex-col justify-center items-center gap-10 mt-15">    
        <div className="flex flex-col justify-center items-center gap-4">
            <h4 className='text-(--mainColor) font-semibold text-lg'>Forget Password?</h4>
            <p className='text-[#22222280]'>Enter your email to reset your password</p>
        </div>
        <Formik initialValues={{ email: "" }} validationSchema={ForgetPasswordSchema} onSubmit={(values)=>handleForgetPassword(values)}>
            <Form>
                <div className="flex flex-col gap-2 w-141.75">
                    <label htmlFor="email" className='text-[18px] font-semibold'>Email</label>
                    <Field name="email" type="text"  placeholder='example@gmail.com' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                    <ErrorMessage name="email" component={"p"} className="text-red-500 text-sm" />
                </div>
                <button type="submit" className="mt-10 px-4 py-2.5 bg-(--mainColor) text-white rounded-lg cursor-pointer border border-(--mainColor) hover:bg-white hover:text-(--mainColor)  duration-300 w-full">
                    Send reset code
                </button>
            </Form>
        </Formik>
    </div>
    
    
    
    </>
  )
}

export default ForgetPassword