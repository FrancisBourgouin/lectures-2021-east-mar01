import { useState } from 'react'
import useControlledForm from '../../hooks/useControlledForm'

export default function Form(props) {
  const initialFields = { city: "", age: "", potato: "", something: "" }
  const { formData, handleSubmit, handleChange } = useControlledForm(initialFields, props.onSubmit)

  const parsedInputs =
    Object
      .keys(initialFields)
      .map(field => {
        <input
          type="text"
          name={field}
          value={formData[field]}
          onChange={handleChange}
          placeholder={field}
        ></input>
      })
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h1>Please enter a city name</h1>
      {parsedInputs}
    </form>
  )
}