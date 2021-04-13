export default function WinButton(props) {
  const handleClick = () => {
    props.everybodyWins()
  }
  return (
    <button onClick={handleClick}>EVERYBODY WINS</button>
  )
}