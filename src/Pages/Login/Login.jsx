import axios from 'axios';
import { Formik, useFormik  } from 'formik'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import login from './Login';
import { userContext } from '../../Context/User.Context';
export default function Login() {
const [errorMsg, setErrorMsg] = useState(null)
const navigate = useNavigate()

const {token, setToken} = useContext(userContext)
console.log(token );

 const validationSchema = Yup.object({

email: Yup.string().required('email is required').email("email is not valid"),

password : Yup.string().required('password is required').matches(/^[A-Z][0-9a-zA-Z]{5,25}$/,  "password shoud start uppercase latter followed by a combinations of leters and number from 5 to 25 "),



 }) 




async function sendDataToLogin(values){
  let id;
try {
  const options = {
    url :"https://ecommerce.routemisr.com/api/v1/auth/signin",
    method :"Post",
    data : values
  };
  
    id = toast.loading("wating ....")
  
  
  const {data}= await axios.request (options)
    console.log(data);
  
    toast.dismiss(id)
    toast.success(" user loged in  success");

setTimeout( () => {
  if (data.message === "success") {
    localStorage.setItem("token",data.token)
    setToken(data.token)
    navigate("/");
  } 

}, 3000

) ;



} catch (error) {
  toast.dismiss(id)
  toast.error(error.response.data.message )
  console.log(error);
  setErrorMsg(error.response.data.message);
}
}




const formik = useFormik({
  initialValues: {
  
    email:"",
    password:"",
   
  },

  validationSchema,
  onSubmit: sendDataToLogin,
})


// console.log(formik );

  return (
    <section>
<h2 className='text-2xl font-bold text-primary mb-6'>
  <i className='fa-regular fa-circle-user me-3'></i>
  <span>login Now</span>
</h2>
<form action="" className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>


<div>
  <input type="email"className='form-control w-full' placeholder='Email'
  name='email' value={formik.values.email} onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {formik.errors.email && formik.touched.email ? (
    <div className='text-red-600 font-semi mt-2 '>* {formik.errors.email}</div>
    
  ) : ("") }
  

  
</div>


<div>
  <input type="password"className='form-control w-full' placeholder='password'
  name='password' value={formik.values.password} onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  />
  {formik.errors.password  && formik.touched.password ? (
    <div className='text-red-600 font-semi mt-2 '>* {formik.errors.password}</div>
    
  ) : ("") }
  {errorMsg ? (
      <div className='text-red-600 font-semi mt-2 '>* {errorMsg }</div>
  ):(
    ""
  )}

</div>



<button type='submit' className='btn-primary'>Login</button>
</form>

    </section>
  )
}
