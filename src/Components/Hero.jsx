import {Link, useParams} from 'react-router-dom';

export default function Hero() {
  const {teamId} = useParams();
  return (
    <div className=" w-screen card bg-base-300 rounded-box  border border-white">
      <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-base-300">
        <h2 className="text-5xl font-bold dark:text-gray-50">{teamId}</h2>
        <p className="dark:text-gray-400">Welcome to the NBA Stat Page!</p>
      </div>
      <div className="flex-row justify-between">
        <div>
          <ul className="flex flex-row justify-evenly text-xl font-semibold">
            <li>
              <Link to={'/'}>Home</Link>
            </li>

            <li>
              {' '}
              <Link to={'/leagueLeaders'}>Season Leaders</Link>
            </li>
            <li>
              {' '}
              <Link to={'/allTimeLeaders'}>All Time Leaders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
