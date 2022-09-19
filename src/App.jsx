import React from "react";
import { Layout } from "@templates/Layout/Layout";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Home } from "@routes/Home/Home";
import "@styles/global.scss";
import Projects from "@routes/Projects/Projects";
import AboutMe from "@routes/AboutMe/AboutMe";
import Skills from "@routes/Skills/Skills";
import Contact from "@routes/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
