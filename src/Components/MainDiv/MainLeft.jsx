import React from 'react';
import {useEffect, useState} from 'react';
import {nbaLogos} from '../../../public/Logos/nbaLogos';

export default function MainLeft({getTeams, setTeams, teams}) {
  useEffect(() => {
    getTeams();
  }, []);

  console.log('teams', teams);

  return (
    <div className="mainLeft flex flex-row w-full card bg-base-300 rounded-box flex-wrap place-items-center border border-white p-2">
      {teams.map((el) => {
        return (
          <div className="basis-1/6 card h-1/6 p-1 bg-primary shadow-xl flex justify-center grow items-center m-1">
            <figure className="h-20 w-20">
              <img
                className="max-w-full max-h-full"
                src={nbaLogos[el.abbreviation]}
                alt={`NBA Logo for ${el.full_name}`}
              />
            </figure>
            {/* <div className="card-body"> */}
            <h2 className="card-title text-center">{el.city}</h2>
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
}
