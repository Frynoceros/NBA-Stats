import {Link, useParams, useOutletContext} from 'react-router-dom';
import nbaSchedule from '../assets/nbaSchedule';

export default function Hero({currTeam, setCurrTeam}) {
  const {teamId} = useParams();

  let todaysGames = [];
  function getTodaysGames() {
    const today = getFormattedDate(new Date());

    nbaSchedule.filter((date, index) => {
      if (
        date.leagueSchedule.gameDates[0].gameDate === `${today} 12:00:00 AM`
      ) {
        return (todaysGames = date.leagueSchedule.gameDates[0].games);
      }

      console.log('No Games');
      return 'No Games Today';
    });
  }

  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
  }

  getTodaysGames();
  // console.log(todaysGames);

  return (
    <div className=" w-screen card bg-base-300 rounded-box border border-white ">
      <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-base-300 ">
        <h1 className="text-5xl font-bold dark:text-gray-50">NBA STATS</h1>
      </div>

      <div className="flex justify-evenly m-3 p-3 ">
        {todaysGames.map((gameCard) => {
          const date = new Date(gameCard.gameDateTimeUTC);
          return (
            <div
              className="card flex flex-grow bg-neutral text-neutral-content mx-2 mb-3 border border-radius-10"
              key={gameCard.gameId}
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  {
                    <>
                      <Link
                        to={`${gameCard.awayTeam.teamId}`}
                        value={gameCard.awayTeam.teamId}
                      >
                        {gameCard.awayTeam.teamName}
                      </Link>
                      vs
                      <Link
                        to={`${gameCard.homeTeam.teamId}`}
                        value={gameCard.homeTeam.teamId}
                      >
                        {gameCard.homeTeam.teamName}
                      </Link>
                    </>
                  }
                </h2>
                <p>{date.toLocaleString()}</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary"></button>
                  <button className="btn btn-ghost">Deny</button>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
