import React from 'react'
import amazonlogo from '../../assets/images/amazon-pay.png'
import paypallogo from '../../assets/images/paypal.png'
import americanlogo from '../../assets/images/American-Express-Color.png'
import mastercardlogo from '../../assets/images/mastercard.webp'
import applestorelogo from '../../assets/images/get-apple-store.png'
import googlestorelogo from '../../assets/images/get-google-play.png'



export default function Footer() {
  return (
    <footer className='bg-slate-100 py-4 absolute left-0 bottom-0 right-0'>
    <div className="container">
<h1 className='text-2xl font-semibold '>Get the Fresh Card App</h1>
<p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sit.</p>
<div className='flex gap-4'>
<input type='text' className='form-control flex-grow' placeholder='Email...'/>
<button className='btn-primary'>Share app Link</button>
</div>
 <div className='flex justify-between items-center'>
<div className='flex gap-2 items-center mt-4'>
  <span>payment partners</span>
  <div className='flex items-center gap-2'>
<img src={amazonlogo} alt=""  className='w-16'/>
<img src={paypallogo} alt=""  className='w-16' />
<img src={americanlogo} alt=""  className='w-16'/>
<img src={mastercardlogo} alt=""  className='w-16' />


  </div>
</div>

<div className='flex gap-2 items-center mt-4'>
  <span>Get deliveries with Fresh Card</span>
  <div className='flex items-center gap-2'>
<img src={applestorelogo} alt=""  className='w-16'/>
<img src={googlestorelogo} alt=""  className='w-16' />



  </div>
</div>

 </div>
    </div>
    </footer>
  )
}
