# Weather app!

- Fetch the weather
- Show the weather for a specific city
- Cities can be clicked to show the weather

# Horribly crude skeleton

body
  h1 title
  section
    h1 current weather for cityname
    h2 value of temp
    h3 conditions
  section
    button city a
    button city b
    button city c

# Components

- App (currentCity: String [State], currentWeather: Object [State])
- Weather (parsedTemp: String, currentCity: String, condition: String)
- CityButtonList (listOfCity: Array, currentCity: String)
- CityButtonListItem (cityName: String, selected: Boolean, setCurrentCity: Function)

# Helpers

- kelvinToCelsiusConverter
- formatWeather

# Tests

## Unit test

- kelvinToCelsiusConverter
  - should return null if temp is invalid
  - should return null if temp is under 0
  - should return 0 if temp is 273.15
  - should reutnr -10 if temp is 263.15

- formatWeather
  - should return null if temp is invalid
  - should return '0°C' if given 0
  - should return '-10°C' if given -10

## Integration tests

- Weather
  - should show nothing if there is no currentCity
  - should show a message if the is a currentCity but no weatherData
  - should show the name of the city, the temperature and condition if the data is valid

- CityButtonList
  - should show nothing if there is no listOfCity given
  - should show a list of button if there is a list of city given

- CityButtonListItem
  - should show nothing is there is no city name
  - should show the name of the city if given a city name
  - should have a special class if it is selected 
  - should do an action when clicked