import React from "react";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "src/styles/pages/product";

export default function index() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta</h1>
        <span>90,90</span>
        <p>lorem sssssssssssssssssssssssssssssssssssssssssssss</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
