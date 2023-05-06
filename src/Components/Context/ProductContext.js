import { createContext, useContext, useEffect, useState } from 'react';
import axiosInstance from '../utils';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [apiProductData, setApiProductData] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/products').then((res) => {
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
