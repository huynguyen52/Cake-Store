import React from "react";

import "./ProductPage.scss";
import ProductCategory from "../components/ProductCategory";
import LeftBanner from "../components/LeftBanner";
import ProductTag from "../components/ProductTag";
import TopRateProduct from "../components/TopRateProduct";
import BreadCrumb from "../components/BreadCrumb";
import ProductGallery from "../components/ProductGallery";
import Summary from "../components/Summary";
import ProductTab from "../components/ProductTab";
import Products from "../components/Products";

import leftbanner from "../assets/images/leftbanner.jpg";

import { useGlobalContext } from "../context";

function ProductPage() {
  const { categories } = useGlobalContext();
  return (
    <div className="container">
      <div className="product-page">
        <section className="sidebar">
          <ProductCategory categories={categories} />
          <LeftBanner src={leftbanner} />
          <ProductTag />
          <TopRateProduct />
        </section>
        <main className="content">
          <BreadCrumb />
          <div className="product">
            <ProductGallery />
            <Summary />
          </div>
          <ProductTab />
          <Products />
          <Products title="Related products" />
        </main>
      </div>
    </div>
  );
}

export default ProductPage;
