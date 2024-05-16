import React from 'react'
import MainSlider from '../../components/Home/MainSlider'
import '../../assets/styles/home.css'
import ProductListing from '../../components/Home/ProductListing'
import Category from '../../components/Home/Category'
const Home = () => {
  return (
    <>
      <MainSlider />
      {/* <ProductListing /> */}
      <Category />
    </>
  )
}

export default Home
