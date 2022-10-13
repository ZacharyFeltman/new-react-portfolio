import React from "react";

export default function Project(props) {
    return (
        <section class="grow">
              <h3>{props.name}</h3>
              <p>
                <a
                  href={props.link}
                  target="_blank"
                >
                  <img src={props.image} alt={props.name} />
                </a>
              </p>
            </section>
    )
}