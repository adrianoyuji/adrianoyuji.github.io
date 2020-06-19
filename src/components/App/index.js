import React, { useContext } from "react";
import { GlobalContext } from "../../context/global";

//components
import Home from "../sections/Home";
import Header from "../layout/Header";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Footer from "../layout/Footer";

//modal
import Modal from "../layout/Modal";

export default function App() {
  const { section, languageText } = useContext(GlobalContext);

  function renderSection() {
    switch (section) {
      case "home":
        return <Home />;
      case "about":
        return (
          <Modal title={languageText.app.modalTitles.about}>
            <About />
          </Modal>
        );
      case "projects":
        return (
          <Modal title={languageText.app.modalTitles.projects}>
            <Projects />
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
      <Footer />
    </div>
  );
}
