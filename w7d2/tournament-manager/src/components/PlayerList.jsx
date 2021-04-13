import PlayerListItem from "./PlayerListItem"

export default function PlayerList(props) {
  const playerList = Object.values(props.players)
  const parsedPlayers =
    Array.isArray(playerList)
    &&
    playerList.map(player => <PlayerListItem key={player.gamerTag} {...player} giveAWin={props.giveAWin} />)
  return (
    <section>
      <h1>List of players</h1>
      <ul>
        {parsedPlayers}
      </ul>
    </section>
  )
}