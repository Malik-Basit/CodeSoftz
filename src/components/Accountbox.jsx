import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilAccountLogout} from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
function Accountbox() {
  
  const Navigate=useNavigate();

  function handleLogOut(){
    localStorage.setItem('Login',false);
  if(localStorage.getItem('Login')==='false'){
    Navigate('/login')
  }
  }


  return (
    <div className=' w-[200px] md:w-[300px]  flex flex-col items-center justify-center h-auto p-5 bg-black/90 rounded-xl' >
        <div className='mt-1 flex gap-x-2 md:gap-x-4 items-center '>
          <div className=" w-10 h-10 md:md:w-20 md:h-20 rounded-full bg-red-300"></div>
          <div>
          <h3 className='text-white text-sm tracking-tighter '> John Doe</h3>
          <h4 className='text-white text-sm tracking-tighter leading-none'>johndoe@example.com</h4>
          </div>
        </div>
      <button onClick={handleLogOut} className='  mt-4 py-3 px-5 bg-white text-black rounded-xl flex items-center gap-x-4 font-bold text-sm hover:bg-gray-400'>
         <CIcon icon={cilAccountLogout} className='w-[17px] rotate-[180deg]  font-bold' ></CIcon> Log Out</button>
    </div>
  )
}

export default Accountbox
