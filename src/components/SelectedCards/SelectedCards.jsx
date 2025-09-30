import React from "react";

const SelectedCards = ({player}) => {
    console.log(player)
  return (
    <div className=" border-2 border-gray-400 flex justify-between items-center mb-3 rounded-2xl">
      <div className="flex items-center ">
        <img
          src="https://i.ibb.co.com/84mK8Gfx/tndulkar.webp"
          className="w-[60px]"
          alt=""
        />
        <div className="ml-2">
          <h1>{player["player-name"]}</h1>
          <p>{player["batting-style"]}</p>
        </div>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default SelectedCards;
