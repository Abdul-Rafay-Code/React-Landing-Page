import React from 'react'
import Layout from '../layout/Layout'
import HeroSection from '../herosection/HeroSection'
import Carosel from '../carosel/Carosel'
import AllProduct from '../allproduct/AllProduct'
import BlogCard from '../blog/Blog'
import Cards from '../card/Cards'

const Home = () => {
  return (
    <Layout >
    <HeroSection />
    <Cards/>
    <Carosel />
    <AllProduct />
    <Carosel />
    <BlogCard />
   </Layout >
  )
}

export default Home