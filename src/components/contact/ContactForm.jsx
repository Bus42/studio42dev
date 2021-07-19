import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import M from "materialize-css";
import "./contactForm.scss";
import ConfirmModal from "./ConfirmModal";
import Select from "./Select";
import { USER_ID } from "../../constants/data";
import useForm from "../../hooks/useForm";

const ContactForm = () => {
    const initialFormValues = {
      firstName: "",
      lastName: "",
      email: "",
      reason: "How Can I Help?",
      comments: "",
    };

  const [formValues, handleChange, clearForm] = useForm(initialFormValues);

  const showConfirm = () => {
    const confirmModal = document.querySelector("#confirm-modal");
    const modalInstance = M.Modal.getInstance(confirmModal);
    modalInstance.open();
};

const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    //send email, show confirmation, and clear form
    console.log(formValues);
    showConfirm();
    clearForm();
  };

  useEffect(() => {
    M.AutoInit();
    const abortController = new AbortController();
    emailjs.init(USER_ID);
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <div id="contact" className="row">
      <form
        id="contact_form"
        action="submit"
        className="col s12"
        onSubmit={handleSubmit}
      >
        <div className="input-field col s10 offset-s1">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="validate"
            required
            minLength="2"
            name="firstName"
            onChange={handleChange}
            value={formValues.firstName}
          />
        </div>
        <div className="input-field col s10 offset-s1">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="validate"
            required
            minLength="2"
            name="lastName"
            onChange={handleChange}
            value={formValues.lastName}
          />
        </div>
        <div className="input-field col s10 offset-s1">
          <label htmlFor="email">email@provider.com</label>
          <input
            type="email"
            className="validate"
            required
            name="email"
            onChange={handleChange}
            value={formValues.email}
          />
        </div>
        <div className="input-field col s10 offset-s1">
          {/** Create label with dynamic content in Select component */}
          <Select formValues={formValues} handleChange={handleChange} />
        </div>
        <div className="input-field col s10 offset-s1">
          <label htmlFor="comments">Comments</label>
          <textarea
            className="materialize-textarea"
            required
            name="comments"
            onChange={handleChange}
            value={formValues.comments}
          ></textarea>
        </div>
        <div className="col s8 offset-s1">
          <button
            type="submit"
            className="btn waves-effect waves-light grey darken-3 white-text text-darken-2"
          >
            Submit
          </button>
        </div>
      </form>
      <ConfirmModal clearForm={clearForm} />
    </div>
  );
};

export default ContactForm;
