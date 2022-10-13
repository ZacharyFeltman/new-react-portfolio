import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Project from "./components/project"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div id="left">
          <h2>Work</h2>
          <div id="work">
            <Project name="Horiseon" link="https://zacharyfeltman.github.io/horiseon/" image="./assets/images/horiseon.png" />
            <Project name="Middle-Where" link="https://limitless-temple-38712.herokuapp.com/?" image="./assets/images/map.jpeg" />
          
            <section class="grow">
              <h3>Placeholder</h3>
              <p>
                <img src="./assets/images/placeholder.png" alt="placeholder" />
              </p>
            </section>
            <section class="grow">
              <h3>Placeholder</h3>
              <p>
                <img src="./assets/images/placeholder.png" alt="placeholder" />
              </p>
            </section>
          </div>
        </div>
        <aside>
          <section id="about-me">
            <h2>About Me!</h2>
            <p>
              <img src="./assets/images/profile.jpg" alt="profile photo" />
            </p>
            <p>
              Hello! My name is Zachary Feltman. I grew up in suburb of Chicago
              called Buffalo Grove and moved to Colorado in 2013. I graduated
              from The University of Illinois with a bachelors in Psychology and
              a minor in Cinema Studies. I moved to Colorado for an internship
              in Music Management, where I worked as an agent assistant. I have
              been in the service industry for the last 15 years and was ready
              for a change. I am excited to learn to code and build my portfolio
              through this class.
            </p>
          </section>
          <section id="resume">
            <h2>Resume</h2>
            <p>
              <a href="./documents/resume.pdf">View Resume</a>
            </p>
          </section>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;
