import { useState } from 'react'
import useWeatherData from '../../hooks/useWeatherData'

import CurrentWeather from './CurrentWeather'
import Form from './Form'

import "./Weather.scss"

export default function Weather(props) {
  const { currentCity, setCurrentCity } = props
  const { weatherData, setCity } = useWeatherData(currentCity)

  const onSubmit = (formData) => {
    setCity(formData.city)
    setCurrentCity(formData.city)
  }

  return (
    <section className="Weather">
      I am Weather
      <CurrentWeather city={currentCity} weatherData={weatherData} />
      <Form onSubmit={onSubmit} />
    </section>
  )
}