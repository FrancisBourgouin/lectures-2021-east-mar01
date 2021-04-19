export default function Weather(props) {

  return (
    <section>
      {props.cityName && <h1>
        <span>Current weather for</span>
        <span>{props.cityName}</span>
      </h1>}
      {props.cityName && !props.parsedTemp && <h2>
        No valid weather data for that city
      </h2>}
      {props.parsedTemp && <h2>
        <span>The temperature is</span>
        <span>{props.parsedTemp}</span>
      </h2>}
      {props.condition && <h3>
        <span>The weather is</span>
        <span>{props.condition}</span>
      </h3>}
    </section>
  )
}