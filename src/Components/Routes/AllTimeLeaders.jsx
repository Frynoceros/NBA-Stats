import {useState, useEffect} from 'react';
import AllTimeLeadersHero from '../AllTimeLeadersHero';

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
    'FG3A',
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
    PLAYER_ID: 0,
    PLAYER_NAME: 1,
    GP: 2,
    MIN: 3,
    FGM: 4,
    FGA: 5,
    FG_PCT: 6,
    FG3M: 7,
    FG3A: 8,
    FG3_PCT: 9,
    FTM: 10,
    FTA: 11,
    FT_PCT: 12,
    OREB: 13,
    DREB: 14,
    REB: 15,
    AST: 16,
    STL: 17,
    BLK: 18,
    TOV: 19,
    PF: 20,
    PTS: 21,
    AST_TOV: 22,
    STL_TOV: 23,
    EFG_PCT: 24,
    TS_PCT: 25,
    GP_RANK: 26,
    MIN_RANK: 27,
    FGM_RANK: 28,
    FGA_RANK: 29,
    FG_PCT_RANK: 30,
    FG3M_RANK: 31,
    FG3A_RANK: 32,
    FG3_PCT_RANK: 33,
    FTM_RANK: 34,
    FTA_RANK: 35,
    FT_PCT_RANK: 36,
    OREB_RANK: 37,
    DREB_RANK: 38,
    REB_RANK: 39,
    AST_RANK: 40,
    STL_RANK: 41,
    BLK_RANK: 42,
    TOV_RANK: 43,
    PF_RANK: 44,
    PTS_RANK: 45,
    AST_TOV_RANK: 46,
    STL_TOV_RANK: 47,
    EFG_PCT1: 'EFG_PCT1',
    TS_PCT1: 'TS_PCT1',
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
    if (bottomRowCount > 0) {
      setTopRowCount((addRowCount -= 10));
      setBottomRowCount((minusRowCount -= 10));
    }
  };
  const getAllTimeLeaders = async () => {
    try {
      //https://stats.nba.com/stats/
      const response = await fetch(
        `http://localhost:8010/proxy/leagueLeaders?ActiveFlag=No&LeagueID=00&PerMode=Totals&Scope=S&Season=All%20Time&SeasonType=Regular%20Season&StatCategory=${currentStat}`
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

  // const sortLeaders = () => {
  //   let sortedLeaders = allTimeLeaders[allStats[MIN]].sort((a, b) => a - b);
  //   return setAllTimeLeaders(sortedLeaders);
  // };

  return (
    <>
      <AllTimeLeadersHero />
      <div className="">
        <div className="pb-10 bg-primary flex">
          <div>
            <div className="form-control ml-5 mt-5">
              <div className="input-group">
                <select
                  onChange={(e) => {
                    setCurrentStat(e.target.value);
                    setBottomRowCount(0);
                    setTopRowCount(10);
                  }}
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
        <div className="max-w-fit overflow-x-auto">
          <table className=" text-sm text-left text-gray-500 dark:text-white-500 table-zebra active">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center"></div>
                </th>
                <th scope="col" className="py-2 text-white" key={`label rank`}>
                  <div className="tabs tabs-boxed flex justify-center">
                    <a className="tab">#</a>
                  </div>
                </th>
                <th scope="col" className="py-2 " key={`label player`}>
                  <div className="tabs tabs-boxed flex justify-center">
                    <a className="tab">Player</a>
                  </div>
                </th>
                {stats.map((label, index) => {
                  return (
                    <th
                      scope="col"
                      className="py-2 text-center"
                      key={`label ${label}`}
                    >
                      <div className="tabs tabs-boxed flex justify-center">
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
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600  "
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

                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-center">
                      {/* rank */}

                      {player[allStats[`${currentStat}_RANK`]]}
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
        </div>
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
    </>
  );
}
