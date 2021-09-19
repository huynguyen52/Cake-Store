import React from "react";
import "./Cart.scss";
import { useGlobalContext } from "../context";
import { useHistory } from "react-router-dom";

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
  const {openProductModel} = useGlobalContext();
  let history = useHistory();

  const handleClick = () => {
    history.push(`/product/${id}`);
  }

  const handleButtonClick = e => {
    e.stopPropagation();
    openProductModel(id);
  }
  
  return (
    <article className="card" >
      <figure className={sale ? "sale" : ""} onClick={handleClick}>
        <img alt="product" className="card__img" src={images[0]} />
        <button className="btn btn--primary--light btn--small" onClick={handleButtonClick}>
          Quick view
        </button>
      </figure>
      <h3 className="card__title" onClick={handleClick}>{title}</h3>
      <span className="price">
        {sale ? <del>${price}</del> : null}${price - (sale * price) / 100}
      </span>
      <button className="btn btn--primary--light btn--small">
        Add to cart
      </button>
    </article>
  );
}

export default Cart;
