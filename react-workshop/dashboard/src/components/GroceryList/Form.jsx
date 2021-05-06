import { useState } from 'react'

export default function Form(props) {
  const [formData, setFormData] = useState({
    item: ""
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
      <h1>Add an item</h1>
      <input
        type="text"
        name="item"
        value={formData.item}
        onChange={handleChange}
        placeholder="Name of the item"
      />
      <button type="submit">Add</button>
    </form>
  )
}