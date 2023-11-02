import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import "./custom-bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
