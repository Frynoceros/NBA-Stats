import React, {useState, useEffect} from 'react';
import {useOutletContext, useParams} from 'react-router-dom';
import Roster from './Roster';
import TeamSchedule from '../TeamSchedule';
import teamData from '../../assets/teamData';
import TeamHero from '../TeamHero';

export default function TeamHome() {
  const {teamId} = useParams();
  const [roster, setRoster] = useState([teamId]);
  const [currTeam, setCurrTeam] = useOutletContext();

  const matchIdWithParams = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].teamId === Number(teamId)) {
        return setCurrTeam(arr[i].simpleName);
      }
    }
  };

  matchIdWithParams(teamData);
  console.log(teamData[0].teamId);
  console.log(teamId);
  console.log('currTeam', currTeam);

  const getRoster = async () => {
    try {
      const response = await fetch(
        `http://localhost:8010/proxy/commonteamroster?LeagueID=00&Season=2022-23&TeamID=${teamId}`,
        {
          method: 'GET',
          headers: {
            Connection: 'keep-alive',
            Accept: 'application/json, text/plain, */*',
            'x-nba-stats-token': 'true',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
            'x-nba-stats-origin': 'stats',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            Referer: 'https://stats.nba.com/',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
          },
        }
      );
      const jsonData = await response.json();
      // console.log('json', jsonData);
      setRoster(jsonData.resultSets[0].rowSet);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getRoster();
  }, [teamId]);

  return (
    <>
      <TeamHero />
      <div className="flex flex-row w-screen h-screen card bg-base-300 rounded-box border border-white m-1 overflow-x">
        <div className="basis-2/3 h-full w-full border border-white">
          <h1 className="flex flex-row justify-center item-center"></h1>
          <Roster roster={roster} setRoster={setRoster} />
        </div>
        <div className="flex basis-1/3 flex-col w-full h-full border border-white">
          <TeamSchedule teamId={teamId} />
        </div>
      </div>
    </>
  );
}
