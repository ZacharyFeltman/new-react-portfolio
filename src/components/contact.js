import { render } from "@testing-library/react";
import React,{ useState } from "react";
import MailJet, { SendEmailV3_1 } from "node-mailjet";

const MAILJET_PUBLIC_KEY = "08ccd57c4fbd84e1c60835b524b2f68d";
const MAILJET_PRIVATE_KEY = "3287728de77400b0b9dd57d63a911c75";
const mailjet = new MailJet({
  apiKey: MAILJET_PUBLIC_KEY,
  apiSecret: MAILJET_PRIVATE_KEY,
});

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      hasSubmitted: false,
    };
    this.contactFormSubmit = this.contactFormSubmit.bind(this);
  }
  render() {
    if (this.state.hasSubmitted) {
      return (
        <section id="contact">
          <h2 id="title-text">Your message has been sent</h2>
        </section>
      );
    } else {
      return (
        <section id="contact">
          <h2 id="title-text">Reach Out!</h2>
          <div class="name-contact">
            {/* <label>name</label> */}
            <input
              type="text"
              value={this.state.name}
              placeholder="name"
              onChange={this.handleNameChange}
              onBlur={this.handleNotBlank}
            ></input>
          </div>
          <div class="email-contact">
            {/* <label>email</label> */}
            <input
              type="text"
              value={this.state.email}
              placeholder="email"
              onChange={this.handleEmailChange}
              onBlur={this.handleValideEmail}
            ></input>
          </div>
          <div class="message-contact">
            {/* <label>message</label> */}
            <textarea
              // type="text"
              placeholder="message"
              onChange={this.handleMessageChange}
              onBlur={this.handleNotBlank}
            >
              {this.state.message}
            </textarea>
          </div>
          <button
            type="submit"
            class="submitBtn"
            onClick={this.contactFormSubmit}
          >
            <i class="fa-solid fa-handshake" id="handShake">
              <span>Say Hi!</span>
            </i>
          </button>
        </section>
      );
    }
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
    
    contactFormSubmit() {
    this.setState (
      (state) => {
        return {hasSubmitted: true}
      }
    )
    console.log(this.state)
    /*
    let formData = new FormData()
    formData.append('name', this.state.name)
    formData.append('email', this.state.email)
    formData.append('message', this.state.message)
    */
    fetch(
      "/send_email.php", 
      {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
        }),
        headers: {
          'Accept': 'text/html',
          'Content-Type': 'application/json'
        }
      }
    )
    /*console.log(this.state.hasSubmitted)
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "zach@zachfeltman.com",
            Name: "Zach Feltman",
          },
          To: [
            {
              Email: "zachary.feltman@gmail.com",
              Name: "Zachary",
            },
          ],
          Subject: "Portfolio Contact Submission",
          TextPart:
            this.state.name +
            "\n" +
            this.state.email +
            "\n" +
            this.state.message,
          CustomID: "AppGettingStartedTest",
        },
      ],
    });
    request
      .then((result) => {
        console.log(result.body);
      })
      .catch((err) => {
        console.log(err.statusCode);
      });
      */
  }
}

export default Contact;
