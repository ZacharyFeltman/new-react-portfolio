import React from "react";

export default function Project(props) {
    return (
        <section className="grow">
              <h3>{props.name}</h3>
              <p>
                <a
                  href={props.link}
                  target="_blank"
                >
                  <img className="project-image" src={props.image} alt={props.name} />
                </a>
              </p>
              <p>
                <a href={props.repo} target="_blank"><i class="fa-brands fa-square-github fa-2x"></i>
                </a>
              </p>
              <p>
                {props.info}
              </p>
            </section>
    )
}