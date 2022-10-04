import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          alt=""
        />

        <div className="home__row">
          {/**product */}
          <Product />
          {/**product */}
          <Product />
        </div>
        <div className="home__row">
          {/**product */}
          <Product />
          {/**product */}
          <Product />
          {/**product */}
          <Product />
        </div>
        <div className="home__row">
          {/**product */}
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
