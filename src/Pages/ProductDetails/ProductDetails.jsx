import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../Component/Loading/Loading';
import ReactImageGallery from 'react-image-gallery';
import { cartContext } from '../../Context/Cart.context';

export default function ProductDetails() {

    const [details, setDetails] =useState (null);
const {addProductToCart} = useContext(cartContext)
let {id} = useParams();
// console.log(id);


  async  function getProductDetails(){
        let {data} = await  axios.get(
            `https://ecommerce.routemisr.com/api/v1/products/${id}`
        );
setDetails(data.data);
    }

useEffect(()=>{
    getProductDetails() ;
},[])



const imageItems =details?.images.map((imageURL)=>{
  return {
    original: imageURL,
    thumbnail :imageURL,
  }
})

    return (
   <>
  {details== null ? <Loading/> : (
     <div className='grid grid-cols-12 gap-6 '>
     <div className='col-span-3 '>
     <ReactImageGallery items={imageItems} showPlayButton={false}  showNav={false}/>
       
     </div>
     <div className='col-span-9 '> 
        <h2 className='text-2xl font-bold'>{details.title}</h2>
        <h3 className='text-lg font-semibold text-primary mt-2'>{details.category.name}</h3>
        <p className='text-sm  mt-3 text-gray-500'>{details.description}</p>
         <div className='flex justify-between items-center mt-4'>
            <span>{details.price} L.E</span>
            <span>
            <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
            {details.ratingsAverage}
            </span>
         </div>
      <button className='btn-primary w-full mt-4' onClick={()=>{addProductToCart({id: details.id})}} >Add To Cart</button>
     </div>
        </div> 
  )}
   
   
   
   
   
   
   </>
   
   
   
   
    )
  ;
}
