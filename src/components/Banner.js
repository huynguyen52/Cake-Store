import React from "react";
import { Link } from "react-router-dom";

function Banner({ img }) {
  return (
    <figure className="banner">
      <Link to="/">
        <img src={img} alt="banner" />
      </Link>
    </figure>
  );
}

export default Banner;
