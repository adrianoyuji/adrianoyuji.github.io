import React, { createContext, useState } from "react";

export const GlobalContext = createContext([]);

export const GlobalProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt-br");
  const [section, setSection] = useState("home");
  return (
    <GlobalContext.Provider
      value={{ language, setLanguage, section, setSection }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
