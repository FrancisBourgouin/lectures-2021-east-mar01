import { useState } from 'react'

export default function Form(props) {
  const [formData, setFormData] = useState({
    title: "",
    text: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('fire!')
    props.onSubmit(formData)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h1>Please enter a title & text</h1>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Text"
      />
      <button type="submit">Add</button>
    </form>
  )
}