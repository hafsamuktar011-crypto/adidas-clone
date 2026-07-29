import { createContext } from "react";
import { Shoes } from "../assets/Shoe";

export const ShoeContext = createContext();

export function ShoeProvider({ children }) {
  return (
    <ShoeContext.Provider value={{ Shoes }}>
      {children}
    </ShoeContext.Provider>
  );
}