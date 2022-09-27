import {useState, useEffect} from 'react';

export default function Roster({currTeam, setCurrTeam}) {
  const [roster, setRoster] = useState([]);
  const [year, setYear] = useState('');
  const [value, setValue] = useState();

  const selectYear = async () => {};

  const getRoster = async () => {
    try {
      const response = await fetch(
        `http://localhost:8010/proxy/commonteamroster?LeagueID=00&Season=2022-23&TeamID=1610612757`,
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
      console.log('json', jsonData.resultSets[0].rowSet);
      setRoster(jsonData.resultSets[0].rowSet);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getRoster();
  }, []);

  console.log(currTeam);

  return (
    <div className="min-w-full">
      <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
        <h2 className="mb-3 text-2xl font-semibold leading-tight">Roster</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg dark:bg-gray-700">
              <tr className="text-right">
                <th title="PLAYER" className="p-3 text-center">
                  PLAYER
                </th>
                <th title="NUMBER" className="p-3 text-center">
                  NUMBER
                </th>
                <th title="POS" className="p-3 text-center">
                  POS
                </th>
                <th title="HEIGHT" className="p-3 text-center">
                  HEIGHT
                </th>
                <th title="WEIGHT" className="p-3 text-center">
                  WEIGHT
                </th>
                <th title="BIRTHDATE" className="p-3 text-center">
                  BIRTHDATE
                </th>
                <th title="Age" className="p-3 text-center">
                  AGE
                </th>
                <th title="EXP" className="p-3 text-center">
                  EXP
                </th>
                <th title="School" className="p-3 text-center">
                  SCHOOL
                </th>
              </tr>
            </thead>
            <tbody>
              {roster.map((player, index) => {
                return (
                  <tr
                    className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800"
                    key={player[14]}
                  >
                    <td className="px-3 py-2 text-center">
                      <span>{player[3]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[6]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[7]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[8]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[9]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[10]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[11]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[12]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[13]}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
