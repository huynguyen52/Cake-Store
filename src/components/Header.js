import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="top-div"></div>
      <div className="container">
        <section className="top-bar">
          <ul className="header__links">
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
            <li>
              <Link to="/login">Contact us</Link>
            </li>
            <li>
              <Link to="/login">Wishlist</Link>
            </li>
          </ul>
        </section>
        <nav className="nav-bar">
          <ul className="menu">
            <li className="menu__item active">
              <Link to="/">Home</Link>
            </li>
            <li className="menu__item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="menu__item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="menu__item">
              <Link to="/short-code">Shortcodes</Link>
            </li>
            <li className="menu__item">
              <Link to="/features">features</Link>
            </li>
            <li className="menu__item">
              <Link to="/media">Media</Link>
            </li>
            <li className="menu__item">
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
        <Link to='/' className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
