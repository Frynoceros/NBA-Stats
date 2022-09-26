import {useState, useEffect} from 'react';

export default function AllTimeLeaders() {
  const [AllTimeLeaders, setAllTimeLeaders] = useState([]);

  const getAllTimeLeaders = async () => {
    try {
      const response = await fetch(
        'https://stats.nba.com/stats/leagueLeaders?ActiveFlag=No&LeagueID=00&PerMode=Totals&Scope=S&Season=All%20Time&SeasonType=Regular%20Season&StatCategory=PTS'
      );
      const jsonData = await response.json();
      console.log('AllTime', jsonData.resultSet.rowSet.slice(0, 99));
      setAllTimeLeaders(jsonData.resultSet.rowSet.slice(0, 99));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllTimeLeaders();
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
                  #
                </th>
                <th title="Player" className="p-3 text-center">
                  Player
                </th>
                <th title="GP" className="p-3 text-center">
                  GP
                </th>
                <th title="MIN" className="p-3 text-center">
                  MIN
                </th>
                <th title="PTS" className="p-3 text-center">
                  PTS
                </th>
                <th title="FGM" className="p-3 text-center">
                  FGM
                </th>
                <th title="FGA" className="p-3 text-center">
                  FGA
                </th>
                <th title="FG %" className="p-3 text-center">
                  FG %
                </th>
                <th title="3PM" className="p-3 text-center">
                  3PM
                </th>
                <th title="3PA" className="p-3 text-center">
                  3PA
                  {/* GP	MIN	PTS	FGM	FGA	FG%	3PM	3PA	3P%	FTM	FTA	FT%	OREB	DREB	REB	AST	STL	BLK	TOV	EFG%	TS% */}
                </th>
                <th title="3P %" className="p-3 text-center">
                  3P %
                </th>
                <th title="FTM" className="p-3 text-center">
                  FTM
                </th>
                <th title="FTA" className="p-3 text-center">
                  FTA
                </th>
                <th title="FT %" className="p-3 text-center">
                  FT %
                </th>
                <th title="O-REB" className="p-3 text-center">
                  O REB
                </th>
                <th title="D-REB" className="p-3 text-center">
                  D REB
                </th>
                <th title="REB" className="p-3 text-center">
                  REB
                </th>
                <th title="AST" className="p-3 text-center">
                  AST
                </th>
                <th title="STL" className="p-3 text-center">
                  STL
                </th>
                <th title="BLK" className="p-3 text-center">
                  BLK
                </th>
                <th title="TOV" className="p-3 text-center">
                  TOV
                </th>
                <th title="EFG %" className="p-3 text-center">
                  EFG %
                </th>
                <th title="TS %" className="p-3 text-center">
                  TS %
                </th>
              </tr>
            </thead>
            <tbody>
              {AllTimeLeaders.map((player, index, dash) => {
                dash = '-';
                return (
                  // player id
                  <tr
                    className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800"
                    key={player[0]}
                  >
                    <td className="px-3 py-2 text-center">
                      {/* rank */}
                      <span>{index + 1}</span>
                    </td>
                    {/* name */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[1]}</span>
                    </td>
                    {/* GP */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[2]}</span>
                    </td>
                    {/* min */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[3]}</span>
                    </td>
                    {/* pts */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[21]}</span>
                    </td>
                    {/* FGM */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[4]}</span>
                    </td>
                    {/* FGA */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[5]}</span>
                    </td>
                    {/* FG %*/}
                    <td className="px-3 py-2 text-center">
                      <span>{(player[6] * 100).toFixed(1)}</span>
                    </td>
                    {/* 3 PM */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[7]}</span>
                    </td>
                    {/* 3 PA */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[8]}</span>
                    </td>
                    {/* 3 % */}
                    <td className="px-3 py-2 text-center">
                      <span>{(player[9] * 100).toFixed(1)}</span>
                    </td>
                    {/* FTM */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[10]}</span>
                    </td>
                    {/* FTA*/}
                    <td className="px-3 py-2 text-center">
                      <span>{player[11]}</span>
                    </td>
                    {/* FT % */}
                    <td className="px-3 py-2 text-center">
                      <span>{(player[12] * 100).toFixed(1)}</span>
                    </td>
                    {/* O REB */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[13]}</span>
                    </td>
                    {/* D REB */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[14]}</span>
                    </td>
                    {/* REB */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[15]}</span>
                    </td>
                    {/* AST */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[16]}</span>
                    </td>
                    {/* STL */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[17]}</span>
                    </td>
                    {/* BLK */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[18]}</span>
                    </td>
                    {/* TOV */}
                    <td className="px-3 py-2 text-center">
                      <span>{player[19]}</span>
                    </td>
                    {/* EFG */}
                    <td className="px-3 py-2 text-center">
                      <span>{(player[24] * 100).toFixed(1)}</span>
                    </td>
                    {/* TS */}
                    <td className="px-3 py-2 text-center">
                      <span>{(player[25] * 100).toFixed(1)}</span>
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
