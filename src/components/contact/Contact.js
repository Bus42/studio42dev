import React from "react";
import { useForm } from "react-hook-form";
import "./contact.scss";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
          <div className="card-action">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="name"
                ref={register({
                  required: true
                })}
                placeholder="What is your name?"
              />
              <h4>How can I help?</h4>
              <select name="Reason for contact" ref={register}>
                <option value="existing website">
                  My website needs some work
                </option>
                <option value="new website">I need a website</option>
                <option value="question">I'd like to ask a question</option>
                <option value="comment">I have a comment</option>
              </select>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
