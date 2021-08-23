import React from "react";
import "./HorizontalTab.scss";
import Cart from "./Cart";
import SliderCarousel from "./SliderCarousel";
import { useGlobalContext } from "../context";

function HorizontalTab({ tabList }) {
  const { tab, setTab, tabProducts } = useGlobalContext();

  return (
    <section className="horizontal-tabs">
      <ul className="horizontal-tabs__list">
        {tabList.map((title, index) => {
          return (
            <li className="horizontal-tabs__item" key={index}>
              <button
                className={`btn ${title === tab ? "btn--primary" : ""}`}
                onClick={() => setTab(title)}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
      <SliderCarousel>
        {tabProducts.map((item, index) => (
          <Cart {...item} key={index} />
        ))}
      </SliderCarousel>
    </section>
  );
}

export default HorizontalTab;
