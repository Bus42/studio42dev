import { useState } from "react";

const useForm = (initialState) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const clearForm = () => setFormValues(initialState);

  return [formValues, handleChange, clearForm];
};

export default useForm;
