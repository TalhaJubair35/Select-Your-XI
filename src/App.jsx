
import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/availablePlayers/AvailablePlayers'
import Navbar from './components/navBar/Navbar'
import SelectedPlayers from './components/selectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch('/Players.json')
  return res.json;
}

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>

    </>
  )
}

export default App
