import React, { useContext } from "react";
import NavigationButton from "../../layout/NavigationButton";
import { GlobalContext } from "../../../context/global";

export default function Home() {
  const { setSection, languageText } = useContext(GlobalContext);
  const navigationButtons = [
    { title: languageText.home.navigationButtons.about, id: "about" },
    { title: languageText.home.navigationButtons.projects, id: "projects" },
  ];

  return (
    <div className="homeContainer">
      <div className="homeContent">
        <div className="title">
          <h1>ADRIANO YUJI SATO DE VASCONCELOS</h1>
          <p>{languageText.home.softwareDeveloper}</p>
        </div>
        <div className="navButtons">
          {navigationButtons.map((button, index) => (
            <NavigationButton
              title={button.title}
              onClick={() => setSection(button.id)}
              key={index}
            />
          ))}
          <a
            className="navigationButton"
            href="https://docs.google.com/document/d/1OY8qQ37B4YHXq6c84a_CFTHwxQ323P19J8OhaJ4FyPk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {languageText.home.navigationButtons.resume}
          </a>
        </div>
      </div>
    </div>
  );
}
