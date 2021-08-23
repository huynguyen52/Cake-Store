import React, { createContext, useContext, useState, useEffect } from "react";
import data from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { products } = data;
  const [tab, setTab] = useState("featured");
  const [tabProducts, setTabProducts] = useState([]);

  useEffect(() => {
    setTabProducts(products.filter((item) => item.tab === tab));
  }, [tab, products]);

  return (
    <AppContext.Provider value={{ tab, setTab, tabProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
