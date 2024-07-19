import React from 'react'
import {cilArrowCircleRight} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
function ShopnowCard(props) {
  return (
    <>
      
      <div className=' text-white font-bold cursor-pointer group relative lg:w-[400px]  sm:w-[45%] w-full overflow-hidden  h-[250px] ' >
         <img className='w-full h-full object-cover transition-all ease-in-out duration-150  group-hover:scale-[1.1]' src={props.image} alt="" />
       <div className=' pt-6 pl-6 absolute clip-diagonal z-10 top-0 left-0 w-full h-full bg-[rgb(210,23,55)]/95' >
          <h1 className='text-3xl tracking-tighter leading-6' > {props.name}</h1>
         <h1 className='text-3xl tracking-tighter ' >Collection </h1>
         <button className=' mt-4 flex gap-x-3 items-center font-semibold group-hover  ' >Shop now  <CIcon icon={cilArrowCircleRight} className='w-[15px] relative left-0 h-[15px]   transition-all ease-in-out duration-150' ></CIcon> </button>
       </div>
      </div>
    </>
  )
}

export default ShopnowCard
