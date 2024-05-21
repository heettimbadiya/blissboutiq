import React from "react";
import "../../assets/styles/home.css";
import MainSlider from "../../components/Home/MainSlider";
import ProductImages from "../../components/Home/ProductGrid";
import Category from "../../components/Home/Category";
import Category2 from "../../components/Home/Category2";
import HandPickedForYou from "../../components/Home/HandPickedForYou";
import SingleProduct from "../../components/Home/SingleProduct";
import ProductListing from "../../components/Home/ProductListing";
const Home = () => {
  return (
    <>
      <MainSlider />
      <Category2 />
      {/* <Category /> */}
      <ProductImages />
      <HandPickedForYou />
      {/* <ProductListing /> */}
      {/* <SingleProduct /> */}
    </>
  );
};

export default Home;
