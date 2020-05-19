import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {
  const [data, setData] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "email@provider.com",
    reason: "default",
    comments: "",
  });

  const sendEmail = () => {
    emailjs
      .send(
        "default_service",
        "feedback", data,
        "user_E6Sw8jgkSYgDQSn8TxTYv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = () => {
    if (document.querySelector(".invalid")) {
      console.log("invalid input");
    } else {
      sendEmail();
    }
  };

  return (
    <div id="contact">
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            <h4>Thanks for reaching out!</h4>
          </div>
          <p>
            Fill out the form below and I will contact you as soon as possible.
          </p>
          <div className="card-content">
            <form id="contact_form" onSubmit={handleSubmit}>
              <div className="input-field">
                <input
                  className="validate"
                  onChange={(e) => {
                    let newData = { ...data };
                    newData.firstName = e.target.value;
                    setData(newData);
                  }}
                  required
                  minLength="2"
                  type="text"
                  name="firstName"
                  placeholder={data.firstName}
                />
                <input
                  className="validate"
                  onChange={(e) => {
                    let newData = { ...data };
                    newData.lastName = e.target.value;
                    setData(newData);
                  }}
                  required
                  minLength="2"
                  type="text"
                  name="lastName"
                  placeholder={data.lastName}
                />
                <label className="active" >What's your name?</label>
              </div>
              <div className="input-field">
                <input
                  className="validate"
                  onChange={(e) => {
                    let newData = { ...data };
                    newData.email = e.target.value;
                    setData(newData);
                  }}
                  type="email"
                  name="email"
                  placeholder={data.email}
                />
                <label>Email</label>
              </div>
              <div className="input-field">
                <select
                  onChange={(e) => {
                    let newData = { ...data };
                    newData.reason = e.target.value;
                    setData(newData);
                  }}
                  required
                  defaultValue={data.reason}
                >
                  <option value="default" disabled>
                    Choose an option
                  </option>
                  <option value="needs some work on their website">
                    My website needs some work
                  </option>
                  <option value="needs a new website">I need a website</option>
                  <option value="has a question for you">
                    I'd like to ask a question
                  </option>
                  <option value="has some feedback for you">
                    I have a comment
                  </option>
                </select>
                <label>How can I help?</label>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    onChange={(e) => {
                      let newData = { ...data };
                      newData.comments = e.target.value;
                      setData(newData);
                    }}
                    id="comments"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="comments">Additional Comments</label>
                </div>
              </div>
            </form>
            <button
              className="btn waves-effect waves-light grey darken-3 white-text text-darken-2 right"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
