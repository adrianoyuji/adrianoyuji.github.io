import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";

export default function Contact() {
  return (
    <div className="contactContainer">
      <a
        href="https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon path={mdiLinkedin} color="white" />
      </a>
      <a href="mailto:adrianoyuji@gmail.com">
        <Icon path={mdiEmail} color="white" />
      </a>
      <a
        href="https://www.github.com/adrianoyuji"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon path={mdiGithub} color="white" />
      </a>
    </div>
  );
}
