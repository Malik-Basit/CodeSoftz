import React,{ useState } from 'react'
import usecontext from './usecontext.jsx'
function ContextProvider( props ) {
    const [istrue,setIstrue]=useState(false);
    const toggle=()=>{
     setIstrue(!istrue);
    }
  return (
   <usecontext.Provider value={{istrue,toggle}} >
    {props.children}
   </usecontext.Provider>
  )
}

export default ContextProvider
