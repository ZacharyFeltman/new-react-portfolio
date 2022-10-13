import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/projects">Work</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul> 
        </nav>
    )
}