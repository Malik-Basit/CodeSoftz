import React,{useState} from 'react'
import ShopnowCard from '../../components/ShopnowCard'
import { Link } from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import AddtocartCard from '../../components/AddtocartCard';

const Hero = () => {
  const [color,setcolor] =useState(0)
  const handleMouseEnter = (swiper) => {
    swiper.autoplay.stop();
  };

  const handleMouseLeave = (swiper) => {
    swiper.autoplay.start();
  };
  const checkIndex = (index) => {
      setcolor(index);
  }
  return (
    <div className='pt-8 px-10' >
     <div className="cards flex flex-wrap md:flex-nowrap gap-5 ">
     {
[ {name:'Laptop', img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww'}
  ,{name:'Accessories',img:'https://images.unsplash.com/photo-1625750319971-ee4b61e68df8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFjY2Vzb3JpZXN8ZW58MHx8MHx8fDA%3D'},
   {name:'cameras',img:'https://images.unsplash.com/photo-1620440589020-9cf02752bdcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbWVyYXN8ZW58MHx8MHx8fDA%3D'}
].map(( item,index)=>{
  return <ShopnowCard key={index} name={item.name}  image={item.img}  />
})
     }
     </div>
     
     <div className=" mt-20 flex flex-wrap gap-y-3 justify-between items-center" >
      <div className="left">
        <h1 className="text-2xl  font-bold" >NEW PRODUCTS</h1>
      </div>
      <div className="right">
      <nav >
      <ul className='flex gap-x-6 gap-y-2 flex-wrap' >
      { ["Laptop","Smartphone","Camera","Accessories"].map((item,index)=>{

        return <li key={index} onClick={()=>{checkIndex(index)}} className={'hover:text-[rgb(210,23,55)]  font-bold  transition-all duration-100 ease-out hover:cursor-pointer' + (color==index ? " text-red before:w-full transition-all duration-200 ":" text-drak_gray ")} >{item}</li>

      })
}

      </ul>

     </nav>
      </div>
     </div>  
      <div className=" relative w-full slider mt-4 h-[97vh]  ">
      <Swiper  className='h-full w-full p-2'
      modules={[ A11y,Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      draggable={true}
      autoplay={{delay:2000,disableOnInteraction: false}}
     onSwiper={(swiper) => {
      swiper.el.addEventListener('mouseenter', () => handleMouseEnter(swiper));
      swiper.el.addEventListener('mouseleave', () => handleMouseLeave(swiper));
    }}
     loop={true}
    >
     {
     [1,2,3,4,5,6,7].map((p,i)=>{
     return (
     <SwiperSlide key={i} className= '!w-[200px] md:!w-[260px]  h-full ' >
     <AddtocartCard  />
   </SwiperSlide>
     )
     })
     }
    
    </Swiper>
      </div>
    </div>
  
  )
}

export default Hero
