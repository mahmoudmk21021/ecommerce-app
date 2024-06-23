import React, { useContext, useState } from 'react'
import { Formik, useFormik } from 'formik';
import { cartContext } from '../../Context/Cart.context';
import axios from 'axios';
import { userContext } from '../../Context/User.Context';
import toast from 'react-hot-toast';

export default function Checkout() {
const {cartInfo, setCartInfo  }=useContext(cartContext)
const {token} = useContext(userContext)
const[orderType, setOrderType]=useState(null)



 async function creatCashOrder(values){
    console.log("########## cash");
    const options={
        url:`https://ecommerce.routemisr.com/api/v1/orders/${cartInfo.data._id}`,
        method : "POST",
        headers : {token},
        data:{values},
    }
    let{data}= await axios.request(options )
    console.log(data);
    setCartInfo([])
}


async function creatOnlineOrder(values){
    console.log("########## online");
    const options={
        url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo.data._id}?url=http://localhost:5173`,
        
        method : "POST",
        headers : {token},
        data:{values},
    }
    let{data}= await axios.request(options )
    console.log(data);
    setCartInfo([])

toast.loading("redirec to payment gatway")

setTimeout(()=>{
    if(data.status == "success") {
        window.location.href = data.session.url 
    }
}, 3000)

}


    const Formik=useFormik({
        initialValues:{
            "shippingAddress":{
                "details": "",
                "phone": "",
                "city": ""
                },

        },
        onSubmit:(values)=>{
            if (orderType == "cash") creatCashOrder(values)  ;
            else creatOnlineOrder(values)   

      }
    })
  return (
   <>
   <h2 className='text-2xl font-bold mb-3 '> Shipping Address</h2>
   <form onSubmit={Formik.handleSubmit}> 
<input type="text" className='form-control w-full mb-3' placeholder="city"  value = {Formik.values.shippingAddress.city} name="shippingAddress.city"  onChange={Formik.handleChange}/>
<input type="tel" className='form-control w-full mb-3' placeholder="phone" value = {Formik.values.shippingAddress.phone} name="shippingAddress.phone" onChange={Formik.handleChange} />
<textarea className='form-control w-full' placeholder="details"  value = {Formik.values.shippingAddress.details} name="shippingAddress.details" onChange={Formik.handleChange}></textarea>
 <button onClick={()=>{setOrderType("cash")}} type='submit' className='btn-primary bg-blue-500 mr-4 mt-4'>cash order</button>
 <button onClick={()=>{setOrderType("online")}} type='submit' className='btn-primary '>online order</button>

   </form>
   
   
   </>
  )
}
