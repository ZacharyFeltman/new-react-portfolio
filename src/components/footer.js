import React from "react";

export default function Footer() {
  return (
    <footer id="contact-me">
      {/* <h2>Contact Me:</h2> */}
      <ul>
        <li>
          {/* Email: */}
          <a href="mailto:Zachary.Feltman@gmail.com">
            {/* Zachary.Feltman@gmail.com */}
            <i class="fa-solid fa-envelope fa-5x"></i>
          </a>
        </li>
        <li>
        <i class="fa-brands fa-linkedin fa-5x"></i>
        </li>
        <li>
          {/* GitHub:{" "} */}
          <a
            href="https://github.com/ZacharyFeltman?tab=repositories"
            target="_blank"
          >
            {/* GitHub */}
            <i class="fa-brands fa-square-github fa-5x"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
