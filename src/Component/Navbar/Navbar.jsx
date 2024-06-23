import React, { useContext, useEffect } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { userContext } from '../../Context/User.Context'
import Cart from './../../Pages/Cart/Cart';
import { cartContext } from '../../Context/Cart.context';

export default function Navbar() {
  const {token, logOut} = useContext(userContext);
  const{getCartInfo, cartInfo }=useContext(cartContext);
  console.log(cartInfo ?.numOfCartItems);
  useEffect(()=>{getCartInfo()},[])
  return (
   <>
   
   <nav className='bg-slate-100 p-3 fixed left-0 right-0 top-0 z-50 '>

    <div className="container  flex gap-8">
<h1>
  <a href="/">
    <img src={logo} alt="" />
  </a>
</h1>


{token ? <ul className='flex gap-6 items-center'>

<li>
  <NavLink className={({isActive})=>{
    return `relative  before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:bg-primary  before:absolute before:left-0 before:-bottom-1 ${
      isActive ? "font-bold before:w-full" :"before:w-0"
  }`;
  }} to="/">Home</NavLink>
</li>
<li>
  <NavLink className={({isActive})=>{
    return `relative  before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:bg-primary  before:absolute before:left-0 before:-bottom-1 ${
      isActive ? "font-bold before:w-full" :"before:w-0"
  }`;
  }} to="/Products">Products</NavLink>
</li>
<li>
  <NavLink className={({isActive})=>{
    return `relative  before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:bg-primary  before:absolute before:left-0 before:-bottom-1 ${
      isActive ? "font-bold before:w-full" :"before:w-0"
  }`;
  }} to="/categories">Categories</NavLink>
</li>
<li>
  <NavLink className={({isActive})=>{
    return `relative  before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:bg-primary  before:absolute before:left-0 before:-bottom-1 ${
      isActive ? "font-bold before:w-full" :"before:w-0"
  }`;
  }} to="/Brands">Brands</NavLink>
</li>


</ul> :("")}

<Link to="/Cart" className='ms-auto relative'>
<i className="fa-solid fa-cart-shopping text-lg" ></i>
<span className='bg-primary text-sm  absolute top-0 right-0 translate-x-1/2  -translate-y-1/2 rounded-full w-5 h-5 flex items-center justify-center '>
{cartInfo == null ?( <i className='fa-solid fa-spinner fa-spin'></i>) :( cartInfo.numOfCartItems) || 0}
</span>
</Link>

<ul className='flex gap-6 items-center '>
  <li>
    <a href="Https://www.facebook.com"></a>
    <i className='fa-brands fa-facebook'></i>
  </li>
  <li>
    <a href="Https://www.twitter.com"></a>
    <i className='fa-brands fa-twitter'></i>
  </li>
  <li>
    <a href="Https://www.youtube.com"></a>
    <i className='fa-brands fa-youtube'></i>
  </li>
  <li>
    <a href="Https://www.instagram.com"></a>
    <i className='fa-brands fa-instagram'></i>
  </li>

</ul>


 <ul className='flex gap-6 items-center'>
{! token ?<>
  <li>
  <NavLink className={({isActive})=>{
    return `relative  before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:bg-primary  before:absolute before:left-0 before:-bottom-1 ${
      isActive ? "font-bold before:w-full" :"before:w-0"
  }`;
  }} to="/auth/login">Login
  </NavLink>
</li>
<li>
  <NavLink className={({isActive})=>{
    return `relative  before:h-[2px] hover:before:w-full hover:font-bold before:transition-[width] before:duration-300 before:bg-primary  before:absolute before:left-0 before:-bottom-1 ${
      isActive ? "font-bold before:w-full" :"before:w-0"
  }`;
  }} to="/auth/signup">sign up</NavLink>
</li>
</> :<li className=' cursor-pointer'>
  <span onClick={logOut} >
    <i className='fa-solid fa-right-from-bracket text-2xl '></i>
  </span>
</li> }


 </ul>

    </div>
   </nav>
   
   
   </>
  )
}
