import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Project from "./components/project";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function About() {
  console.log("about");
  return (
    <section id="about-me">
      <h2>About Me!</h2>
      <p>
        <img
          src={process.env.PUBLIC_URL + "/img/profile.jpg"}
          alt="profile photo"
        />
      </p>
      <p>
        Hello! My name is Zachary Feltman. I grew up in suburb of Chicago called
        Buffalo Grove and moved to Colorado in 2013. I graduated from The
        University of Illinois with a bachelors in Psychology and a minor in
        Cinema Studies. I moved to Colorado for an internship in Music
        Management, where I worked as an agent assistant. I have been in the
        service industry for the last 15 years and was ready for a change. I am
        excited to learn to code and build my portfolio through this class.
      </p>
    </section>
  );
}

function Projects() {
  console.log("projects");
  return (
    <section id="portfolio">
      <h2>Work</h2>
      <div id="work">
        <Project
          name="Horiseon"
          link="https://zacharyfeltman.github.io/horiseon/"
          image={process.env.PUBLIC_URL + "/img/horiseon.png"}
          repo="https://github.com/ZacharyFeltman/horiseon"
        />
        <Project
          name="Middle-Where"
          link="https://limitless-temple-38712.herokuapp.com/?"
          image={process.env.PUBLIC_URL + "/img/map.jpeg"}
          repo="https://github.com/ZacharyFeltman/middleWhere"
        />
        <Project
          name="Pour Loser"
          link="https://zacharyfeltman.github.io/pour-loser-game/"
          image={process.env.PUBLIC_URL + "/img/pour-loser.png"}
          repo="https://github.com/ZacharyFeltman/pour-loser-game"
        />
        <Project
          name="Note Taker"
          link="https://detailed-note-taker.herokuapp.com/"
          image={process.env.PUBLIC_URL + "/img/note-taker.png"}
          repo="https://github.com/ZacharyFeltman/detailed-note-taker"
        />
        <Project
          name="Weather Tracker"
          link="https://zacharyfeltman.github.io/weekly-weather-forecast/"
          image={process.env.PUBLIC_URL + "/img/weather.jpeg"}
          repo="https://github.com/ZacharyFeltman/weekly-weather-forecast-1"
        />
        <Project
          name="Random Password Generator"
          link="https://zacharyfeltman.github.io/random-password/"
          image={process.env.PUBLIC_URL + "/img/random-password.png"}
          repo="https://github.com/ZacharyFeltman/random-password"
        />
      </div>
    </section>
  );
}

function Resume() {
  console.log("resume");
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        <a href={process.env.PUBLIC_URL +"/resume.pdf"} target="_blank">
          View Resume
        </a>
      </p>
      <p>
        <h3>Proficiencies</h3>
        <ul>
          <li>CSS</li>
          <li>node.js</li>
          <li>react</li>
          <li>mongoDB</li>
        </ul>
      </p>
    </section>
  );
}

export default App;
