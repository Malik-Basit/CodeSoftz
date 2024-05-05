import React from 'react'
import {outlet,Navigate}  from 'react-router-dom'
const index = () => {
    
    const login =localStorage.getItem('login')

  return (
    <div>
      {login?<outlet/>:<Navigate to={'/login'} ></Navigate>}
    </div>
  )
}

export default index
