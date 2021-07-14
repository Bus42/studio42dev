import { useState } from "react";

const useForm = (initialState) => {

  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  return [formValues, setFormValues, handleChange];
};

export default useForm;
