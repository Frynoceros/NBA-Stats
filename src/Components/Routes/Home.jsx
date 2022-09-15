import {Link} from 'react-router-dom';

export default function Home() {
  return (
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
          <Link to={'/teams/POR'}>Roster</Link>
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
  );
}
