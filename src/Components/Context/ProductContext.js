import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [apiProductData, setApiProductData] = useState([]);

  useEffect(() => {
    axios.get("https://dicepizza.herokuapp.com/api/products").then((res) => {
      setApiProductData(res.data);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ apiProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
