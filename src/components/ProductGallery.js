import React from "react";
import { FaSearchPlus } from "react-icons/fa";

import { useGlobalContext } from "../context";
import Carousel, { consts } from "react-elastic-carousel";
import cake4 from "../assets/images/4-300x300.png";
import "./ProductGallery.scss";

function ProductGallery({ width }) {
  const { products } = useGlobalContext();

  const images = products[0].images;

  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
      carouselRef.current.state.transitionMs = 700;
    } else {
      carouselRef.current.state.transitionMs = 150;
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(images.length);
      carouselRef.current.state.transitionMs = 700;
    } else {
      carouselRef.current.state.transitionMs = 150;
    }
  };

  const myArrow = ({ type, onClick, isEdge }) => {
    const position = type === consts.PREV ? "pre" : "next";
    return (
      <button
        className={`btn btn-control ${position}`}
        onClick={onClick}
      ></button>
    );
  };

  const setting = {
    // className: "carousel-university",
    ref: carouselRef,
    onPrevStart: onPrevStart,
    onNextStart: onNextStart,
    itemsToShow: 3,
    renderArrow: myArrow,
  };

  return (
    <section
      style={{ width: width ? width : "300px" }}
      className="product-gallery"
    >
      <figure className="flex-viewport">
        <img src={cake4} alt="img" />
        <button className="product-gallery__trigger">
          <FaSearchPlus />
        </button>
      </figure>
      <div className="flex-control">
        <Carousel {...setting}>
          {images.map((item, index) => {
            return (
              <figure className="img-wrapper" key={index}>
                <img src={item} alt="anh 1" />
              </figure>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default ProductGallery;
