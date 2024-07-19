import React from 'react'
import CIcon from '@coreui/icons-react'
import {cibGroupon,cibInstagram,cibLinkedin,cibFacebookF} from '@coreui/icons'
const Footer = () => {
  return (
    <>
    <div className='w-full h-screen  mt-[7vw] border-t-2' >
     
     <div className="email_box w-full  flex flex-col gap-y-10 justify-center items-center h-1/2">
      <h1 className='font-bold text-3xl tracking-tighter' ><span className='font-light' >Sign Up for the</span> NEWSLETTER</h1>
        <div className='flex justify-center w-1/2' >
          <input placeholder='Enter your Email' className='border-2 border-r-0  rounded-l-full w-1/2 py-1 px-5' type="text" name="" id="" />
          <button className='py-1 px-4 bg-red-700 rounded-r-full' >Subscribe</button>
        </div>
        <ul className=' email_buttons group flex gap-x-5' >
           <li><CIcon className='w-4 group-hover:text-red-700' icon={cibGroupon} ></CIcon></li>
           <li><CIcon className='w-4' icon={cibInstagram} ></CIcon></li>
           <li><CIcon className='w-4' icon={cibLinkedin} /></li>
           <li><CIcon className='w-4' icon={cibFacebookF} /></li>
        </ul>

     </div>
     <div className='w-full grid gap-10  grid-cols-4 p-6  text-white bg-black/90 border-t-4 border-red-700 h-1/2' >
    <div className="col text_drak_gray">
      <h1 className='text-2xl text-white font-bold' >ABOUT US</h1>
      <p className='my-5 text-sm' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
       <ul className='text-sm' >
        <li>1734 Stonecoal Road</li>
        <li>+021-95-51-84</li>
        <li>email@email.com</li>
       </ul>
    </div>
    <div className="col">
      <h1 className='text-2xl text-white font-bold'>CATEGORIES</h1>
      <ul className='text-sm mt-5' >
        {['Hot deals',
'Laptops',
'Smartphones',
'Cameras',
'Accessories'].map(function(item,i){
  return <li key={i} >{item}</li>
}) }
      </ul>
    </div>
    <div className="col">
      <h1 className='text-2xl text-white font-bold'>INFORMATION</h1>
      <ul className='text-sm mt-5'>
        {['About',
'Contact',
'Privacy and policy',
'Orders and Returns',
'Terms & Conditions'].map(function(item,i){
  return <li key={i} >{item}</li>
}) }
      </ul>
    </div>
    <div className="col">
      <h1 className='text-2xl text-white font-bold'>SERVICE</h1>
      <ul className='text-sm mt-5'>
        {[' My Account',
'View Cart',
'Wishlist',
'Track my order',
'Help'].map(function(item,i){
  return <li key={i} >{item}</li>
}) }
      </ul>
    </div>
     </div>
    </div>
    <div className="last w-full flex text-white font-light justify-center items-center h-[100px] bg-[rgb(30,31,41)]">
      <p>Copyright ©2024 All rights reserved | This template is made with  by CodeSoftz</p>
    </div>
    </>
  )
}

export default Footer
