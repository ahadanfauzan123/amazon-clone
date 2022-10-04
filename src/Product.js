import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>i am a lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>79.99</strong>
        </p>
      </div>
    </div>
  );
}

export default Product;
