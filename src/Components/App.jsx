import React, {useState, useEffect} from 'react';
import '../assets/Styles/App.css';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Teams from '../Components/Routes/Teams';
import TeamHome from '../Components/Routes/TeamHome';
import Roster from '../Components/Routes/Roster';
import TeamSchedule from './TeamSchedule';
import AllTimeLeaders from './Routes/AllTimeLeaders';
import LeagueLeaders from './Routes/LeagueLeaders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Teams />} />

          <Route path="/" element={<Teams />} />
          <Route path="/:teamId" element={<TeamHome />}>
            <Route path="schedule" element={<TeamSchedule />} />
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
