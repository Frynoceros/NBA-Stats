import React from 'react';
import {useEffect, useState} from 'react';
import {nbaLogos} from '../../../public/Logos/nbaLogos';
import {Link} from 'react-router-dom';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    try {
      const response = await fetch(
        'https://free-nba.p.rapidapi.com/teams?page=0',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              'b5c4c39097mshbdf9c62192f635ep17097ejsn1c288da36596',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
          },
        }
      );
      const jsonData = await response.json();
      setTeams(jsonData.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  console.log('teams', teams);

  return (
    <div className=" flex flex-row w-full card bg-base-300 rounded-box flex-wrap items-end border border-white p-2">
      {teams.map((el) => {
        return (
          <div
            className="basis-1/6 card h-1/6 bg-primary flex-col shadow-xl flex  grow m-1 place-items-center shrink-0 h-48 w-36"
            key={el.abbreviation}
          >
            <div className="flex flex-row h-4/5 mb-3 ">
              <figure className=" place-items-center object-contain">
                <img
                  className="p-5"
                  src={nbaLogos[el.abbreviation]}
                  alt={`NBA Logo for ${el.full_name}`}
                />
              </figure>
            </div>
            <div className="h-1/5 flex flex-end">
              <p className="card-title text-base mb-2 flex-end">{el.city}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
