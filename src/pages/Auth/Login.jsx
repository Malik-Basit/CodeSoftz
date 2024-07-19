import React, { useState } from 'react'
import singup from '../../assets/Images/singup.jpg'
import { useNavigate,Link } from 'react-router-dom';
const Login = () => {
    // const Navigate = useNavigate ();
    const [data , setdata]= useState({
         name:'',
         email:'',
         password:'',
         checked:false
     })
     const Navigate = useNavigate ();
     const handleSubmit=(e)=>{
         e.preventDefault();
         const Logindata= JSON.parse(localStorage.getItem('user'));
         console.log(Logindata);
         if(data.name === Logindata.name&&data.password === Logindata.password){
            Navigate('/');
            localStorage.setItem('Login',true)
         }

     }
 
    return (
        <div className= "w-full h-screen bg-no-repeat z-0 flex items-center	bg-center bg-cover		  "  style={{backgroundImage:`url(${singup})`}} >
        <div className='overlay w-full h-screen absolute top-0 z-10 bg-gradient-to-r from-[rgb(30,31,41)] to-[rgb(21,22,29)] opacity-[.85] ' >
        </div>
        <div className='w-[60vw] mx-auto  h-[90vh] bg-white rounded-md z-20 p-4 px-[10vw]'>
            <h1 className='text-3xl text-center mt-6 poppins-semibold' >LOGIN ACCOUNT</h1>
            <form action="" className='' >
                <input required onChange={(e)=>{setdata(data=>({...data,name:e.target.value}))}} value={data.name} className='w-full p-4 border my-5 focus:outline-[gray] ' type="text" name="name" id="" placeholder='Username' />
                <input required onChange={(e)=>{setdata(data=>({...data,password:e.target.value}))}} className='w-full p-4 border my-5  focus:outline-[gray]' type="password" name="password" id="" placeholder='Enter Your Password' />
                <input className='inline mx-3' onClick={(e)=>{setdata(data=>({...data,checked:data.checked=!data.checked}))}}  type="checkbox" name="checked" id="check" />
                <label htmlFor="check">I agree all statements in <a href="# " className='underline font-semibold ' >Terms of service</a></label>
                <input onClick={handleSubmit} className='w-full p-4 border bg-gradient-to-r from-[rgb(30,31,41)] to-[rgb(21,22,29)] opacity-[0.8] poppins-bold rounded-md cursor-pointer text-white  my-5' type="button" value="Login" />
            </form> 
            <h2>Have Not already an account ? <Link className='underline font-semibold' to={'/singup'} >Create account here</Link></h2>
        </div>
        </div>
      )
}

export default Login
