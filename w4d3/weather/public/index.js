// Bad! (Well not that bad, just not great)
const cityTemperature = `
    <article>
      <h1>Weather for Toronto</h1>
      <p>It is currently 9C</p>
      <p>And it's cloudy</p>
    </article>
`

// Create a weather element by
//  - Creating the single elements (h1, p, p)
//  - Append those to article
//  - Return the article element

const createAWeatherThingy = (city, temp, desc) => {
  const $newCityWeather = $('<article>')

  const $newCityTitle = $('<h1>')
  $newCityTitle.append(`Weather for ${city}`)

  const $newCityTemp = $('<p>')
  $newCityTemp.append(`It is currently ${temp}C`)

  const $newCityDescription = $('<p>')
  $newCityDescription.append(`And it is ${desc}`)

  $newCityWeather.append($newCityTitle)
  $newCityWeather.append($newCityTemp)
  $newCityWeather.append($newCityDescription)

  return $newCityWeather
}

// Parse the data coming in the weather object
// Create a weather element with previous data
// Append it to the .weather section in our HTML

const parseWeatherDataAndInsertWeatherThingy = weatherObject => {
  const temp = Math.round(weatherObject.main.temp - 273.15)
  const name = weatherObject.name
  const description = weatherObject.weather[0].description

  const generatedWeatherComponent = createAWeatherThingy(name, temp, description)

  $('.weather').append(generatedWeatherComponent)
}


// Store the API key
// Loading text while loading
// Execute an AJAX request to the weather API
// If successful, empties the weather section and do the callback
// If fails, console the error
// Always, write something dumb in the console

const fetchDataWithAJAX = (cityName, actionWhenDone) => {
  const apiKey = "09fd719b4b698ec0260e424f83378e3d"

  $('.weather').text('LOADING')

  $.ajax({
    url: `//api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
    method: "GET"
  })
    .then(res => {
      $('.weather').empty()
      actionWhenDone(res)
    })
    .catch(err => console.log(err))
    .always(() => console.log('Ah yiss, something something breadcrumbs')) //jQuery AJAX special thingy
}

// Storing the value of input in city
// Create a post request with jquery AJAX to /history with the data of city
// If it worked, console the success
// If it fails, console the error

const sendCityToHistoryRoute = (city) => {
  // const city = $("input").val()
  $.ajax({
    url: "/history",
    method: "POST",
    data: { city: city }
  })
    .then(res => console.log('sent to history properly', res))
    .catch(err => console.log(err))
}

// Stop the default action of the event (form reload in our case)
// Log the event
// Log the value of the input
// Store the value of the input in cityName
// We call the sendCityToHistoryRoute
// We call the fetchDataWithAJAX with parse... as a callback

const handleSubmit = event => {
  event.preventDefault()
  console.log(event)
  console.log($('input').val())
  const cityName = $('input').val()
  sendCityToHistoryRoute(cityName)
  fetchDataWithAJAX(cityName, parseWeatherDataAndInsertWeatherThingy)
}

$(document).ready(() => {
  // $('.weather').append(createAWeatherThingy('Ottawa', 9, 'rainy'))
  // $('.weather').append(createAWeatherThingy('Toronto', 'two high-fives or 11', 'rainy'))

  // fetchDataWithAJAX('Ottawa', parseWeatherDataAndInsertWeatherThingy)
  // fetchDataWithAJAX('Montreal', console.log)


  $('form').on('submit', handleSubmit)

  $.ajax({
    url: "/history",
    method: "GET"
  })
    .then(res => $('body').append(res))
})

