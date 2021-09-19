import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Widget from "./Widget";
import "./Footer.scss";
import { useGlobalContext } from "../context";
import { useState } from "react";
import { useWindowScroll } from "react-use";

function Footer() {
  const { contact } = useGlobalContext();
  const [riseUp, setRiseUp] = useState(false);
  const { y } = useWindowScroll();
  useEffect(() => {
    if (y > footerOffsetTop.current.offsetTop - 677) {
      setRiseUp(true);
    } else {
      setRiseUp(false);
    }
  }, [y]);

  const footerOffsetTop = useRef(null);

  return (
    <section id="footer" ref={footerOffsetTop}>
      <div className="top-div footer__top-div"></div>
      <div className="footer-center">
        {contact.map((item, index) => {
          return (
            <Widget {...item} riseUp={riseUp ? "rise-up" : ""} key={index} />
          );
        })}
      </div>
      <div className="footer-bottom">
        <ul className="footer-links">
          <li className="footer-links__item">
            <Link to="/">Home</Link>
          </li>
          <li className="footer-links__item">
            <Link to="/">Shop</Link>
          </li>
          <li className="footer-links__item">
            <Link to="/">Blog</Link>
          </li>
          <li className="footer-links__item">
            <Link to="/">Shortcodes</Link>
          </li>
          <li className="footer-links__item">
            <Link to="/">Features</Link>
          </li>
          <li className="footer-links__item">
            <Link to="/">Media</Link>
          </li>
          <li className="footer-links__item">
            <Link to="/">About Us</Link>
          </li>
        </ul>
        <div className="site-info">
          © 2021<Link to="/">Templatemela</Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
