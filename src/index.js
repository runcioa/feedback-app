// src\index.js

import React from "react";

import ReactDom from "react-dom";

import App from "./App";

import "./index.css";

// ReactDom render permette di interagire con il DOM
// Scelgo prima l'elemento da visualizzare e poi dove visualizzarlo.

ReactDom.render(
//   Attivazione dello Strict mode
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
