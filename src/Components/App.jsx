import React from 'react';
import '../assets/Styles/App.css';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Teams from '../Components/Routes/Teams';
import TeamHome from '../Components/Routes/TeamHome';
import Roster from '../Components/Routes/Roster';
import Home from '../Components/Routes/Home';

function App() {
  //   const [teams, setTeams] = useState([]);
  //   const [currTeam, setCurrTeam] = useState('');

  //   const handleInput = (e) => {
  //     const buttonValue = e.target.innerHTML;

  //     console.log(buttonValue);
  //     setCurrTeam(buttonValue);
  //     console.log(currTeam);
  //   };

  //   async function getTeams() {
  //     try {
  //       const response = await fetch(
  //         'https://free-nba.p.rapidapi.com/teams?page=0',
  //         {
  //           method: 'GET',
  //           headers: {
  //             'X-RapidAPI-Key':
  //               'b5c4c39097mshbdf9c62192f635ep17097ejsn1c288da36596',
  //             'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  //           },
  //         }
  //       );
  //       const jsonData = await response.json();
  //       setTeams(jsonData.data);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="teams" element={<Teams />}>
            <Route index element={<Teams />} />
            <Route path=":teamId" element={<TeamHome />} />
          </Route>

          <Route path="roster" element={<Roster />} />
          <Route index element={<Teams />} />
          <Route path="roster/:teamId " element={<Teams />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
