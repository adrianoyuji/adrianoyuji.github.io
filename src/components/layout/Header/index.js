import React, { useContext } from "react";
import { GlobalContext } from "../../../context/global";

export default function Header() {
  const { setLanguage, languageText } = useContext(GlobalContext);
  return (
    <div className="headerContainer">
      <div className="languageChanger">
        <span>{languageText.header.languageChanger} </span>
        <div className="languageButton" onClick={() => setLanguage("english")}>
          English
        </div>
        <div
          className="languageButton"
          onClick={() => setLanguage("portuguese")}
        >
          Português
        </div>
      </div>
    </div>
  );
}
