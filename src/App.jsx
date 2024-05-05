import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout,Home,Contact,About,Cart,Nopage,Login,Singup} from './import_export.js';
function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Nopage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/singup' element={<Singup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
