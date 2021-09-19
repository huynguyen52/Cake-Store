import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

import "./ScrollToTop.scss";
import { useState } from "react";

export const ToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const { y } = useWindowScroll();

  useEffect(() => {
    if (y > 1.5) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [y]);

  const scollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`to-top ${visible ? "" : "hidden"}`} onClick={scollToTop}>
      <HiOutlineArrowCircleUp className="icon" />
    </div>
  );
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
