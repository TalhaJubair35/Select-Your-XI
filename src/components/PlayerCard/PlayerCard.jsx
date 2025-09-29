import React, { useState } from "react";

const PlayerCard = ({ player, setAvailableBalance, availableBalance, purchasedPlayers ,setPurchasedPlayers}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (playerData) => {
    const playerPrice=parseInt(playerData["price"].split("USD").join("").split(",").join(""))
    if (availableBalance<playerPrice) {
        return alert("no coins available")
    }
    setIsSelected(true);
    setAvailableBalance(
      availableBalance -playerPrice
        
    );
    setPurchasedPlayers([...purchasedPlayers,playerData])
  };
  return (
    <div key={player["player-id"]} className="card bg-base-100  shadow-sm">
      <figure>
        <img
          className="w-full h-[300px] object-cover"
          src={player["player-image"]}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{player["player-name"]}</h2>

        <div className="flex items-center justify-between border-b-1 pb-2">
          <span>{player["player-country"]}</span>
          <button className="btn">{player["player-role"]}</button>
        </div>
        <div className="flex justify-between font-bold">
          <span>Rating</span>
          <span>{player["rating"]}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>{player["batting-style"]}</span>
          <span>{player["bowling-style"]}</span>
        </div>

        <div className="card-actions flex items-center justify-between">
          <p>Price:{player["price"]}</p>
          <button
            disabled={isSelected}
            onClick={() => handleSelected(player)}
            className="btn btn-primary"
          >
            {isSelected === true ? "Selected" : "Choose player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
