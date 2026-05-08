import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WinUI3Page from "./pages/WinUI3Page.jsx";
import ProjectTemplate from "./pages/ProjectTemplate.jsx";
import "./styles/global.css";

function getPath() {
  return window.location.pathname.toLowerCase();
}

function isWinUI3Page(path) {
  return path === "/portfolio/winui3" || path === "/portfolio/winui3/";
}

function isProjectPage(path) {
  return path.startsWith("/portfolio/projects/");
}

function Root() {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onLocationChange = () => {
      setPath(getPath());
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  if (isWinUI3Page(path)) {
    return <WinUI3Page />;
  }

  if (isProjectPage(path)) {
    return <ProjectTemplate />;
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);