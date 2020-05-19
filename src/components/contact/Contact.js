import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [data, setData] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "email@provider.com",
    reason: "default",
  });

  const handleSubmit = () => {
    console.log(data);
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
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <input
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
                <label>What's your name?</label>
              </div>
              <div className="input-field">
                <input
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
                  <option value="existing website">
                    My website needs some work
                  </option>
                  <option value="new website">I need a website</option>
                  <option value="inquiry">I'd like to ask a question</option>
                  <option value="feedback">I have a comment</option>
                </select>
                <label>How can I help?</label>
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
