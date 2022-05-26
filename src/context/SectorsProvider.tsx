import { createContext, useContext, useState } from "react";
import { ISector, ISectorValue } from "../interfaces";

const initialStateSectors: ISector[] = [];
const SectorsContext = createContext<ISectorValue>(null);

export const useSectorsContext = () => {
  return useContext(SectorsContext);
};

export const SectorsProvider = ({ children }) => {
  const [sectors, setSectors] = useState<ISector[]>(initialStateSectors);
  const value = {
    sectors,
    setSectors,
  };
  return (
    <SectorsContext.Provider value={value}>{children}</SectorsContext.Provider>
  );
};
