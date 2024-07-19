import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  CIcon  from '@coreui/icons-react';
import {cilX} from '@coreui/icons';
import usecontext from '../Hooks/usecontext';
import { useContext } from 'react';
const NavBar = () => {
  const data = useContext(usecontext);
  const [color,setcolor] =useState(0)
  const checkIndex = (index) => {
      setcolor(index);
  }
  return (
    <>
      <nav className= ' hidden md:block px-10 py-5 border-b-4 border-bg-gray '  >
      
       <ul className='flex gap-x-6 flex-wrap' >
       { ["Home","HotDeals","Category","Laptop","Smartphone","Camera","Accessories"].map((item,index)=>{

         return <li key={index} onClick={()=>{checkIndex(index)}} className={'hover:text-[rgb(210,23,55)]  transition-all duration-100 ease-out hover:cursor-pointer' + (color==index ? " text-red before:w-full transition-all duration-200 ":"")} ><Link to={`${ index==0? '/' : '/'+item }`} >{item}</Link></li>

       })
}

       </ul>

      </nav>
     {
      data.istrue ?  
        <nav className= ' z-50 absolute top-0 left-0 w-1/2 bg-white h-screen block md:hidden px-4 py-5  border-b-4 border-bg-gray '  >
         
        <button onClick={()=>{data.toggle()}} className='font-bold text-sm absolute right-5 top-4 text-black' ><CIcon icon={cilX} className='w-[30px]'  ></CIcon>  </button>

      <ul className='flex gap-y-6 flex-col mt-10 ' >
      { ["Home","HotDeals","Category","Laptop","Smartphone","Camera","Accessories"].map((item,index)=>{

        return <li key={index} onClick={()=>{checkIndex(index)}} className={'hover:text-[rgb(210,23,55)] w-fit  transition-all duration-100 ease-out hover:cursor-pointer' + (color==index ? " text-red before:w-full transition-all duration-200 ":"")} ><Link to={`${ index==0? '/' : '/'+item }`} >{item}</Link></li>

      })
}

      </ul>

     </nav>
      :""
     }
    </>
  )
}

export default NavBar
