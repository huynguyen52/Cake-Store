import React from "react";

import "./Products.scss";
import SliderCarousel from "../components/SliderCarousel";
import { useGlobalContext } from "../context";
import Cart from "../components/Cart";

function Products({ title = "You may also like ..." }) {
  const { tabProducts } = useGlobalContext();
  return (
    <section className="products up-sells">
      <h2>{title}</h2>
      <SliderCarousel itemsToShow={3} upSell={true}>
        {tabProducts.map((item, index) => (
          <Cart {...item} key={index} />
        ))}
      </SliderCarousel>
    </section>
  );
}

export default Products;
