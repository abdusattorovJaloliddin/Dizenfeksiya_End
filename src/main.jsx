import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './i18n';
import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);