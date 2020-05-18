import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} placeholder="What is your name?" />
      <select name="Reason for contact" ref={register}>Reason for contact
        <option value="existing website">My website needs some work</option>
        <option value="new website">I need a website</option>
        <option value="question">I have a question</option>
        <option value="comment">I have a comment</option>
      </select>
      <input type="submit" />
    </form>
  );
}