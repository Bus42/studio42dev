import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function Contact() {
  const [data, setData] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "email@provider.com",
    reason: "default",
    comments: "Tell me a little more",
  });

  const sendEmail = () => {
    emailjs
      .send("default_service", "feedback", data, "user_E6Sw8jgkSYgDQSn8TxTYv")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.querySelector(".invalid")) {
      console.log("invalid input");
    } else {
      sendEmail();
    }
  };

  return (
    <div id="contact" className="row">
      <form id="contact_form" className="col s12" onSubmit={handleSubmit}>
        <div className="input-field col s10 offset-s1">
          <label className="active" htmlFor="firstName">First Name</label>
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
        </div>
        <div className="input-field col s10 offset-s1">
          <label className="active" htmlFor="lastName">Last Name</label>
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
        </div>
        <div className="input-field col s10 offset-s1">
          <label className="active" htmlFor="email">Email</label>
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
        </div>
        <div className="input-field col s10 offset-s1">
          <label className="active" className="active" htmlFor="reason">
            How can I help?
          </label>
          <select
            name="reason"
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
            <option value="has some feedback for you">I have a comment</option>
          </select>
        </div>
        <div className="input-field col s10 offset-s1">
          <label className="active" htmlFor="comments">Additional Comments</label>
          <textarea
            onChange={(e) => {
              let newData = { ...data };
              newData.comments = e.target.value;
              setData(newData);
            }}
            name="comments"
            className="materialize-textarea"
            placeholder={data.comments}
          ></textarea>
        </div>
        <div className="col s8 offset-s1">
          <button
            type="submit"
            className="btn waves-effect waves-light grey darken-3 white-text text-darken-2"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
