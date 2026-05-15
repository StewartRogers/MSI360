import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./ui/styles.css";

/**
 * Browser entry point for the MSI360 client-only prototype.
 *
 * The Vite app mounts into `index.html#root`; all assessment state is managed in
 * React after this point.
 */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
