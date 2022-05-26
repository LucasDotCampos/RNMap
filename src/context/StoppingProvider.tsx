import { createContext, useContext, useState } from "react";
import { IStopping, IStoppingValue } from "../interfaces";

const initialStateStopping: IStopping[] = [];
const StoppingContext = createContext<IStoppingValue>(null);

export const useStoppingContext = () => {
  return useContext(StoppingContext);
};

export const StoppingProvider = ({ children }) => {
  const [stopping, setStopping] = useState<IStopping[]>(initialStateStopping);
  const value = {
    stopping,
    setStopping,
  };
  return (
    <StoppingContext.Provider value={value}>
      {children}
    </StoppingContext.Provider>
  );
};
