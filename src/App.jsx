import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './component/home/Home'
import NoPage from './component/noPage/NoPage';
import ProductsInfo from './component/products/ProductsInfo';
import AllItem from './component/allItem/Item'
import About from './component/about/About';
import Contact from './component/contact/Contact';


const App = () => {
 
  return (
    <>
    <Router>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/productsInfo/:id' element={<ProductsInfo/>} />
        <Route  path='/allItems' element={<AllItem/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route path='/*' element={<NoPage/>} />
        {/* <Route  path='/about' element={<About/>} /> */}
        {/* <Route  path='/contact' element={<Contact/>} /> */}
        {/* <Route  path='/productInfo/:id' element={<ProductInfo/>} /> */}
      </Routes>
    </Router>
   </>
  )
}

export default App