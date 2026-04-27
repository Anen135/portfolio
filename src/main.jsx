import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WinUI3Page from "./pages/WinUI3Page.jsx";
import "./styles/global.css";

/** Returns true when the current URL points at the WinUI3 page. */
function getIsWinUI3() {
  const hash = window.location.hash.toLowerCase();
  const path = window.location.pathname.toLowerCase();
  return (
    hash === "#/winui3" ||
    hash === "#/winui3/" ||
    hash === "#winui3"  ||
    hash === "#winui3/" ||
    path === "/winui3"  ||
    path === "/winui3/"
  );
}

/** Root component — switches between pages based on hash. */
function Root() {
  const [isWinUI3, setIsWinUI3] = useState(getIsWinUI3);

  // Re-render on every hash change so clicking navbar links actually
  // swaps the page without a full browser reload.
  React.useEffect(() => {
    const onHashChange = () => setIsWinUI3(getIsWinUI3());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return isWinUI3 ? <WinUI3Page /> : <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
