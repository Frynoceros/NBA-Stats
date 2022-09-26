import {useState, useEffect} from 'react';
export default function LeagueLeaders() {
  const [leaders, setLeaders] = useState([]);
  // const [year, setYear] = useState('');
  // const [value, setValue] = useState();

  const selectYear = async () => {};

  const getLeaders = async () => {
    try {
      const response = await fetch(
        'http://localhost:8010/proxy/leagueleaders?ActiveFlag=&LeagueID=00&PerMode=Totals&Scope=S&Season=2021-22&SeasonType=Regular+Season&StatCategory=PTS'
      );
      const jsonData = await response.json();
      console.log('json', jsonData.resultSet.rowSet.slice(0, 10));
      setLeaders(jsonData.resultSet.rowSet.slice(0, 10));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLeaders();
  }, []);

  return (
    <div className="min-w-full">
      <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900">
        <h2 className="mb-3 text-2xl font-semibold leading-tight">Roster</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg dark:bg-gray-700">
              <tr className="text-right">
                <th title="Rank" className="p-3 text-center">
                  Rank
                </th>
                <th title="Player" className="p-3 text-center">
                  Player
                </th>
                <th title="Team" className="p-3 text-center">
                  Team
                </th>
                <th title="GP" className="p-3 text-center">
                  GP
                </th>
                <th title="Min" className="p-3 text-center">
                  Min
                </th>
                <th title="FGM" className="p-3 text-center">
                  FGM
                </th>
                <th title="FGM" className="p-3 text-center">
                  FGA
                </th>
                <th title="FG PCT" className="p-3 text-center">
                  FG PCT
                </th>
                <th title="FG3M" className="p-3 text-center">
                  FG3M
                </th>
                <th title="FG3A" className="p-3 text-center">
                  FG3A
                </th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((player, index) => {
                return (
                  <tr
                    className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800"
                    key={player[0]}
                  >
                    <td className="px-3 py-2 text-center">
                      <span>{player[1]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[2]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[3]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[4]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player[5]}</span>
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
