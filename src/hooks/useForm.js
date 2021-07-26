import { useState } from "react";
const useForm = (initialState) => {
  const [input, setForm] = useState(initialState);
  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...input, [name]: value });
  };
  const cleanFields = () => {
    setForm(initialState);
  };
  return { input, onChangeInput, cleanFields };
};
export default useForm;