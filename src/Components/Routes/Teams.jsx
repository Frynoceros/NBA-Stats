import React from 'react';
import {useEffect, useState, useContext} from 'react';
import teamData from '../../assets/teamData';

import {nbaLogos} from '../../assets/Logos/nbaLogos';
import {Link, Outlet} from 'react-router-dom';

export default function Teams() {
  const [currTeam, setCurrTeam] = useState('');

  // const teams = teamData.map((team) => {
  //   return team.location;
  // });

  const handleInput = (e) => {
    const buttonValue = e.target.innerHTML;

    console.log(buttonValue);
    setCurrTeam(buttonValue);
    console.log(teamData);
  };
  console.log('teams', currTeam);
  return (
    <div className=" flex flex-row w-full card bg-base-300 rounded-box flex-wrap items-end border border-white p-2 ">
      <div>
        <Outlet currTeam={currTeam} setCurrTeam={setCurrTeam} />
      </div>
      {teamData.map(
        ({teamId, abbreviation, teamName, simpleName, location}) => {
          return (
            <div
              className="basis-1/6 card h-1/6 bg-primary flex-col shadow-xl flex grow m-1 place-items-center shrink-0 h-48 w-36"
              key={`tID ${teamId}`}
            >
              <div className="flex flex-row place-items-center h-4/5 p-5 shrink-0 h-36 w-36">
                <figure className=" place-items-center ">
                  <img
                    className="p-5 max-h-40 max-w-36 "
                    src={nbaLogos[location]}
                    alt={`NBA Logo for ${teamName}`}
                  />
                </figure>
              </div>

              <ul>
                <li>
                  <Link
                    key={`team ${teamId}`}
                    to={`${abbreviation}`}
                    // value={teamName.abbreviation}
                    className="card-title text-xl text-center mx-5 flex-end "
                    onClick={() => setCurrTeam(teamId)}
                  >
                    {simpleName}
                  </Link>
                </li>
              </ul>
            </div>
          );
        }
      )}
    </div>
  );
}
