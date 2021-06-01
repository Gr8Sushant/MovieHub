import React, { Component } from "react";
import axios from "axios";
import './css/faq.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      success: "",
      error: ""
    };
  }

  submitMessage(e) {
    e.preventDefault();
    let comment = document.getElementById("comment");
    axios
      .post("http://localhost:3000/comment", {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value
      })
      .then(res => {
        this.setState({ success: "Your comment has been send successfully" });
      })
      .catch(error => {
        this.setState({ error: "Something went wrong :(" });
      });

    e.target.reset();
  }

  render() {
    return (
      <>
        <div className="form">
          <p>{this.state.success}</p>
          <p>{this.state.error}</p>
          <form id="comment" method="post" onSubmit={this.submitMessage}>
            <h1>Contact Form</h1>
            <br/>
            <br/>
            <p>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </p>
            <p>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </p>
            <p>
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                id="email"
                name="email"
                required
              />
            </p>
            <p>
              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>
            </p>
            <p>
              <button type="submit" className="submitbutton">
                Submit
              </button>
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default Contact;
