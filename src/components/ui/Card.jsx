import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IoFlagSharp } from 'react-icons/io5';

const Card = ({ player }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={player.playerImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> <FaUser /> {player.playerName}</h2>
                    <div className='flex justify-between gap-2'>
                        <div className='flex gap-2 items-center'>
                            <IoFlagSharp />
                            <p>{player.playerCounter}</p>
                        </div>
                        <button className='btn btn-ghost'>{player.playerType}</button>
                    </div>
                    <div className="divider"></div>

                    <h2 className='font-bold text-xl'>{player.rating}</h2>

                    <div className='flex justify-between gap-2 font-bold'>
                        <p>{player.battingStyle}</p>
                        <p>{player.bowlingStyle}</p>
                    </div>

                    <div className='card-actions justify-end'>
                        <p className='font-bold'>{player.price}</p>
                        <button className='btn btn-primary'>Choose Player</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;