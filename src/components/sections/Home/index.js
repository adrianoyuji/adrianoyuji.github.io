import React, { useContext } from "react";
import NavigationButton from "../../layout/NavigationButton";
import { GlobalContext } from "../../../context/global";

export default function Home() {
  const navigationButtons = [
    { title: "About", id: "about" },
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "contact" },
  ];
  const { setSection } = useContext(GlobalContext);

  return (
    <div className="homeContainer">
      <div className="homeContent">
        <div className="title">
          <h1>ADRIANO YUJI SATO DE VASCONCELOS</h1>
          <p>FRONT-END SOFTWARE DEVELOPER</p>
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
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
