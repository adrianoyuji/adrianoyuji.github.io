import React, { useContext } from "react";
import ProjectItem from "../../layout/ProjectItem";
import { GlobalContext } from "../../../context/global";

export default function Projects() {
  const { languageText } = useContext(GlobalContext);
  console.log(languageText.projectList);
  return (
    <div className="projectsContainer">
      <p className="projectHeader">
        {languageText.projects.header1}
        <a
          href="https://github.com/adrianoyuji"
          target="_blank"
          rel="noopener noreferrer"
        >
          {languageText.projects.header2}
        </a>
        {languageText.projects.header3}
      </p>

      {languageText.projectList.map((project, index) => (
        <ProjectItem project={project} />
      ))}
    </div>
  );
}
