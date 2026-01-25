import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('productData');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('productData', JSON.stringify(data));
  }, [data]);

  const update = (newData) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  return (
    <ProductContext.Provider value={{ data, update }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
