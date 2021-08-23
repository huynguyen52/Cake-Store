import React from "react";
import "./Cart.scss";
import img from "../assets/images/10-145x145.png";

function Cart({
  id,
  title,
  category,
  images,
  description,
  price,
  sale,
  release,
}) {
  return (
    <article className="card">
      <figure className={sale ? "sale" : ""}>
        <img alt="product" className="card__img" src={images[0]} />
        <button className="btn btn--primary--light btn--small">
          Quick view
        </button>
      </figure>
      <h3 className="card__title">{title}</h3>
      <span className="card__price">
        {sale ? <del>${price}</del> : null}${price - (sale * price) / 100}
      </span>
      <button className="btn btn--primary--light btn--small">
        Add to cart
      </button>
    </article>
  );
}

export default Cart;
