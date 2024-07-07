import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../Context/User.Context'
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Loading from '../../Component/Loading/Loading';
import { data } from 'autoprefixer';

export default function AllOrders() {
const [orders, setOrders] = useState(null)
const{token }= useContext (userContext);
const {id}= jwtDecode(token)
console.log(id);


async function getUserOrders(){
    const options = {
        url : `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
        method : "GET",
    }
    const {data}= await axios.request(options);
    console.log(data);
    setOrders(data)
}

useEffect(()=> {
    getUserOrders();
},[]);

  return (  
      <>
{!orders ? <Loading/> :(orders.map((order)=>(
      <div className='orders border border-gray-300 rounded-md p-4 mt-4 '>
      <div className='flex  items-center justify-between'>
          <div>
              <h2 className='text-gray-500'>order ID</h2>
              <h3 className='font-bold' > #{order.id} </h3>
          </div>
          <div>

{order.isDelivered ? (
       <span className='btn-primary bg-green-500 inline-block me-2'>تم التوصيل</span>)
       
       : (<span className='btn-primary bg-blue-500 inline-block me-2'>قيد التوصيل</span>
            )}

{order.isPaid ? ( 
     <span className='btn-primary  bg-green-500 inline-block' >تم الدفع</span>
):(
    <span className='btn-primary  bg-red-500 inline-block' >غير مدفوع</span>
)}

        
          </div>
      
        </div>
        <div>
          <div className='grid grid-cols-12 mt-5 gap-4'>
            {order.cartItems.map((product)=>(
                  <div className='product border border-gray-400 rounded p-3  col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2'>
                  <img src={product.product.imageCover} alt="" className='w-full '/>
                  <h3 className='font-semibold my-2'>{product.product.title}</h3>
                  <span>{product.price} l.e</span>
                </div>
            ))}
          </div>
        </div>
      </div>

))  
      )}
      
      
      
      
      
      
      </>
  )
  
}
