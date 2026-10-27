import { StrictMode } from "react";
import * as React from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import "./styles.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element missing");
}

if (import.meta.env.DEV) {
  void import("@axe-core/react").then((axe) => {
    void axe.default(React, ReactDOM, 1000);
  });
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
