import React from "react";

export default function NavigationButton(props) {
  return (
    <div className="navigationButton" onClick={() => props.onClick()}>
      {props.title}
    </div>
  );
}
