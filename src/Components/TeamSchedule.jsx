import {Link, useOutletContext, useParams} from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';
import {nbaLogos} from '../assets/Logos/nbaLogos';
import teamData from '../assets/teamData';
import {data} from 'autoprefixer';

// https://cdn.nba.com/static/json/staticData/scheduleLeagueV2_1.json

export default function TeamSchedule({teamId}) {
  function getLogo(td, tid) {
    for (let i = 0; i < td.length; i++) {
      if (td[i].teamId === Number(tid)) {
        return td[i].logo;
      }
    }
  }

  const teamCity = () => {
    for (let i = 0; i < teamData.length; i++) {
      if (teamData[i].teamId === Number(teamId)) return teamData[i].location;
    }
  };

  const city = teamCity(teamId);

  const [teamSchedule, setTeamSchedule] = useState([]);
  const team = Number(teamId);
  const [currTeam, setCurrTeam] = useOutletContext();

  async function getTeamG(teamSelected) {
    try {
      const response = await fetch(
        'http://localhost:8011/proxy/static/json/staticData/scheduleLeagueV2_1.json'
      );

      const jsonData = await response.json();

      const teamGames = jsonData.leagueSchedule.gameDates;

      const cache = [];
      for (let i = 0; i < teamGames.length; i++) {
        // console.log(teamGames[i]);
        for (let j = 0; j < teamGames[i].games.length; j++) {
          if (teamGames[i].games[j].awayTeam.teamId === teamSelected)
            cache.push(teamGames[i].games[j]);
          if (teamGames[i].games[j].homeTeam.teamId === teamSelected)
            cache.push(teamGames[i].games[j]);
        }
      }
      setTeamSchedule(cache);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    // getTeamGames(team);
    getTeamG(team);
  }, []);
  // console.log(logo(teamId));
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
                    <img
                      src={getLogo(teamData, nextGames.awayTeam.teamId)}
                      className="object-fit h-2/3"
                      key={`${nextGames.awayTeam.teamId}`}
                    />
                    <h2 className="card-title flex justify-center my-2">
                      {`${nextGames.awayTeam.teamName}`}
                    </h2>
                    <p>{`${nextGames.awayTeam.wins} - ${nextGames.awayTeam.losses}`}</p>
                  </div>

                  <p>vs</p>

                  <div className="basis-1/3 box-content  ">
                    <img
                      src={getLogo(teamData, nextGames.homeTeam.teamId)}
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
