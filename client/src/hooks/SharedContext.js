// StateContext.js
import React, { createContext, useContext, useState } from "react";

const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [fetchStates, setFetchStates] = useState(false);
  console.log("success in shared ", fetchStates);

  return (
    <SharedContext.Provider value={{ fetchStates, setFetchStates }}>
      {children}
    </SharedContext.Provider>
  );
};

export const useSharedState = () => {
  const context = useContext(SharedContext);
  if (!context) {
    throw new Error("useSharedState must be used within a StateProvider");
  }
  return context;
};
