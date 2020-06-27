import React from "react";

import Icon from "@mdi/react";
import { mdiGithub, mdiWeb } from "@mdi/js";

export default function ProjectItem({ project }) {
  return (
    <div className="projectItem">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="projectImage"
      >
        <img src={project.imgUrl} alt="thumb" height="100%" width="100%" />
      </a>
      <div className="projectInfo">
        <div className="projectTitle">{project.title}</div>
        <div className="projectDescription">
          <p>{project.description}</p>
          {project.technologies.map((technology, index) => (
            <span className="technologyContainer" key={index}>
              {technology}
            </span>
          ))}
        </div>
        <div className="usefulLinks">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Icon path={mdiGithub} />
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Icon path={mdiWeb} />
          </a>
        </div>
      </div>
    </div>
  );
}
