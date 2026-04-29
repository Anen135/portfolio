import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WinUI3Page from "./pages/WinUI3Page.jsx";
import "./styles/global.css";

function getIsWinUI3() {
  const hash = window.location.hash.toLowerCase();
  const path = window.location.pathname.toLowerCase();

  const winui3Hashes = [
    "#/winui3", "#/winui3/", "#winui3", "#winui3/",
    "#overview", "#architecture", "#controls", "#quickstart", "#demos", "#install"
  ];

  return winui3Hashes.includes(hash) || path === "/winui3" || path === "/winui3/";
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
