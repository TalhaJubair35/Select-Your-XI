import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import Navbar from "./components/navBar/Navbar";
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const [toggle, setToggle] = useState(true);
  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-[1200px] border border-red-500 mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">Available Players</h1>
        <div>
          <div className="p-6 font-bold">
            <button onClick={()=>setToggle(true)} className={` btn btn-ghost btn-outline 
            ${toggle===true?"bg-amber-200 text-black":""}`}>Available</button>
            <button onClick={()=>setToggle(false)} className={`btn btn-ghost btn-outline 
            ${toggle===false?"bg-amber-200 text-black":""}`}>
              selected <span>(0)</span>
            </button>
          </div>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
