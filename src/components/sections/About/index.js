import React, { useContext } from "react";
import { GlobalContext } from "../../../context/global";

export default function About() {
  const { languageText } = useContext(GlobalContext);
  return (
    <div className="aboutContainer">
      <div className="personalDescription">
        <p>{languageText.about.firstParagraph}</p>
        <p>{languageText.about.secondParagraph}</p>
      </div>
      <h1>{languageText.about.skills.title}</h1>
      <div className="skills">
        <div className="skills-list">
          <h4>{languageText.about.skills.frontend}</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>JavaScript (ES6+)</li>
            <li>Ajax</li>
            <li>Bootstrap</li>
            <li>React JS</li>
            <li>React Native</li>
            <li>Material UI</li>
          </ul>
        </div>

        <div className="skills-list">
          <h4>{languageText.about.skills.tools}</h4>
          <ul>
            <li>Git</li>
            <li>Gitlab</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>Photoshop CC</li>
            <li>Android Studio</li>
          </ul>
        </div>
        <div className="skills-list">
          <h4>{languageText.about.skills.methodologies}</h4>
          <ul>
            <li>SCRUM</li>
            <li>Kanban</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
