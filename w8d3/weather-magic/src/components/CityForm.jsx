import { useState } from "react"

/**
 * 
 * Form to type a specific city that is not a button yet
 * 
 * @param onSubmit - Function to handle the city typed in the form 
 * 
 */
export default function CityForm(props) {
  const [city, setCity] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (city) {
      props.onSubmit(city)
      setCity("")
    }
  }
  const handleChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="city" placeholder="Enter a city name" value={city} onChange={handleChange} />
      <button>Check weather!</button>
    </form>
  )
}