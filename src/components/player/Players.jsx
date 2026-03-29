import React, { use } from 'react';
import AvilablePlayers from '../availablePlayers/AvilablePlayers';

const Players = ({ playersPromise }) => {
  const players = use(playersPromise);
  console.log(players);

  return (
    <div className='container mx-auto my-[60px]'>
      <div className='flex justify-between my-4'>
        <h2 className='font-bold text-2xl'>Avilable Players</h2>
        <div className=''>
          <button className="btn btn-neutral bg-yellow-200 border-0 rounded-2xl rounded-r-none">Avilable</button>
          <button className="btn btn-neutral rounded-2xl rounded-l-none">Selected</button>2
        </div>
      </div>
      <AvilablePlayers players={players} />
    </div>
  );
};

export default Players;