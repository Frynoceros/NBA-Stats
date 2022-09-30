import {Link, useOutletContext, useParams} from 'react-router-dom';
import {useState} from 'react';
import nbaSchedule from '../assets/nbaSchedule';
import {useEffect} from 'react';
import {nbaLogos} from '../assets/Logos/nbaLogos';
import teamData from '../assets/teamData';

export default function TeamSchedule({teamId}) {
  // const {teamId} = useParams;

  const teamCity = () => {
    for (let i = 0; i < teamData.length; i++) {
      if (teamData[i].teamId === Number(teamId)) return teamData[i].location;
    }
  };

  const city = teamCity(teamId);
  console.log(city);

  const [teamSchedule, setTeamSchedule] = useState([]);
  const team = Number(teamId);
  const gameDates = nbaSchedule[0].leagueSchedule.gameDates;
  const [currTeam, setCurrTeam] = useOutletContext();

  function getTeamGames(teamSelected) {
    const cache = [];
    for (let i = 0; i < gameDates.length; i++) {
      console.log(gameDates[i]);
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
            const date = new Date(nextGames.gameDateEst);
            return (
              <div
                className="m-2 bg-primary flex flex-col text-center box-content  p-1 border-4"
                key={`sched ${nextGames.gameId}`}
              >
                <p>{date.toDateString()}</p>
                <div className="basis-1/3 card-body text-center place-items-center flex flex-row ">
                  <div className=" basis-1/3 box-content  ">
                    {/* <div className=" basis-1/3 flex-col mx-3 flex flex-grow"> */}
                    <img
                      src={nbaLogos[`${nextGames.awayTeam.teamCity}`]}
                      className="object-fit h-2/3"
                      key={`${nextGames.awayTeam.teamCity}`}
                    />
                    <h2 className="card-title flex justify-center my-2">
                      {`${nextGames.awayTeam.teamName}`}
                    </h2>
                    <p>{`${nextGames.awayTeam.wins} - ${nextGames.awayTeam.losses}`}</p>
                  </div>

                  <p>vs</p>

                  <div className="basis-1/3 box-content  ">
                    <img
                      src={nbaLogos[`${nextGames.homeTeam.teamCity}`]}
                      className="object-fit h-2/3"
                    />
                    <h2 className="card-title flex justify-center my-2">
                      {`${nextGames.homeTeam.teamName}`}
                    </h2>
                    <p>{`${nextGames.homeTeam.wins} - ${nextGames.homeTeam.losses}`}</p>
                  </div>
                </div>
                <div className=" basis-1/3 my-2">
                  <p>{`${nextGames.arenaName} - ${nextGames.arenaCity}, ${nextGames.arenaState}`}</p>
                  <p>{nextGames.gameStatusText}</p>
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
