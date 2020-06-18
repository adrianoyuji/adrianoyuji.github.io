import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/global";

//components
import Home from "../sections/Home";
import Header from "../layout/Header";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

//modal
import Modal from "../layout/Modal";

export default function App() {
  const { section } = useContext(GlobalContext);

  function renderSection() {
    switch (section) {
      case "home":
        return <Home />;
      case "about":
        return (
          <Modal title="ABOUT ME">
            <About />
          </Modal>
        );
      case "projects":
        return (
          <Modal title="PROJECTS">
            <Projects />
          </Modal>
        );
      case "contact":
        return (
          <Modal title="LET'S WORK TOGETHER">
            <Contact />
          </Modal>
        );
      default:
        return null;
    }
  }

  return (
    <div className="mainBody">
      <Header />
      {renderSection()}
    </div>
  );
}
