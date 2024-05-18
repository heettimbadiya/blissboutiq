import React from "react";
import Home from "./pages/Home/Home";
import Header from './components/global/header/Header';
import Footer from './components/global/footer/Footer';
import Profile from "./components/profile/Profile";
import MyData from "./components/profile/MyData";
import { Route, Routes } from "react-router-dom";
import OrderHistory from "./components/profile/OrderHistory";
import MyWishlist from "./components/profile/MyWishlist";
import Offer from "./components/profile/Offer";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/myData" element={<MyData />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/myWishilist" element={<MyWishlist />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
