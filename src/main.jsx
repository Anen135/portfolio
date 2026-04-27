import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WinUI3Page from "./pages/WinUI3Page.jsx";
import "./styles/global.css";

const hash = window.location.hash.toLowerCase();
const path = window.location.pathname.toLowerCase();

// Prefer hash routing so this works on static hosts without rewrite rules.
// Keep pathname support as a fallback for dev / hosts that do serve SPA routes.
const isWinUI3Page =
  hash === "#/winui3" ||
  hash === "#/winui3/" ||
  hash === "#winui3" ||
  hash === "#winui3/" ||
  path === "/winui3" ||
  path === "/winui3/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isWinUI3Page ? <WinUI3Page /> : <App />}
  </React.StrictMode>
);
