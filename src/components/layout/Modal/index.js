import React, { useContext } from "react";
import { GlobalContext } from "../../../context/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Modal(props) {
  const { setSection } = useContext(GlobalContext);
  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="modalHeader">
          <div className="modalTitle">{props.title}</div>
          <div className="closeButton" onClick={() => setSection("home")}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
        <div className="modalBody">{props.children}</div>
      </div>
    </div>
  );
}
