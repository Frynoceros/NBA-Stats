import {Link, useOutletContext, useParams} from 'react-router-dom';
import {useState} from 'react';
import nbaSchedule from '../assets/nbaSchedule';
import {useEffect} from 'react';

export default function TeamSchedule({teamId}) {
  // const {teamId} = useParams;

  const [teamSchedule, setTeamSchedule] = useState([]);
  const team = Number(teamId);
  const gameDates = nbaSchedule[0].leagueSchedule.gameDates;
  const [currTeam, setCurrTeam] = useOutletContext();

  function getTeamGames(teamSelected) {
    const cache = [];
    for (let i = 0; i < gameDates.length; i++) {
      for (let j = 0; j < gameDates[i].games.length; j++) {
        if (gameDates[i].games[j].awayTeam.teamId === teamSelected)
          cache.push(gameDates[i].games[j]);
        if (gameDates[i].games[j].homeTeam.teamId === teamSelected)
          cache.push(gameDates[i].games[j]);
      }
    }
    setTeamSchedule(cache);
  }
  useEffect(() => {
    getTeamGames(team);
  }, []);

  return (
    <>
      <div className="card bg-base text-primary-content flex flex-col overflow-y-auto ">
        <h2 className="text-3xl text-center">{currTeam} Upcoming Games</h2>
        {teamSchedule
          .map((nextGames) => {
            return (
              <div
                className="m-2 bg-primary flex flex-col text-center"
                key={nextGames.gameId}
              >
                <div className="card-body text-center place-items-center flex flex-row ">
                  <div className="basis-1/3 flex-col mx-3">
                    <h2 className="card-title flex justify-center">
                      {`${nextGames.awayTeam.teamName}`}
                    </h2>
                    <p>{`${nextGames.awayTeam.wins} - ${nextGames.awayTeam.losses}`}</p>
                  </div>

                  <p>vs</p>
                  <div className="flex flex-col mx-3">
                    <h2 className="card-title flex justify-center">
                      {`${nextGames.homeTeam.teamName}`}
                    </h2>
                    <p>{`${nextGames.homeTeam.wins} - ${nextGames.homeTeam.losses}`}</p>
                  </div>
                </div>
                <div className="my-2">
                  <p>{`${nextGames.arenaName} - ${nextGames.arenaCity}, ${nextGames.arenaState}`}</p>
                  <p>{nextGames.gameTimeEst.toLocaleString()}</p>
                </div>
              </div>
            );
          })
          .slice(0, 10)}
      </div>
    </>
  );
}
//  https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_1.json
