import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Widget.scss";

function Widget({ title, links, riseUp }) {
  return (
    <div className={`widget ${riseUp}`}>
      <h4 className="widget__title">{title}</h4>
      <ul className="widget__list">
        {links.map((link, index) => {
          const { icon, text, to } = link;
          return (
            <li className="widget__item " key={index}>
              {icon || <AiOutlineRight className="widget__icon small" />}
              <Link to={to} className="widget__link">
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Widget;
