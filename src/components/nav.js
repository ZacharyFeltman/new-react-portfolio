import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">About Me</NavLink>
        </li>
        <li>
          <NavLink  to="/projects">Work</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Me</NavLink>
        </li>
      </ul>
    </nav>
  );
}
