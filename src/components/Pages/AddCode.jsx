import React from 'react'
import Button from '../../common/Button'
import { ErrorMessage, Field, Form, Formik } from 'formik'
// import { Link } from 'react-router'
import * as Yup from 'yup'

const AddCode = () => {
  const handleSubmit = (values) =>{
    console.log(values);

  }

  const handleSubmitSchema = Yup.object().shape({
    code1: Yup.string().max(1).required("Required"),
    code2: Yup.string().max(1).required("Required"),
    code3: Yup.string().max(1).required("Required"),
    code4: Yup.string().max(1).required("Required"),
  }) 

  return (
  <>
    <div className="flex flex-col justify-center items-center gap-10 mt-15">    
      <div className="flex flex-col justify-center items-center gap-4">
        <h4 className='text-(--mainColor) font-semibold text-lg'>Reset your password!</h4>
        <p className='text-[#22222280]'>Enter the 4 dights code that you received on your email</p>
      </div>
      <Formik initialValues={{code1: "", code2: "", code3: "", code4: "" }}  validationSchema={handleSubmitSchema} onSubmit={(values) => handleSubmit(values)} >
      <Form className="inputs flex flex-col justify-center items-center gap-10">
        <div className="flex justify-center items-center gap-4">
          <div className="">
          <Field name="code1" type="text" maxLength="1"  className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>          </div>
          <div className="">
          <Field name="code2" type="text"  maxLength="1"  className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>
          </div>
          <div className="">
          <Field name="code3" type="text" maxLength="1"  className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>
          </div>
          <div className="">
          <Field name="code4" type="text" maxLength="1"  className='w-15 h-15 border border-[#2222224D] rounded-xl foucus:border-black text-center'/>
          </div>
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