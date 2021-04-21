export default function CityButtonListItem(props) {

  return (
    <button
      name={props.cityName}
      onClick={props.setCurrentCity}
      data-testid="cityButton"
      className={`${props.selected ? 'selected' : ''}`}
    >
      {props.cityName}
    </button>
  )
}