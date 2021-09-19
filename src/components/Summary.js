import React from "react";

import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Summary.scss";

function Summary() {
  return (
    <section className="summary">
      <h1 className="product__title">Pellentesque augue just</h1>
      <p className="product__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante.
        Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget
        vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque
        aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac,
        aliquam molestie, varius ac, tellus.
      </p>
      <form action="#" className="cart">
        <table className="variations">
          <tbody>
            <tr>
              <td className="label">
                <label htmlFor="color">Color</label>
              </td>
              <td className="value">
                <select name="color" id="color">
                  <option value="">Choose an option</option>
                  <option value="red">Red</option>
                  <option value="yellow">Yellow</option>
                  <option value="pink">Pink</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="label">
                <label htmlFor="size">Size</label>
              </td>
              <td className="value">
                <select name="size" id="size">
                  <option value="">Choose an option</option>
                  <option value="red">Small</option>
                  <option value="medium">Medium</option>
                  <option value="big">Big</option>
                </select>
                <button className="clear active">Clear</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="sigle-variation__wrapper">
          <input type="number" name="quantity" id="quantity" />
          <button type="submit" className="btn btn--small btn--add-to-cart">
            Add to cart
          </button>
        </div>
      </form>
      <p className="price">
        <del>£260.00</del>£200.00
      </p>
      <div className="add-to-wishlist__wrapper">
        <AiFillHeart className="icon" />
        <button className="add-to-wishlist">Add to wishlist</button>
      </div>
      <div className="product-meta">
        <span className="sku__wrapper">
          SKU:
          <span className="sku">N/A</span>
        </span>
        <span className="posted_in">
          Categories:
          <Link to="/" className="tag">
            Books and media
          </Link>
          , &nbsp;
          <Link to="/" className="tag">
            Choco Chips
          </Link>
          , &nbsp;
          <Link to="/" className="tag">
            Chocolate
          </Link>
          , &nbsp;
          <Link to="/" className="tag">
            Candy
          </Link>
          , &nbsp;
          <Link to="/" className="tag">
            dark chocolate
          </Link>
          , &nbsp;
          <Link to="/" className="tag">
            Living
          </Link>
          , &nbsp;
          <Link to="/" className="tag">
            Watches
          </Link>{" "}
          &nbsp;
        </span>
        <span className="tag_as">
          Categories:
          <Link to="/" className="tag">
            Pellentesque{" "}
          </Link>
          , &nbsp;
          <Link to="/" className="tag">
            augue
          </Link>
          , &nbsp;
          <Link to="/" className="tag">
            Cras
          </Link>
        </span>
      </div>
    </section>
  );
}

export default Summary;
