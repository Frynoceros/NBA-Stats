import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <ul flex flex-row>
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
      </ul>
    </div>
  );
}
