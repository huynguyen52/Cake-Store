import React from "react";

import Banner from "../components/Banner";
import HorizontalTab from "../components/HorizontalTab";
import BlogPosts from "../components/BlogPosts";
import data from "../data";

function Home() {
  const { banners, tablist } = data;

  return <section id="main">
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
        </section>;
}

export default Home;
