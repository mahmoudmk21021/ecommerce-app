import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

export default function CategorySlider() {
const [categories, setCategories] =useState(null);
async function getCategories(){
const options ={
  url :"https://ecommerce.routemisr.com/api/v1/categories",
  mathod :"GET",

}



  const {data} =  await axios.request(options)
  setCategories(data.data)

}

useEffect(()=>{
getCategories()
},[])

  return (
    <>
  {categories ? <section className='pb-4'>
    <h2 className='font-semibold text-lg mb-3'>shop popular category</h2>
    <swiper-container loop ={true} slides-per-view={6}>

    {categories.map((category)=><Swiper-Slide  key={category._id}>
<Link to={`/category/${category._id}`}>
<img src={category.image} className='w-full h-72 object-cover' alt="" />
<h3> {category.name}</h3>
</Link>

    </Swiper-Slide>
    )}

    </swiper-container>


  </section> : <Loading/> }

    
    
    
    
    </>
  )
}
 