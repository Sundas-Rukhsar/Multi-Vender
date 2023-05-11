import React from "react";
import "./Home.css";
import Carousel from "../../Components/Carousel/Carousel";
import Cetagories from "../../Components/Cetagories/Cetagories";
import Why from "../../Components/WhyIsThis/Why";
import Footer from "../../Components/Footer/Footer";
import Product from "../../Components/Product";
// import Scroll from "../../Components/Scroll/Scroll";

const Home = () => {
  return (
    <div>
      <div className="home-wrapper" style={{ marginTop: "160px" }}>
        <Carousel />
        {/* <Scroll /> */}
        <Cetagories />
        <Product />
        <Why />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
