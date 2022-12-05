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
    <section class="about-me">
      <h2 class="animate-character">
        It's me...Zach Feltman. Your friendly neighborhood web developer.
      </h2>
      <section class="about-text-photo">
        <p>
          <img
            id="about-image"
            src={process.env.PUBLIC_URL + "/img/profile.jpg"}
            alt="profile photo"
          />
        </p>
        <p id="about-text">
          Hello! My name is Zachary Feltman. I grew up in suburb of Chicago
          called Buffalo Grove and moved to Colorado in 2013. I graduated from
          The University of Illinois with a bachelors in Psychology and a minor
          in Cinema Studies. I moved to Colorado for an internship in Music
          Management, where I worked as an agent assistant. I have been in the
          service industry for the last 15 years and was ready for a change. I
          am excited to learn to code and build my portfolio through this class.
        </p>
      </section>
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
    <section class="resume-profs">
      <div id="resume">
        <h2 class="title">Resume</h2>
        <iframe src={process.env.PUBLIC_URL + "/resume.pdf"} />
        {/* <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank">
          View Resume
        </a> */}
      </div>
      <div class="profs">
        <h2 class="title">Proficiencies</h2>
        <div class="listStyle">
          <div>
            <i class="fa-brands fa-css3-alt fa-5x" title="css"></i>
          </div>
          <div>
            <i class="fa-brands fa-node fa-5x" title="nodejs"></i>
          </div>
          <div>
            <i class="fa-brands fa-react fa-5x" title="react"></i>
          </div>
          <div>
            <img src="/img/mongodb.png" alt="mongodb" title="mongodb"/>
          </div>
          <div>
            <img src="/img/mysql.png" alt="mysql" title="mysql" />
          </div>
          <div>
            <img src="/img/handlebars-js.png" alt="handlebars" title="handlebars" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
