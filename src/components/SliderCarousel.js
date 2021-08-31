import React from "react";
import Carousel, { consts } from "react-elastic-carousel";

import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

import "./SliderCarousel.scss";
import { useGlobalContext } from "../context";

function SliderCarousel({ children, itemsToShow = 4 }) {
  const { tabProducts } = useGlobalContext();

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
      carouselRef.current.goTo(tabProducts.length);
      carouselRef.current.state.transitionMs = 700;
    } else {
      carouselRef.current.state.transitionMs = 150;
    }
  };

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? <FiArrowLeftCircle /> : <FiArrowRightCircle />;
    const position = type === consts.PREV ? "pre" : "next";
    return (
      <button
        className={`btn-direction btn--slider ${position}`}
        onClick={onClick}
      >
        {pointer}
      </button>
    );
  };

  const setting = {
    className: "carousel-university",
    ref: carouselRef,
    onPrevStart: onPrevStart,
    onNextStart: onNextStart,
    itemsToShow: itemsToShow,
    renderArrow: myArrow,
  };

  return (
    <Carousel
      {...setting}
      style={{ position: "relative" }}
      easing="linear"
      transitionMs={200}
    >
      {children}
    </Carousel>
  );
}

export default SliderCarousel;
