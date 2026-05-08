import React from "react";
import { config } from "../config.js";
import "@/styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} <span>{config.name}</span>. Built with React + Vite.
        </p>
        <p className="footer__credit">
          Designed &amp; developed with ♥
        </p>
      </div>
    </footer>
  );
}
