import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import CityButtonListItem from './components/CityButtonListItem';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { formatWeather, kelvinToCelsiusConverter } from './helpers/tempHelpers';

const cityList = ['Toronto', 'Montréal']

function App() {
  const [currentCity, setCurrentCity] = useState(null)
  const [currentWeatherData, setCurrentWeatherData] = useState(null)

  useEffect(() => {
    if (currentCity) {
      axios
        .get(`//api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=09fd719b4b698ec0260e424f83378e3d`)
        .then(res => setCurrentWeatherData(res.data))
    }
  }, [currentCity])

  const parsedButtons = cityList.map(cityName =>
    <CityButtonListItem
      cityName={cityName}
      selected={cityName === currentCity}
      setCurrentCity={() => setCurrentCity(cityName)}
    />
  )
  return (
    <div className="App">
      <h1>Super weather app done fast</h1>
      {currentWeatherData && <Weather currentCity={currentCity} condition={currentWeatherData.weather[0].description} parsedTemp={formatWeather(kelvinToCelsiusConverter(currentWeatherData.main.temp))} />}
      {parsedButtons}
    </div>
  );
}

export default App;
