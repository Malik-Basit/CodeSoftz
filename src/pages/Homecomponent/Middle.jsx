import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import CIcon from '@coreui/icons-react';
import {cilChevronCircleRightAlt,cilChevronCircleLeftAlt} from '@coreui/icons'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
const Middle = () => {
  const isDiscount=true
  gsap.registerPlugin(ScrollTrigger);
   useGSAP(()=>{
    const tl = gsap.timeline();
    const tl2=gsap.timeline({
      scrollTrigger:{
        trigger:".main",
        start:"0% 40%",
        end:"bottom 80%",
      },
    })
    tl.to('.image1',{
      x:350,
        duration:1,
      scrollTrigger:{
        trigger:".main",
        // markers:true,
        start:"0% 90% ",
        end:"100% 75%",
        scrub:true
      }
    })
    tl.to('.image2',{
      x:-370,
        duration:1,
      scrollTrigger:{
        trigger:".main",
        // markers:true,
        start:"0% 60% ",
        end:"100% 80%",
        scrub:true
      }
    })
    tl2.from('.circles',{
        y:180,
        duration:.5,
        stagger:.2,
        rotate:180,
        // repeat:-1,
    })
    tl2.from('.text',{
      y:180,
      duration:.5,
      stagger:.2,
  })
   })
 
   const handleMouseEnter = (swiper) => {
    swiper.autoplay.stop();
  };

  const handleMouseLeave = (swiper) => {
    swiper.autoplay.start();
  };
  return (
    <>
    <div className=' main relative flex overflow-hidden items-center justify-center w-full h-[80vh] bg-[rgb(229,230,239)]' >
       <img className=' image1  w-[500px] absolute -left-[500px] top-0' src="https://preview.colorlib.com/theme/electro/img/product08.png" alt="" />
<div className='w-1/2 flex  items-center justify-center flex-col h-full'>
   <div className='flex justify-center overflow-hidden my-2 gap-4' >
   {[{num:"01",t:"Days"},{num:"06",t:"Hours"},{num:"55",t:"Mins"},{num:"60",t:"Seconds"}].map((p,i)=>{
    
    return <div key={i} className=' circles w-[100px]  h-[100px] tracking-tighter text-sm leading-none rounded-full flex flex-col justify-center items-center bg-red-700 text-white '>
    <p className='font-bold text-2xl'>{p.num}</p>
    <p>{p.t}</p>
  </div>
      
  })}
   </div>
  <div className='h-fit flex flex-col items-center overflow-hidden' >
  <h1 className=' overflow-hidden text text-3xl font-bold my-3 tracking-tighter ' >HOT DEAL THIS WEEK</h1>
  <h1 className='text  text-3xl font-light tracking-tighter my-3' >NEW COLLECTION UP TO 50% OFF</h1>
  <button className=' text bg-red-700 my-2 px-6 py-2 text-white font-bold rounded-full ' >Shop Now</button>

  </div>
  

</div>

<img className=' image2 w-[500px] absolute -right-[500px] top-0 ' src="https://preview.colorlib.com/theme/electro/img/product05.png" alt="" />
    </div>
    <div className="top_sellting   mt-[5rem] p-3  px-10 w-full gap-4 flex justify-between h-[80vh] ">
      
    <div className="slider overflow-hidden  w-[80%] h-full  text-black/85  ">
        <div className="top mb-10 px-3  flex justify-between ">
          <h1 className='text-2xl uppercase tracking-tighter leading-none font-bold' >Top Selling</h1>
          <div className="buttons flex gap-2">
            <button>
              <CIcon className='w-4' icon={cilChevronCircleRightAlt} ></CIcon>
            </button>
            <button>
              <CIcon className='w-4' icon={cilChevronCircleLeftAlt} ></CIcon>
            </button>
          </div>
        </div>
        <Swiper  className='h-full w-full p-2'
      modules={[ A11y,Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      draggable={true}
      autoplay={{delay:1000,disableOnInteraction: false}}
     onSwiper={(swiper) => {
      swiper.el.addEventListener('mouseenter', () => handleMouseEnter(swiper));
      swiper.el.addEventListener('mouseleave', () => handleMouseLeave(swiper));
    }}
     loop={true}
    >
     {
     [1,2,3].map((p,i)=>{
     return (
     <SwiperSlide key={i} className= '!w-full  h-full ' >
     {
          [1,2,3].map((p,i)=>{
            return(
               <div key={i} className="slide   my-2  flex w-full items-center gap-x-3">
            <div className='h-20 w-3/12' >
            <img className='w-full h-full bg-cover' src="https://preview.colorlib.com/theme/electro/img/product01.png" alt="" />
            </div>
            <div className="content p-2 text-center">
            <h4 className="text-dark_gray text-xs">CATEGORY</h4>
            <h1 className="font-bold tracking-tighter text-sm">PRODUCT NAME GOES HERE</h1>
            <span className="text-red-700 font-bold tracking-tighter mr-2">$980.00</span>
            <span className={` ${isDiscount && 'line-through'} text-dark_gray`}>$990.00</span>
          </div>
          </div>
            )
          })
        }
   </SwiperSlide>
     )
     })
     }
    
    </Swiper>
      </div>
      <div className="slider overflow-hidden  w-[80%] h-full  text-black/85  ">
        <div className="top mb-10 px-3  flex justify-between ">
          <h1 className='text-2xl uppercase tracking-tighter leading-none font-bold' >Top Selling</h1>
          <div className="buttons flex gap-2">
            <button>
              <CIcon className='w-4' icon={cilChevronCircleRightAlt} ></CIcon>
            </button>
            <button>
              <CIcon className='w-4' icon={cilChevronCircleLeftAlt} ></CIcon>
            </button>
          </div>
        </div>
        <Swiper  className='h-full w-full p-2'
      modules={[ A11y,Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      draggable={true}
      autoplay={{delay:2000,disableOnInteraction: false}}
     onSwiper={(swiper) => {
      swiper.el.addEventListener('mouseenter', () => handleMouseEnter(swiper));
      swiper.el.addEventListener('mouseleave', () => handleMouseLeave(swiper));
    }}
     loop={true}
    >
     {
     [1,2,3].map((p,i)=>{
     return (
     <SwiperSlide key={i} className= '!w-full  h-full ' >
     {
          [1,2,3].map((p,i)=>{
            return(
               <div key={i} className="slide   my-2  flex w-full items-center gap-x-3">
            <div className='h-20 w-3/12' >
            <img className='w-full h-full bg-cover' src="https://preview.colorlib.com/theme/electro/img/product01.png" alt="" />
            </div>
            <div className="content p-2 text-center">
            <h4 className="text-dark_gray text-xs">CATEGORY</h4>
            <h1 className="font-bold tracking-tighter text-sm">PRODUCT NAME GOES HERE</h1>
            <span className="text-red-700 font-bold tracking-tighter mr-2">$980.00</span>
            <span className={` ${isDiscount && 'line-through'} text-dark_gray`}>$990.00</span>
          </div>
          </div>
            )
          })
        }
   </SwiperSlide>
     )
     })
     }
    
    </Swiper>
      </div>
      <div className="slider overflow-hidden  w-[80%] h-full  text-black/85  ">
        <div className="top mb-10 px-3  flex justify-between ">
          <h1 className='text-2xl uppercase tracking-tighter leading-none font-bold' >Top Selling</h1>
          <div className="buttons flex gap-2">
            <button>
              <CIcon className='w-4' icon={cilChevronCircleRightAlt} ></CIcon>
            </button>
            <button>
              <CIcon className='w-4' icon={cilChevronCircleLeftAlt} ></CIcon>
            </button>
          </div>
        </div>
        <Swiper  className='h-full w-full p-2'
      modules={[ A11y,Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      draggable={true}
      autoplay={{delay:3000,disableOnInteraction: false}}
     onSwiper={(swiper) => {
      swiper.el.addEventListener('mouseenter', () => handleMouseEnter(swiper));
      swiper.el.addEventListener('mouseleave', () => handleMouseLeave(swiper));
    }}
     loop={true}
    >
     {
     [1,2,3].map((p,i)=>{
     return (
     <SwiperSlide key={i} className= '!w-full  h-full ' >
     {
          [1,2,3].map((p,i)=>{
            return(
               <div key={i} className="slide   my-2  flex w-full items-center gap-x-3">
            <div className='h-20 w-3/12' >
            <img className='w-full h-full bg-cover' src="https://preview.colorlib.com/theme/electro/img/product01.png" alt="" />
            </div>
            <div className="content p-2 text-center">
            <h4 className="text-dark_gray text-xs">CATEGORY</h4>
            <h1 className="font-bold tracking-tighter text-sm">PRODUCT NAME GOES HERE</h1>
            <span className="text-red-700 font-bold tracking-tighter mr-2">$980.00</span>
            <span className={` ${isDiscount && 'line-through'} text-dark_gray`}>$990.00</span>
          </div>
          </div>
            )
          })
        }
   </SwiperSlide>
     )
     })
     }
    
    </Swiper>
      </div>

    </div>
    </>



  )
}

export default Middle
