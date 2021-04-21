import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import CityButtonListItem from './components/CityButtonListItem';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { formatWeather, kelvinToCelsiusConverter } from './helpers/tempHelpers';
import CityButtonList from './components/CityButtonList';
import CityForm from './components/CityForm';


function App() {
  const [cityList, setCityList] = useState(['Toronto', 'Montréal'])
  const [currentCity, setCurrentCity] = useState(null)
  const [currentWeatherData, setCurrentWeatherData] = useState(null)

  const condition = currentWeatherData && currentWeatherData.weather[0].description
  const parsedTemp = currentWeatherData && formatWeather(kelvinToCelsiusConverter(currentWeatherData.main.temp))
  useEffect(() => {
    if (currentCity) {
      axios
        .get(`//api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=09fd719b4b698ec0260e424f83378e3d`)
        .then(res => setCurrentWeatherData(res.data))
        .catch(err => console.log(err))
    }
  }, [currentCity])

  const addCity = (cityName) => {
    if (!cityList.includes(cityName)) {
      setCityList([...cityList, cityName])
    }
    setCurrentCity(cityName)
  }

  return (
    <div className="App">
      <h1>❄🌤🌩 Super weather app done fast ❄🌤🌩</h1>
      <CityForm onSubmit={addCity} />
      <CityButtonList {...{ cityList, currentCity, setCurrentCity }} />

      {/* {currentCity && <Weather cityName={currentCity} condition={condition} parsedTemp={parsedTemp} />} */}
      {currentCity && <Weather {...{ cityName: currentCity, condition, parsedTemp }} />}
    </div>
  );
}

export default App;
