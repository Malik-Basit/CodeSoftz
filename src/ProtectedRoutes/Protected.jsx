import React from 'react'
import {Outlet,Navigate}  from 'react-router-dom'
const Protected = () => {
    
    const login =localStorage.getItem('Login');
  return (
    <div>
      {login?<Outlet/>:<Navigate to={'/login'} ></Navigate>}
    </div>
  )
}

export default Protected
