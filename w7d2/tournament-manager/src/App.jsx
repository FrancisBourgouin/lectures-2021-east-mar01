import { useState } from 'react'

import Header from './components/Header'
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
import WinButton from './components/WinButton';

import playerData from './playerData'

import './App.css';

function App() {
  const [players, setPlayers] = useState(playerData)

  const giveAWin = gamerTag => {
    // Other names: pendingState, prev
    setPlayers(prevState => {
      for (const gamerTag in players) {
        console.log(`PrevState: ${prevState[gamerTag].wins} playersObj: ${players[gamerTag].wins}`)
      }
      const newPlayers = { ...prevState }
      const updatedPlayer = { ...newPlayers[gamerTag] }
      updatedPlayer.wins++
      newPlayers[gamerTag] = updatedPlayer

      return newPlayers
    })
  }

  const badGiveAWin = gamerTag => {
    const newPlayers = { ...players }
    const updatedPlayer = { ...newPlayers[gamerTag] }
    updatedPlayer.wins++
    newPlayers[gamerTag] = updatedPlayer
    setPlayers(newPlayers)
  }

  const everybodyWins = () => {
    for (const gamerTag in players) {
      giveAWin(gamerTag)
    }
  }

  const addNewPlayer = (playerInfo) => {
    playerInfo.wins = 0
    const newPlayers = { ...players }
    newPlayers[playerInfo.gamerTag] = playerInfo
    setPlayers(newPlayers)
  }

  const deletePlayer = (gamerTag) => {
    const newPlayers = { ...players }
    delete newPlayers[gamerTag]
    setPlayers(newPlayers)
  }


  return (
    <div className="App">
      <Header />
      <PlayerList players={players} giveAWin={giveAWin} />
      <PlayerForm addNewPlayer={addNewPlayer} />
      <WinButton everybodyWins={everybodyWins} />
    </div>
  );
}

export default App;
