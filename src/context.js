import React, { createContext, useContext, useState, useEffect } from "react";
import data from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { products, posts, contact } = data;
  const [tab, setTab] = useState("featured");
  const [tabProducts, setTabProducts] = useState([]);

  const [modelProduct, setModelProduct] = useState(null);

  useEffect(() => {
    setTabProducts(products.filter((item) => item.tab === tab));
  }, [tab, products]);

  const openProductModel = id => {
    setModelProduct(id);
  }


  return (
    <AppContext.Provider value={{ tab, setTab, tabProducts, posts, contact, openProductModel, modelProduct, setModelProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
