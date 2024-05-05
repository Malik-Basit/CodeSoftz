import React, { useState } from 'react'
import singup from '../../assets/Images/singup.jpg'
import { Link,useNavigate } from 'react-router-dom'
const Singup = () => {
    const Navigate = useNavigate ();
   const [data , setdata]= useState({
        name:'',
        email:'',
        password:'',
        checked:false
    })
   const [AllData,setAllData] = useState([])
    
    const submit = (e)=>{
        e.preventDefault();
        setAllData(prev=>[...prev, data]);
        console.log(AllData)
        if(data.checked&&data.email&&data.password.length>10&&data.name){
            Navigate('/login')
        }
    }
  return (
    <div className= "w-full h-screen bg-no-repeat z-0 flex items-center	bg-center bg-cover		  "  style={{backgroundImage:`url(${singup})`}} >
    <div className='overlay w-full h-screen absolute top-0 z-10 bg-gradient-to-r from-[rgb(30,31,41)] to-[rgb(21,22,29)] opacity-[.85] ' >
    </div>
    <div className='w-[60vw] mx-auto  h-[90vh] bg-white rounded-md z-20 p-4 px-[10vw]'>
        <h1 className='text-3xl text-center mt-6 poppins-semibold' >CREATE ACCOUNT</h1>
        <form action="" className='' >
            <input required onChange={(e)=>{setdata(data=>({...data,name:e.target.value}))}} value={data.name} className='w-full p-4 border my-5 focus:outline-[gray] ' type="text" name="name" id="" placeholder='Enter Your Name' />
            <input required onChange={(e)=>{setdata(data=>({...data,email:e.target.value}))}} className='w-full p-4 border my-5 focus:outline-[gray]' type="emial" name="emsil" id="" placeholder='Enter Your Emial'  />
            <input required onChange={(e)=>{setdata(data=>({...data,password:e.target.value}))}} className='w-full p-4 border mt-3 mb-2 focus:outline-[gray]' type="password" name="password" id="" placeholder='Enter Your Password' />
           {data.password.length>0&&data.password.length<10?<p className=' text-yellow-300 poppins-semibold'>Password is weak</p>:null}
            <input className='inline mx-3' onClick={(e)=>{setdata(data=>({...data,checked:data.checked=!data.checked}))}}  type="checkbox" name="checked" id="check" />
            <label htmlFor="check">I agree all statements in <a href="# " className='underline font-semibold ' >Terms of service</a></label>
            <input onClick={submit} className='w-full p-4 border bg-gradient-to-r from-[rgb(30,31,41)] to-[rgb(21,22,29)] opacity-[0.8] poppins-bold rounded-md cursor-pointer text-white  my-5' type="button" value="Sing up" />
        </form> 
        <h2>Have already an account ? <Link className='underline font-semibold' >Login here</Link></h2>
    </div>
    </div>
  )
  
}

export default Singup
