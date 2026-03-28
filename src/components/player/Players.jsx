import React, { use } from 'react';
import AvilablePlayers from '../availablePlayers/AvilablePlayers';

const Players = ({ playersPromise }) => {
  const players = use(playersPromise);
  console.log(players);

  return (
    <div className='container mx-auto'>
      Players: {players.length}
      <AvilablePlayers players={players} />
    </div>
  );
};

export default Players;