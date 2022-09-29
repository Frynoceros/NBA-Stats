import React, {useState, useEffect} from 'react';
import '../assets/Styles/App.css';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Teams from '../Components/Routes/Teams';
import TeamHome from '../Components/Routes/TeamHome';
import Roster from '../Components/Routes/Roster';
import Schedule from './Schedule';
import AllTimeLeaders from './Routes/AllTimeLeaders';
import LeagueLeaders from './Routes/LeagueLeaders';
import teamData from '../assets/teamData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Teams />} />

          <Route path="/" element={<Teams />} />
          <Route path="/:teamId" element={<TeamHome />}>
            <Route path="schedule" element={<Schedule />} />
          </Route>

          <Route path="allTimeLeaders" element={<AllTimeLeaders />}></Route>
          <Route path="leagueLeaders" element={<LeagueLeaders />}></Route>

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
