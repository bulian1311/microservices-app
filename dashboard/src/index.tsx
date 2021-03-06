import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./app/app.component";
import { GlobalStyles } from "./global.styles";

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </Router>,
  document.querySelector("#root")
);
