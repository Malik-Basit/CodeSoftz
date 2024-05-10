import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [color,setcolor] =useState(0)
  const checkIndex = (index) => {
      setcolor(index);
      console.log(color)
  }

  return (
    <>
      <nav className='w-full px-10 py-5 border-b-4 border-bg-gray '  >
      
       <ul className='flex gap-x-6' >
       { ["Home","HotDeals","Category","Laptop","Smartphone","Camera","Accessories"].map((item,index)=>{

         return <li key={index} onClick={()=>{checkIndex(index)}} className={'hover:text-[rgb(210,23,55)]  transition-all duration-100 ease-out hover:cursor-pointer' + (color==index ? " text-red before:w-full transition-all duration-200 ":"")} ><Link to={`${ index==0? '/' : '/'+item }`} >{item}</Link></li>

       })
}

       </ul>

      </nav>
    </>
  )
}

export default NavBar
