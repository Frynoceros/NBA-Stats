import {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainRight from './MainRight';
import MainLeft from './MainLeft';

export default function Main() {
  return (
    <div className="flex flex-row w-screen card bg-base-300 rounded-box place-items-center border border-white m-1">
      <div className="flex basis-2/3 h-full w-full border border-white">
        {/* <Teams getTeams={getTeams} teams={teams} setTeams={setTeams} /> */}
        <MainLeft />
      </div>
      <div className="flex basis-1/3 flex-col w-full h-full border border-white">
        <MainRight />
      </div>
    </div>
  );
}
