import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import M from "materialize-css";
import "./contact.scss";
import ConfirmModal from "./ConfirmModal";
import Select from "./Select";

export default function Contact() {
  const [data, setData] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "email@provider.com",
    reason: "default",
    comments: "Tell me a little more",
  });

  const USER_ID = "user_E6Sw8jgkSYgDQSn8TxTYv"

  useEffect(() => {
    M.AutoInit();
    const abortcontroller = new AbortController();
    emailjs.init(USER_ID);
    return function cleanup() {
      abortcontroller.abort();
    };
  }, []);

  const clearForm = () => {
    const defaults = {
      firstName: "First Name",
      lastName: "Last Name",
      email: "email@provider.com",
      reason: "default",
      comments: "Tell me a little more",
    };
    setData(defaults);
    document.getElementById("contact_form").reset();
  };

  const sendEmail = () => {
    emailjs
      .send("default_service", "feedback", data)
      .then(
        (res) => {
          console.log("Success!", res.status, res.text);
          clearForm();
          showConfirm();
        },
        (err) => {
          console.log(err.text);
          /** Display error modal, do not clear form */
        }
      );
  };

  const showConfirm = () => {
    const confirmModal = document.querySelector("#confirm-modal");
    const modalInstance = M.Modal.getInstance(confirmModal);
    modalInstance.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <div id="contact" className="row">
      <form id="contact_form" className="col s12" onSubmit={handleSubmit}>
        <div className="input-field col s10 offset-s1">
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
          <input
            className="validate"
            onChange={(e) => {
              let newData = { ...data };
              newData.email = e.target.value;
              setData(newData);
            }}
            required
            type="email"
            name="email"
            placeholder={data.email}
          />
        </div>
        <div className="input-field col s10 offset-s1">
          <Select data={data} setData={setData} />
        </div>
        <div className="input-field col s10 offset-s1">
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
      <ConfirmModal clearForm={clearForm} />
    </div>
  );
}
