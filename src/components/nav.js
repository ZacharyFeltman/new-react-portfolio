import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/react-portfolio">About Me</NavLink>
        </li>
        <li>
          <NavLink  to="/react-portfolio/projects">Work</NavLink>
        </li>
        <li>
          <NavLink to="/react-portfolio/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/react-portfolio/contact">Contact Me</NavLink>
        </li>
      </ul>
    </nav>
  );
}
