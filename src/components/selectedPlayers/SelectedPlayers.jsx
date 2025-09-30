import React from 'react';
import SelectedCards from '../SelectedCards/SelectedCards';

const SelectedPlayers = ({purchasedPlayers}) => {
    console.log(purchasedPlayers)
    return (
        <div className='mx-auto max-w-[1200px]'>
            {
                purchasedPlayers.map(player=><SelectedCards player={player}></SelectedCards>)
            }
        </div>
    );
};

export default SelectedPlayers;