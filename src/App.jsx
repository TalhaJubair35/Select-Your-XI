import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import Navbar from "./components/navBar/Navbar";
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers";
const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">{
          toggle===true?"available players":`selected players(${purchasedPlayers.length}/6)`
          }</h1>
        <div>
          <div className="p-6 font-bold">
            <button
              onClick={() => setToggle(true)}
              className={` btn btn-ghost btn-outline 
            ${toggle === true ? "bg-amber-200 text-black" : ""}`}
            >
              Available
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`btn btn-ghost btn-outline 
            ${toggle === false ? "bg-amber-200 text-black" : ""}`}
            >
              selected <span>({purchasedPlayers.length})</span>
            </button>
          </div>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
