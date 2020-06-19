import React, { useContext } from "react";
import { GlobalContext } from "../../../context/global";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

export default function Modal(props) {
  const { setSection } = useContext(GlobalContext);
  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="modalHeader">
          <div className="modalTitle">{props.title}</div>
          <div className="closeButton" onClick={() => setSection("home")}>
            <Icon path={mdiClose} size={1} color="white" />
          </div>
        </div>
        <div className="modalBody">{props.children}</div>
      </div>
    </div>
  );
}
