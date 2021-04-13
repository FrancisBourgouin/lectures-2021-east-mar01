export default function PlayerListItem(props) {
  const handleClick = () => props.giveAWin(props.gamerTag)
  return (
    <li onClick={handleClick}>
      <h1>{props.gamerTag} aka {props.name}</h1>
      {props.wins > 1 && <h2>{props.wins} wins</h2>}
      {props.wins === 1 && <h2>{props.wins} win</h2>}
      {props.wins === 0 && <h2>no wins :(</h2>}
    </li>
  )
}