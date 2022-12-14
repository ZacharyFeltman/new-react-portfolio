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
          Hello! I’m Zach Feltman, a full-stack web developer with a focus on
          user experience. 
          <br></br>
          <br></br>
          I attended The University of Illinois, and received a
          degree in Psychology. I have recently graduated from Denver
          University’s full-stack bootcamp program. Prior to DU, my experience
          has been in the service industry doing everything from server to
          management, and sales for a distillery. I found new interest and
          excitement in the web development world using my creativity and
          problem solving skills to design pages, work with user experience, and
          work with data on the back end of applications. It may be new to me,
          but I have been able to hit the ground running and grow my
          proficiencies in multiple different languages such as CSS, JS, React,
          MySql, MongoDB, and NodeJS. 
          <br></br>
          <br></br>
          When I am not working, I enjoy seeing live
          music around Colorado, camping in the summer, getting to the movies,
          and trying new restaurants around town.
        </p>
      </section>
    </section>
  );
}

function Projects() {
  console.log("projects");
  return (
    <section id="portfolio">
      <h2 id="workTitle">Projects</h2>
      <div id="work">
        {/* <Project
          name="Horiseon"
          link="https://zacharyfeltman.github.io/horiseon/"
          image={process.env.PUBLIC_URL + "/img/horiseon.png"}
          repo="https://github.com/ZacharyFeltman/horiseon"
        /> */}
        <Project
          name="Middle-Where"
          link="https://limitless-temple-38712.herokuapp.com/?"
          image={process.env.PUBLIC_URL + "/img/map.jpeg"}
          repo="https://github.com/ZacharyFeltman/middleWhere"
          info="Midde-Where is an application designed to create groups of friends and find the most middle point for everyone involved.  Whether you are meeting friends for drinks or trying to find a good spot to work on a project with your team, it can be hard to find the best place to meet.  As you invite friends to your maps room, the google geolocation API will adjust its middle point, and help you figure out where the most centrally located point to meet.

          For this project I worked with JS, CSS, and Handlebars in order to created the design of the pages, as well as, how the font end communicated with the back end in order to log-in/log-out/sing-up users, grab middle points of added friends, and just the general design and flow of our users pages.
          "
        />
        <Project
          name="Pour Loser"
          link="https://zacharyfeltman.github.io/pour-loser-game/"
          image={process.env.PUBLIC_URL + "/img/pour-loser.png"}
          repo="https://github.com/ZacharyFeltman/pour-loser-game"
          info="Pour Loser is a web application game for lovers of bar trivia.  This application combines the knowledge of Jeopardy trivia with the information to learn how to create your own fun cocktails at home.  Users are prompted with questions pulled from a free Jeopardy API.  The goal of this game is to get as many correct answers as you can in a row.  Once the user answers a question incorrectly, they will be presented with a new cocktail, the ingredients necessary, and instructions on how to create the cocktail at home.

          This game was a team effort, but I personally worked on the HTML layout and CSS design for this game.  Anything from the display, to the answer forms, to scaling was worked on by me and my design partner David in this project.
          "
        />
        {/* <Project
          name="Note Taker"
          link="https://detailed-note-taker.herokuapp.com/"
          image={process.env.PUBLIC_URL + "/img/note-taker.png"}
          repo="https://github.com/ZacharyFeltman/detailed-note-taker"
        /> */}
        {/* <Project
          name="Weather Tracker"
          link="https://zacharyfeltman.github.io/weekly-weather-forecast/"
          image={process.env.PUBLIC_URL + "/img/weather.jpeg"}
          repo="https://github.com/ZacharyFeltman/weekly-weather-forecast-1" 
      /> */}
        <Project
          name="Random Password Generator"
          link="https://zacharyfeltman.github.io/random-password/"
          image={process.env.PUBLIC_URL + "/img/random-password.png"}
          repo="https://github.com/ZacharyFeltman/random-password"
          info="For this application, I have created a randome password generator.  Using HTML, CSS, and JS, I have created a app that
          will create a randomly generated password based on specific qualifications of different password needs.  This can be used to create a secure password
          for any website or log in information you may encounter."
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
        <iframe src={process.env.PUBLIC_URL + "/resume-feltman.pdf"} />
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
            <img src="/img/mongodb.png" alt="mongodb" title="mongodb" />
          </div>
          <div>
            <img src="/img/mysql.png" alt="mysql" title="mysql" />
          </div>
          <div>
            <img
              src="/img/handlebars-js.png"
              alt="handlebars"
              title="handlebars"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
