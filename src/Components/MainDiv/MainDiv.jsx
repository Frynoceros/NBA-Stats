import {Outlet} from 'react-router-dom';
import Home from '../Routes/Home';

export default function Main() {
  return (
    <div className="flex flex-row w-screen card bg-base-300 rounded-box place-items-center border border-white m-1">
      <div className="basis-2/3 h-full w-full border border-white">
        <Home />
        <Outlet />
      </div>
      <div className="flex basis-1/3 flex-col w-full h-full border border-white"></div>
    </div>
  );
}
