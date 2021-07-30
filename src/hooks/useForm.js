import { useState } from "react"

const useForm = (initialState) => {

  const [input, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  
  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...input, [name]: value });
  }

  const cleanFields = () => {
    setForm(initialState);
  }
  console.log(errors)
  return { input, onChangeInput, cleanFields, errors, setErrors };
}

export default useForm;