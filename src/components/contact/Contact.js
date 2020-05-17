import React, { useState } from "react";

const Contact = () => {
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventdefault();
  };

  const [name, setName] = useState("Name");
  return (
    <form
      onSubmit={(e) => {
        e.preventdefault();
        handleSubmit(e);
      }}
    >
      <label>
        Name: {name}
        <input type="text" value={name} onChange={(e) => handleChange(e)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Contact;
