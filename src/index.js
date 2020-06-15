import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.css";
import App from "./components/App";
import { GlobalProvider } from "./context/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
