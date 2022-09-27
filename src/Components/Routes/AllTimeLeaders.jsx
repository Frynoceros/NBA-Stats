import {useState, useEffect} from 'react';

export default function AllTimeLeaders() {
  const stats = [
    'GP',
    'MIN',
    'PTS',
    'FGM',
    'FGA',
    'FG%',
    '3PM',
    '3PA',
    '3P%',
    'FTM',
    'FTA',
    'FT%',
    'OREB',
    'DREB',
    'REB',
    'AST',
    'STL',
    'BLK',
    'TOV',
  ];

  const searchStat = [
    'MIN',
    'PTS',
    'FGM',
    'FGA',
    'FG_PCT',
    'FG3M',
    '3PA',
    'FG3_PCT',
    'FTM',
    'FTA',
    'FT_PCT',
    'OREB',
    'DREB',
    'REB',
    'AST',
    'STL',
    'BLK',
    'TOV',
  ];

  const allStats = {
    headers: stats,
    0: 'PLAYER_ID',
    1: 'PLAYER_NAME',
    2: 'GP',
    3: 'MIN',
    4: 'FGM',
    5: 'FGA',
    6: 'FG_PCT',
    7: 'FG3M',
    8: 'FG3A',
    9: 'FG3_PCT',
    10: 'FTM',
    11: 'FTA',
    12: 'FT_PCT',
    13: 'OREB',
    14: 'DREB',
    15: 'REB',
    16: 'AST',
    17: 'STL',
    18: 'BLK',
    19: 'TOV',
    20: 'PF',
    21: 'PTS',
    22: 'AST_TOV',
    23: 'STL_TOV',
    24: 'EFG_PCT',
    25: 'TS_PCT',
    26: 'GP_RANK',
    27: 'MIN_RANK',
    28: 'FGM_RANK',
    29: 'FGA_RANK',
    30: 'FG_PCT_RANK',
    31: 'FG3M_RANK',
    32: 'FG3A_RANK',
    33: 'FG3_PCT_RANK',
    34: 'FTM_RANK',
    35: 'FTA_RANK',
    36: 'FT_PCT_RANK',
    37: 'OREB_RANK',
    38: 'DREB_RANK',
    39: 'REB_RANK',
    40: 'AST_RANK',
    41: 'STL_RANK',
    42: 'BLK_RANK',
    43: 'TOV_RANK',
    44: 'PF_RANK',
    45: 'PTS_RANK',
    46: 'AST_TOV_RANK',
    47: 'STL_TOV_RANK',
    48: 'EFG_PCT1',
    49: 'TS_PCT1',
    name: 'LeagueLeaders',
  };

  const [allTimeLeaders, setAllTimeLeaders] = useState([]);
  const [currentStat, setCurrentStat] = useState(stats[2]);
  const [topRowCount, setTopRowCount] = useState(10);
  const [bottomRowCount, setBottomRowCount] = useState(0);

  const incrementRowCount = () => {
    let addRowCount = topRowCount;
    let minusRowCount = bottomRowCount;
    setTopRowCount((addRowCount += 10));
    setBottomRowCount((minusRowCount += 10));
  };
  const decrementRowCount = () => {
    let addRowCount = topRowCount;
    let minusRowCount = bottomRowCount;
    setTopRowCount((addRowCount -= 10));
    setBottomRowCount((minusRowCount -= 10));
  };
  const getAllTimeLeaders = async () => {
    try {
      const response = await fetch(
        `https://stats.nba.com/stats/leagueLeaders?ActiveFlag=No&LeagueID=00&PerMode=Totals&Scope=S&Season=All%20Time&SeasonType=Regular%20Season&StatCategory=${currentStat}`
      );
      const jsonData = await response.json();
      console.log(
        `AllTime ${currentStat}`,
        jsonData.resultSet.rowSet.slice(bottomRowCount, topRowCount)
      );
      setAllTimeLeaders(
        jsonData.resultSet.rowSet.slice(bottomRowCount, topRowCount)
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllTimeLeaders();
  }, [currentStat, topRowCount]);

  return (
    <div className="">
      <div className="pb-10 bg-primary flex">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div className="form-control">
            <div className="input-group">
              <select
                onChange={(e) => setCurrentStat(e.target.value)}
                className="select select-bordered"
              >
                <option>Pick category</option>
                {searchStat.map((stat, index) => {
                  return <option key={`dropDown ${stat}`}>{stat}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-zebra active">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center"></div>
            </th>
            <th scope="col" className="py-2 " key={`label rank`}>
              <div className="tabs tabs-boxed">
                <a className="tab">#</a>
              </div>
            </th>
            <th scope="col" className="py-2 " key={`label player`}>
              <div className="tabs tabs-boxed">
                <a className="tab">Player</a>
              </div>
            </th>
            {stats.map((label, index) => {
              return (
                <th
                  scope="col"
                  className="py-2 text-center "
                  key={`label ${label}`}
                >
                  <div className="tabs tabs-boxed">
                    <a className="tab">{label}</a>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {allTimeLeaders.map((player, index) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 "
                key={player[0]}
              >
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {/* rank */}
                  {/* {`${player}.${currentStat}_RANK`} */}
                  {player[45]}
                </td>
                {/* name */}
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {/* rank */}
                  {player[1]}
                </td>
                {/* GP */}
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[2]}
                </td>
                {/* min */}
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[3]}
                </td>
                {/* pts */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[21]}
                </td>
                {/* FGM */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[4]}
                </td>
                {/* FGA */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[5]}
                </td>
                {/* FG %*/}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {(player[6] * 100).toFixed(1)}
                </td>
                {/* 3 PM */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[7]}
                </td>
                {/* 3 PA */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[8]}
                </td>
                {/* 3 % */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {(player[9] * 100).toFixed(1)}
                </td>
                {/* FTM */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[10]}
                </td>
                {/* FTA*/}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[11]}
                </td>
                {/* FT % */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {(player[12] * 100).toFixed(1)}
                </td>
                {/* O REB */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[13]}
                </td>
                {/* D REB */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[14]}
                </td>
                {/* REB */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[15]}
                </td>
                {/* AST */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[16]}
                </td>
                {/* STL */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[17]}
                </td>
                {/* BLK */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[18]}
                </td>
                {/* TOV */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {player[19]}
                </td>
                {/* EFG */}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* *****PAGINATION***** */}
      <div className="btn-group grid grid-cols-2">
        <button onClick={decrementRowCount} className="btn btn-outline">
          Previous page
        </button>
        <button onClick={incrementRowCount} className="btn btn-outline">
          Next
        </button>
      </div>
    </div>
  );
}
