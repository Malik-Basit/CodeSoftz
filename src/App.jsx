import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout,Home,Category,Cameras, HotDeals,Smartphones,Accessories,Laptops,Cart,Nopage,Login,Singup,Protected} from './import_export.js';
import ContextProvider from './Hooks/ContextProvider.jsx';
function App() { 
  return (
    <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route path='/' element={<Protected/>} >
         <Route index element={<Home />} />
         </Route>

          <Route path="/Accessories" element={<Accessories />} />
          <Route path="/Smartphone" element={<Smartphones />} />
          <Route path="/Camera" element={<Cameras />} />
          <Route path="/Laptop" element={<Laptops />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path='Category' element={<Category />} />
          <Route path="/HotDeals" element={<HotDeals />} />
        </Route>
        <Route path="*" element={<Nopage />} />
        <Route path='/singup' element={<Singup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  )
}

export default App
