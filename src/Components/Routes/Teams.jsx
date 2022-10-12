import React from 'react';
import teamData from '../../assets/teamData';
import Hero from '../Hero';
import {Link, useOutletContext, useParams} from 'react-router-dom';

export default function Teams() {
  const [currTeam, setCurrTeam] = useOutletContext();

  const handleClick = (teamId, simpleName) => {
    setCurrTeam(simpleName);
    console.log(teamName);
  };

  console.log('teams', currTeam);
  return (
    <>
      <Hero />

      <div className=" flex flex-row w-full card bg-base-300 rounded-box flex-wrap items-end border border-white p-2 ">
        {teamData.map(({teamId, logo, teamName, simpleName, location}) => {
          return (
            <div
              className="basis-1/6 card h-1/6 bg-primary flex-col shadow-xl flex grow m-1 place-items-center shrink-0 h-48 w-36"
              key={`tID ${teamId}`}
            >
              <div className="flex flex-row place-items-center h-4/5 p-5 shrink-0 h-36 w-36">
                <img
                  className="p-1 max-h-40 max-w-36 "
                  src={logo}
                  alt={`NBA Logo for ${teamName}`}
                />
              </div>
              <ul>
                <li>
                  <Link
                    key={`team ${teamId}`}
                    to={`${teamId}`}
                    value={teamName}
                    className="card-title text-xl text-center mx-5 flex-end "
                    onClick={() => handleClick}
                  >
                    {simpleName}
                  </Link>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
