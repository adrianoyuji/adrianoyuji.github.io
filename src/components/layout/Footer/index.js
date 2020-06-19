import React, { useContext } from "react";
import Contact from "../../sections/Contact";
import { GlobalContext } from "../../../context/global";

export default function Footer() {
  const { languageText } = useContext(GlobalContext);

  return (
    <div className="contactContent">
      <span className="contactTitle">{languageText.footer.contactTitle}</span>
      <Contact />
      <span className="madeWithLove">{languageText.footer.madeWithLove}</span>
    </div>
  );
}
