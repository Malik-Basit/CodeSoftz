import React, { useEffect, useRef } from 'react'
import CIcon from '@coreui/icons-react';
import {cilHeart,cilTransfer,cilLowVision,cilCart} from '@coreui/icons'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react';


function AddtocartCard() {
    const isDiscount=true;
    let a=440,cart=0;
    const handlecart=()=>{
      cart++; }         
  
  return (
    <div  className=" group1 group relative w-full  h-[80vh] duration-150  transition-all ">
    <div    className=" group1child absolute z-10 box_shadow   w-full bg-white transition-all duration-200  ">
      <div className="top flex w-full justify-end gap-x-3 pt-5 pr-3">
        <button className="text-sm tracking-tighter leading-none border-2 px-2 py-1 border-red-700 text-red-700">
          -30%
        </button>
        <button className="px-2 text-white py-1 bg-red-700 border-red-700 border-2 text-sm tracking-tighter leading-none">
          New
        </button>
      </div>
      <div className="mid w-full">
        <div className="img-section w-full h-[200px] my-5">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/electro/img/product04.png.webp"
            alt=""
          />
        </div>
        <div className="content p-2 text-center">
          <h4 className="text-dark_gray">CATEGORY</h4>
          <h1 className="font-bold tracking-tighter">PRODUCT NAME GOES HERE</h1>
          <span className="text-red-700 font-bold tracking-tighter mr-2">$980.00</span>
          <span className={` ${isDiscount && 'line-through'} text-dark_gray`}>$990.00</span>
        </div>
  
        <div className="eye-section mt-5 py-3 flex items-center justify-center gap-x-4 border-t-2">
          <div className="cursor-pointer transition-all ease-in-out duration-300 rounded-lg p-2 delay-100 hover:bg-gray-300 hover:rounded-full">
            <CIcon className="w-5" icon={cilHeart} />
          </div>
          <div className="cursor-pointer transition-all ease-in-out duration-300 rounded-lg p-2 delay-100 hover:bg-gray-300 hover:rounded-full">
            <CIcon className="w-5" icon={cilTransfer} />
          </div>
          <div className="cursor-pointer transition-all ease-in-out duration-300 rounded-lg p-2 delay-100 hover:bg-gray-300 hover:rounded-full">
            <CIcon className="w-5" icon={cilLowVision} />
          </div>
        </div>
      </div>
    </div>
    <div  className=" absolute   addtocart transition-all ease-linear duration-700 z-0 w-full text-sm tracking-tighter font-semibold flex items-center justify-center bg-black/90 h-16">
      <button onClick={handlecart}  className="px-10 py-2 group/btn flex border-2 border-red-700 hover:gap-x-5 transition ease-in-out duration-500 text-sm tracking-tighter font-semibold rounded-full bg-red-700 text-white hover:bg-white hover:text-red-700 items-center">
        <CIcon className="w-3 hidden group-hover/btn:inline-block" icon={cilCart} /> Add to Cart
      </button>
    </div>
  </div>
  )
}

export default AddtocartCard
