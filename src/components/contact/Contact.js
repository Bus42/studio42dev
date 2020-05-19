import React, { useState } from "react";
import "./contact.scss";

const handleSubmit = () => {
  console.log("handleSubmit function called");
};

export default function Contact() {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [reason, setReason] = useState("default");
  const [email, setEmail] = useState("address@provider.com");
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
              <label htmlFor="firstName">What is your first name ?</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                required
                minLength="2"
                type="text"
                name="firstName"
                placeholder={firstName}
              />
              <label htmlFor="lastName">What is your last name ?</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                required
                minLength="2"
                type="text"
                name="lastName"
                placeholder={lastName}
              />
              <label htmlFor="email">What email do I reply to?</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder={email}
              />
              <div className="input-field col s12">
                <select
                  onChange={(e) => setReason(e.target.value)}
                  required
                  defaultValue={reason}
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
              <input type="submit"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
