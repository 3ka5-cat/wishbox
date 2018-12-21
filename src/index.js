import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./containers/App.js";

ReactDOM.render(
  <BrowserRouter basename="https://wishbox.space">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
