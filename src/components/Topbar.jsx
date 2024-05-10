import React from 'react'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react';
import {cilMenu,cilDollar,cilHeart,cilCart,cilPhone,cilEnvelopeClosed,cilLockLocked,cilLocationPin} from '@coreui/icons'
import NavBar from './Navbar';
const Topbar = () => {
  return (
    <>
    <div className='border-b-4 border-[rgb(210,23,55)]' >
  <div className="flex justify-between flex-wrap px-6 py-2 bg-light_black w-full">
    <div className="left">
      <ul className='flex gap-x-7 flex-wrap' >
        <li className='flex gap-x-2 text-red-500' > <span  > <CIcon className='w-[1.5rem]' icon={cilPhone} ></CIcon> </span> <span className='text-white text-sm hover:text-[rgb(210,23,55)] cursor-pointer' > +021-95-51-84</span> </li>
        <li className='flex gap-x-2 text-red-500' > <span  > <CIcon className='w-[1.5rem]' icon={cilEnvelopeClosed}></CIcon> </span> <span className='text-white text-sm hover:text-[rgb(210,23,55)] cursor-pointer' >email@email.com</span>  </li>
        <li className='flex gap-x-2 text-red-500' > <span> <CIcon className='w-[1.5rem]' icon={cilLocationPin} ></CIcon> </span> <span className='text-white text-sm hover:text-[rgb(210,23,55)] cursor-pointer' >1734 Stonecoal Road</span>  </li>
      </ul>
    </div>
    <div className="right">
    <ul className='flex gap-x-7 flex-wrap ' >
        <li className='flex gap-x-2 text-red-500' > <span ><CIcon className='w-[1.5rem]' icon={cilDollar} ></CIcon></span> <span className='text-white text-sm hover:text-[rgb(210,23,55)] cursor-pointer' > USD</span> </li>
        <li className='flex gap-x-2 text-red-500' > <span> <CIcon className='w-[1.5rem]' icon={cilLockLocked} ></CIcon> </span> <Link className='text-white text-sm hover:text-[rgb(210,23,55)] cursor-pointer' >My Account</Link>  </li>
      </ul>
    </div>
  </div>

<div className="flex gap-y-7 justify-center md:justify-between flex-col md:flex-row items-center flex-wrap py-5 px-6 bg-dark_black w-full ">
<div className="left">
    <h1 className='text-[3rem] uppercase text-white poppins-bold flex items-center gap-x-2 ' >CodeSoftz <h1 className='text-[3rem] flex items-center h-full text-red' >.</h1></h1>
</div>
<div className="middle w-full md:w-auto flex items-center ">
    <div className=' text-black flex w-full md:w-auto ' >
    <select id="Category"  className='p-2 rounded-s-full border-r-2 px-3'>
  <option value="Category1">Category1</option>
  <option value="Category2">Category2</option>
  <option value="Category3">Category3</option>
  <option value="Category4">Category4</option>
</select>
<input type="search" name="" id="" className=' w-full md:w-[20rem] px-3' placeholder='Search here' />
<button className=' cursor-pointer text-sm poppins-bold text-white bg-red px-4 rounded-e-full' >Search</button>    </div>
</div>
<div className="right w-full md:w-auto justify-end flex gap-x-7 gap-y-3 ">
<div className="design text-white">
         <div className="icon w-fit relative">
            <CIcon className=' md:w-[2vw] w-[1.5rem]' icon={cilHeart} ></CIcon>
            <div className="circle w-5 h-5 rounded-full bg-red flex items-center justify-center text-xs poppins-bold text-white absolute right-[-10px] top-[-15px]">2</div>
         </div>
        <p className='text-xs mt-2 poppins-semibold' >Your Wishlist</p>
    </div>
    <div className="design text-white">
         <div className="icon w-fit relative">
          <CIcon className=' md:w-[2vw] w-[1.5rem]' icon={cilCart} ></CIcon>
            <div className="circle w-5 h-5 rounded-full bg-red flex items-center justify-center text-xs poppins-bold text-white absolute right-[-10px] top-[-15px]">2</div>
         </div>
        <p className='text-xs mt-2 poppins-semibold' >Your Cart</p>
    </div>
    <div className="menu text-white block  md:hidden">
       <CIcon  className=' md:w-[2vw] w-[1.5rem]' icon={cilMenu} size="sm" />
        <h1 className='text-xs mt-2 poppins-semibold' >Menu</h1>
    </div>
</div>
</div>

    </div>
    <div>
        <NavBar/>
    </div>
    </>
  ) 
}

export default Topbar
