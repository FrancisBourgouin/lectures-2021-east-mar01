// Weather.stories.js
import CurrentWeather from '../components/Weather/CurrentWeather'
import Weather from '../components/Weather'
import Form from '../components/Weather/Form'
import "../components/Weather/Weather.scss"

export const FormComponent = () => <Form />
export const WeatherComponent = () => <Weather />
export const CurrentWeatherComponent = () => <CurrentWeather city="Montréal" />

export default {
  title: 'Components/Weather',
  component: Weather,
}
