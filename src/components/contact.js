import { render } from "@testing-library/react";
import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  render() {
    return (
      <section id="contact">
        <h2 Contact Form></h2>
        <div class="name-contact">
          <label>name</label>
          <input
            type="text"
            value={this.state.name}
            placeholder="name"
            onChange={this.handleNameChange}
            onBlur={this.handleNotBlank}
          ></input>
        </div>
        <div class="email-contact">
          <label>email</label>
          <input
            type="text"
            value={this.state.email}
            placeholder="email"
            onChange={this.handleEmailChange}
            onBlur={this.handleValideEmail}
          ></input>
        </div>
        <div class="message-contact">
          <label>message</label>
          <textarea
            placeholder="message"
            onChange={this.handleMessageChange}
            onBlur={this.handleNotBlank}
          >
            {this.state.message}
          </textarea>
        </div>
      </section>
    );
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleNotBlank = (event) => {
    if (event.target.value === "") alert("This field can not be blank");
  };

  handleValideEmail = (event) => {
    let validEmailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!validEmailRegex.test(event.target.value))
      alert("email entered is not valid");
  };
}

export default Contact;
