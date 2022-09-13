import {useEffect, useState} from 'react';
import {BrowserRouter, rout} from 'react-router-dom';
import MainRight from './MainRight';
import Teams from './Teams';

export default function Main() {
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    try {
      const response = await fetch(
        'https://free-nba.p.rapidapi.com/teams?page=0',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              'b5c4c39097mshbdf9c62192f635ep17097ejsn1c288da36596',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
          },
        }
      );
      const jsonData = await response.json();
      setTeams(jsonData.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex flex-row w-screen card bg-base-300 rounded-box place-items-center border border-white m-1">
      <div className="flex basis-2/3 h-full w-full border border-white">
        <BrowserRouter>
          <Routes>
            <Teams getTeams={getTeams} teams={teams} setTeams={setTeams} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="flex basis-1/3 flex-col w-full h-full border border-white">
        <MainRight getTeams={getTeams} teams={teams} setTeams={setTeams} />
      </div>
    </div>
  );
}
