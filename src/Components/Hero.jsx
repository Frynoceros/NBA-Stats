import Home from './Routes/Home';
import {Link} from 'react-router-dom';
export default function Hero() {
  return (
    <div className=" w-screen card bg-base-300 rounded-box  border border-white">
      <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-base-300">
        <h2 className="text-5xl font-bold dark:text-gray-50">NBA</h2>
        <p className="dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          facilis quod accusantium beatae cum nam adipisci reiciendis omnis
          possimus error quo animi voluptas magni, at incidunt. Nulla ex at
          ullam corporis quidem adipisci vitae, perferendis dolorem libero minus
          atque tenetur enim pariatur cupiditate commodi in beatae, ipsa
          eligendi? Quis, saepe.
        </p>
      </div>
      <div className="flex-row justify-between">
        <div>
          <ul className="flex flex-row justify-evenly text-xl font-semibold">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'teams'}>Teams</Link>
            </li>
            <li>
              {' '}
              <Link to={'/roster'}>Roster</Link>
            </li>
            <li>
              {' '}
              <Link to={'/teams/POR'}>Season Leaders</Link>
            </li>
            <li>
              {' '}
              <Link to={'/teams/POR'}>All Time Leaders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
