import React from 'react'
import Button from '../../common/Button'
import { Field, Form, Formik } from 'formik'
// import { Link } from 'react-router'

const AddCode = () => {
  const handleSubmit = (values) =>{
    console.log(values);
    



  }


  return (
  <>
    <div className="flex flex-col justify-center items-center gap-10 mt-15">    
      <div className="flex flex-col justify-center items-center gap-4">
        <h4 className='text-(--mainColor) font-semibold text-lg'>Reset your password!</h4>
        <p className='text-[#22222280]'>Enter the 4 dights code that you received on your email</p>
      </div>
      <Formik initialValues={{code1: "", code2: "", code3: "", code4: "" }}  onSubmit={(values) => handleSubmit(values)} >
      <Form className="inputs flex flex-col justify-center items-center gap-10">
        <div className="flex justify-center items-center gap-4">
          <Field name="code1" type="text" className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>
          <Field name="code2" type="text" className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>
          <Field name="code3" type="text" className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>
          <Field name="code4" type="text" className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>
        </div>
        <div className="">
          <Button className="text-white  hover:bg-white hover:text-(--mainColor)  duration-300 w-[312PX]">
          Reset Password
          </Button>
        </div>
      </Form>
      </Formik>
        <p className='text-center text-[16px] font-normal'>Didn’t receive a code? <a className='text-(--mainColor) cursor-pointer'>Send again</a></p>

    </div>
    
    
    
    
  </>
  )
}

export default AddCode