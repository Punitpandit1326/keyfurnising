import React, { createContext, useState } from "react"; // Fixed the import

const ActiveContext = createContext();

const ActiveContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <ActiveContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </ActiveContext.Provider>
  );
};

export { ActiveContext, ActiveContextProvider }; // Export both the context and provider
