import { useState } from 'react'

export default function PlayerForm(props) {
  // const [name, setName] = useState("")
  // const [gamerTag, setGamerTag] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    gamerTag: ""
  })

  const handleSubmit = event => {
    event.preventDefault()
    props.addNewPlayer(formData)
  }

  const handleName = event => {
    const newValue = event.target.value
    // if (newValue.length < 5) {
    // setName(newValue)
    // }
  }
  // const handleGamerTag = event => setGamerTag(event.target.value)

  const handleChange = event => {
    const value = event.target.value
    const nameOfTheKeyInTheFormObj = event.target.name
    const newFormData = { ...formData }
    newFormData[nameOfTheKeyInTheFormObj] = value
    setFormData(newFormData)

    // setFormData({...formData, [nameOfTheKeyInTheFormObj]:value})
  }

  return (
    <section>
      <h1>Add a new player</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter the player name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="text"
          name="gamerTag"
          placeholder="Enter the player gamerTag"
          onChange={handleChange}
          value={formData.gamerTag}
        />

        <button type="submit">Add the player</button>
      </form>
    </section>
  )
}