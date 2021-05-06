import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useWeatherData(initialCity) {
  const [city, setCity] = useState(initialCity)
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    if (city) {
      const APIKEY = '09fd719b4b698ec0260e424f83378e3d'
      const url = `//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
      axios
        .get(url)
        .then(res => setWeatherData(res.data))
    }
  }, [city])

  return { weatherData, setCity }
}