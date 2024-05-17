import React from 'react'
import MainSlider from '../../components/Home/MainSlider'
import '../../assets/styles/home.css'
import ProductListing from '../../components/Home/ProductListing'
import Category from '../../components/Home/Category'
import ProductImages from '../../components/Home/ProductGrid';
import SingalProduct from "../../components/Home/SingalProduct";
const Home = () => {
  return (
    <>
      <MainSlider />
      <Category />
      <ProductImages />
      <ProductListing />
      <SingalProduct />
    </>
  );
};

export default Home;
