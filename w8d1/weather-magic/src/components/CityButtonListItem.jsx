export default function CityButtonListItem(props) {

  return (
    <button
      onClick={props.setCurrentCity}
      data-testid="cityButton"
      className={`${props.selected ? 'selected' : ''}`}
    >
      {props.cityName}
    </button>
  )
}