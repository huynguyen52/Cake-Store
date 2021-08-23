import React, { useEffect, useState } from "react";
import "./Slider.scss";
import { Link } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import data from "../data";

export default function Slider() {
  const [index, setIndex] = useState(1);

  const { slides } = data;

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slides.length]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="slider">
      <ul className="slides">
        {slides.map((img, slideIndex) => {
          let toggle = "";
          if (slideIndex === index) {
            toggle = "show";
          }

          return (
            <li className={toggle} key={slideIndex}>
              <Link to="/">
                <img src={img} alt={`slide ${slideIndex}`} />
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="control-paging">
        {slides.map((img, slideIndex) => {
          let active = "";
          if (index === slideIndex) {
            active = "active";
          }
          return (
            <li
              className={active}
              key={slideIndex}
              onClick={() => setIndex(slideIndex)}
            >
              <div></div>
            </li>
          );
        })}
      </ul>
      <button className="btn-direction pre" onClick={() => setIndex(index - 1)}>
        <FiArrowLeftCircle />
      </button>
      <button
        className="btn-direction next"
        onClick={() => setIndex(index + 1)}
      >
        <FiArrowRightCircle />
      </button>
    </div>
  );
}
