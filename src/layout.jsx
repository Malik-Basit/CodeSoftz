import React from 'react'
import {NavBar} from './import_export.js'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
   <Outlet/>
    </div>
  )
}

export default Layout;
