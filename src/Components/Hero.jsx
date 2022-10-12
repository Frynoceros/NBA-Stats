import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import teamData from '../assets/teamData';

export default function Hero() {
  const [todaysGames, setTodaysGames] = useState([]);

  function getLogo(td, tid) {
    for (let i = 0; i < td.length; i++) {
      if (td[i].teamId === Number(tid)) {
        return td[i].logo;
      }
    }
  }

  async function checkToday() {
    try {
      const response = await fetch(
        'http://localhost:8011/proxy/static/json/liveData/scoreboard/todaysScoreboard_00.json'
      );
      const currGames = await response.json();
      setTodaysGames(currGames.scoreboard.games);
    } catch (err) {
      console.error(err.message);
    }
  }

  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
  }

  useEffect(() => {
    checkToday();
  }, []);

  return (
    <div className=" w-screen card bg-base-300 rounded-box border border-white ">
      <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-base-300 ">
        <h1 className="text-5xl font-bold dark:text-gray-50">NBA STATS</h1>
      </div>

      <h1 className="px-8 space-y-8 text-2xl font-bold dark:text-gray-50">
        Today's Games
      </h1>
      <div className="flex justify-evenly m-3 p-3 ">
        {todaysGames.map((gameCard) => {
          const date = new Date(gameCard.gameTimeUTC);
          return (
            <div
              className="card flex flex-grow bg-neutral text-neutral-content mx-2 mb-3 border border-radius-10"
              key={gameCard.gameId}
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  {
                    <>
                      <div>
                        <img
                          alt={`small image of ${gameCard.awayTeam.teamTricode} logo`}
                          src={getLogo(teamData, gameCard.awayTeam.teamId)}
                        />
                        <Link
                          to={`${gameCard.awayTeam.teamId}`}
                          value={gameCard.awayTeam.teamId}
                        >
                          {gameCard.awayTeam.teamTricode}
                        </Link>
                        <p className="text-base">{`${gameCard.awayTeam.wins} - ${gameCard.awayTeam.losses}`}</p>
                      </div>
                      <p className="text-base px-2">vs</p>
                      <div>
                        <img
                          alt={`small image of ${gameCard.homeTeam.teamTricode} logo`}
                          src={getLogo(teamData, gameCard.homeTeam.teamId)}
                        />
                        <Link
                          to={`${gameCard.homeTeam.teamId}`}
                          value={gameCard.homeTeam.teamId}
                        >
                          {gameCard.homeTeam.teamTricode}
                        </Link>
                        <p className="text-base">{`${gameCard.awayTeam.wins} - ${gameCard.awayTeam.losses}`}</p>
                      </div>
                    </>
                  }
                </h2>
                {gameCard.period === 0 ? (
                  <p>{date.toLocaleTimeString()}</p>
                ) : (
                  <p>{`${gameCard.awayTeam.score} - ${gameCard.homeTeam.score}`}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
