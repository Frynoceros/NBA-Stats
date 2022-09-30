import {Outlet} from 'react-router-dom';
import Home from './Routes/Home';

export default function MainDivLayout() {
  return (
    <div className="flex flex-row w-screen h-screen card bg-base-300 rounded-box border border-white m-1 overflow-x">
      <div className="basis-2/3 h-full w-full border border-white">
        <h1 className="flex flex-row justify-center item-center">MAIN DIV</h1>
        <Outlet />
      </div>
      <div className="flex basis-1/3 flex-col w-full h-full border border-white"></div>
    </div>
  );
}
