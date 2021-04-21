import CityButtonListItem from './CityButtonListItem';

/**
 * Shows a list of city buttons.
 * @param {Array} cityList - Array of city names
 * @param {String} currentCity - Current city value
 */

export default function CityButtonList(props) {
  const { cityList, currentCity, setCurrentCity } = props
  const parsedButtons = cityList.map(cityName =>
    <CityButtonListItem
      cityName={cityName}
      selected={cityName === currentCity}
      setCurrentCity={() => setCurrentCity(cityName)}
    />
  )
  return <section>
    <h1>List of cities</h1>
    {parsedButtons}
  </section>
}