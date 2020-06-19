import React, { createContext, useState, useEffect } from "react";
import * as languages from "../languages";

export const GlobalContext = createContext([]);

export const GlobalProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  const [section, setSection] = useState("home");
  const [languageText, setLanguageText] = useState(languages.english);

  useEffect(() => {
    switch (language) {
      case "english":
        setLanguageText(languages.english);
        break;
      case "portuguese":
        setLanguageText(languages.portuguese);
        break;
    }
  }, [language]);

  return (
    <GlobalContext.Provider
      value={{ language, setLanguage, section, setSection, languageText }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
