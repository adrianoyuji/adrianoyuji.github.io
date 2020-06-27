import React, { useContext } from "react";
import { GlobalContext } from "../../../context/global";

export default function Header() {
  const { setLanguage, languageText, language } = useContext(GlobalContext);
  console.log(language);
  return (
    <div className="headerContainer">
      <div className="languageChanger">
        <span>{languageText.header.languageChanger} </span>
        <div
          className={
            language === "english" ? "selectedLanguageButton" : "languageButton"
          }
          onClick={() => setLanguage("english")}
        >
          English
        </div>
        <div
          className={
            language === "portuguese"
              ? "selectedLanguageButton"
              : "languageButton"
          }
          onClick={() => setLanguage("portuguese")}
        >
          Português
        </div>
      </div>
    </div>
  );
}
