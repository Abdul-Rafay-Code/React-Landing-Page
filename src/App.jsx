import React from 'react'
import Navbar from './component/navbar/Navbar'
import HeroSection from './component/herosection/HeroSection'
import FooterWithSitemap from './component/footer/Footer'
import Layout from './component/layout/Layout'
import Cards from './component/card/Cards'
import Carosel from './component/carosel/Carosel'
import AllProduct from './component/allproduct/AllProduct'
import BlogCard from './component/blog/Blog'

const App = () => {
 
  return (
    <>
   <Layout >
    <HeroSection />
    <Cards/>
    <Carosel />
    <AllProduct />
    <Carosel />
    <BlogCard />
   </Layout >
   </>
  )
}

export default App