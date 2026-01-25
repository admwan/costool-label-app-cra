import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [data, setData] = useState({});

  const update = (patch) =>
    setData((prev) => ({ ...prev, ...patch }));

  return (
    <ProductContext.Provider value={{ data, update }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
