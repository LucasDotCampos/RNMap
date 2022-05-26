import { createContext, useContext, useState } from "react";
import { ICategory, ICategoryValue } from "../interfaces";

const initialStateCategories: ICategory[] = [];
const CategoriesContext = createContext<ICategoryValue>(null);

export const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState<ICategory[]>(
    initialStateCategories
  );
  const value = {
    categories,
    setCategories,
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
