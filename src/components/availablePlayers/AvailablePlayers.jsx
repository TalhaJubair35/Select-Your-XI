import React, { use } from 'react';

const AvailablePlayers = ({ playersPromise }) => {
    const playersData = use(playersPromise);
    console.log(playersData);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                playersData.map(player => <div key={player["player-id"]} className="card bg-base-100  shadow-sm">
                    <figure>
                        <img className='w-full h-[300px] object-cover'
                            src={player["player-image"]}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{player["player-name"]}</h2>

                        <div className='flex items-center justify-between border-b-1 pb-2'>
                            <span>{player["player-country"]}</span>
                            <button className='btn'>{player["player-role"]}</button>
                        </div>
                        <div className='flex justify-between font-bold'>
                            <span>Rating</span>
                            <span>{player["rating"]}</span>
                        </div>
                        <div className='flex justify-between font-bold'>
                            <span>{player["batting-style"]}</span>
                            <span>{player["bowling-style"]}</span>
                        </div>

                        <div className="card-actions flex items-center justify-between">
                            <p>Price:{player["price"]}</p>
                            <button className="btn btn-primary">Choose player</button>
                        </div>
                    </div>
                </div>)
            }
            
        </div>
    );
};

export default AvailablePlayers;