import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { facebookIcon, googleIcon } from '../../assets/icon/icons'
import { Link } from 'react-router'
import axios from 'axios'
import * as Yup from 'yup';

// async function loginData() {
//   const res = await fetch('https://bookstore.eraasoft.pro/api/login', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       email: "mostafa@gmail.com",
//       password: "password"
//     })
//   });

//   const data = await res.json();
//   return data;
// }

// loginData().then(data => {
//   console.log(data);
// });

//fetch up ||



//axios  with ai helpied
 
// async function loginData() {
//   const res = await axios.post(
//     "https://bookstore.eraasoft.pro/api/login",
//     {
//       email: "mostafa@gmail.com",
//       password: "password",
//     },
//     {
//       headers: {
//         Accept: "application/json",
//       },
//     }
//   );

//   return res.data;
// }

// loginData()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err.response.data);
//   });

// ignore what above just for learning axios and fetch






const Login = () => {

    const handleLogin = async (values) => {
        console.log(values);
        try {
          const res = await axios.post ("https://bookstore.eraasoft.pro/api/login", values);
          console.log(res);
        } catch (error) {
          console.log(error);
        }

    }

    const loginSchema = Yup.object({
      email: Yup.string("Enter invalid email").email("Enter a valid email").required("Hey! your Email isn't written"),
      password: Yup.string().min(7, "Password must be at least 7 characters").required("Hey!!! your password isn't written also"), 
    })


  return (
    <>
    <div className="flex flex-col justify-center items-center gap-10 mt-15">
        <h4 className='text-(--mainColor) font-semibold text-lg'>Welcome Back!</h4>
        <Formik initialValues={{email: "", password: "" }} validationSchema={loginSchema} onSubmit={ (values) => handleLogin(values)}>
            <Form className='w-xl'>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className='text-[18px] font-semibold'>Email</label>
                        <Field name="email" type="text"  placeholder='example@gmail.com' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                    </div>
                    <ErrorMessage name="email" component={"p"} className="text-red-500 text-sm" />
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className='text-[18px] font-semibold'>Password</label>
                        <Field name="password" type="password"  placeholder='Enter password' className=' border border-black/20 rounded-lg outline-none w-full p-4'/>
                    </div>
                    <ErrorMessage name="password" component={"p"} className="text-red-500 text-sm" />
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-0.75">
                            <Field  type='checkbox' name='checkbox'/>
                            <label htmlFor="checkbox" className='font-normal text-[14px]'>Remember me</label>
                        </div>
                        <a className="text-[18px] font-normal text-(--mainColor) cursor-pointer"> Forget password?</a>
                    </div>
                        <button type="submit" className="mt-4 px-4 py-2.5 bg-(--mainColor) text-white rounded-lg cursor-pointer border border-(--mainColor) hover:bg-white hover:text-(--mainColor)  duration-300">
                        Log in
                        </button>
                </div>
                <div className="mt-10 ">
                    <p className='text-center text-[16px] font-normal'>Don't have an account? <Link to={'/SignUp'} className='text-(--mainColor) cursor-pointer'>Sign Up</Link></p>
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
    </>
  )
}

export default Login