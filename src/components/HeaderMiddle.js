import React from "react";
import "./HeaderMiddle.scss";
import { FaShoppingBasket } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

function HeaderMiddle() {
  return (
    <section className="header-middle">
      <div className="header-cart">
        <FaShoppingBasket className="cart-icon" />
        <span>0 Items</span>
        <AiFillCaretDown className="cta-icon" />
      </div>
      <div className="header-search">
        <form>
          <input type="text" placeholder="Search products..." />
          <button className="btn btn--primary btn--search">
            <BiSearch />
          </button>
        </form>
      </div>
    </section>
  );
}

export default HeaderMiddle;
