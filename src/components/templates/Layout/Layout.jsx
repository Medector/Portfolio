import React from "react";
import { Outlet } from "react-router-dom";

import "./Layout.scss";

function Layout() {
  return (
    <div className="Layout">
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/about-me">About Me</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <span>Medector</span>
      </footer>
    </div>
  );
}

export { Layout };
