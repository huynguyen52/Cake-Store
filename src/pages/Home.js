import React from "react";

import Banner from "../components/Banner";
import HorizontalTab from "../components/HorizontalTab";
import BlogPosts from "../components/BlogPosts";
import data from "../data";

import './Home.scss';

import Slider from "../components/Slider";

function Home() {
  const { banners, tablist } = data;

  return (
    <>
    <div className="container">
          <div className="header-middle__wrapper">
            {/* <HeaderMiddle /> */}
            <Slider />
          </div>
        </div>
       <div id="main">
          <div className="container">
            <ul className="top-banners">
              {banners.map((item, index) => {
                return <Banner img={item} key={index} />;
              })}
            </ul>
            <HorizontalTab tabList={tablist} />
          </div>
          <div className="container container--bigger">
            <BlogPosts/>
          </div>
        </div>
              </>
        );
}

export default Home;
