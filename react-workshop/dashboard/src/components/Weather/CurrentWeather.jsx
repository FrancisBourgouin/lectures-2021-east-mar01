import { kelvinToCelsius } from '../../helpers/weatherHelpers'

export default function CurrentWeather(props) {
  const { weatherData, city } = props

  return (
    <section className="CurrentWeather">
      {weatherData && <h1>Current weather for {city}</h1>}
      {weatherData && <h2>{kelvinToCelsius(weatherData.main.temp)}</h2>}
    </section>
  )
}