import {useState, useEffect} from 'react';

const labels = [
  '#',
  'PLAYER',
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
  'EFG',
  'TS%',
];

export default function AllTimeLeaders() {
  const [allTimeLeaders, setAllTimeLeaders] = useState([]);

  const getAllTimeLeaders = async () => {
    try {
      const response = await fetch(
        'https://stats.nba.com/stats/leagueLeaders?ActiveFlag=No&LeagueID=00&PerMode=Totals&Scope=S&Season=All%20Time&SeasonType=Regular%20Season&StatCategory=PTS'
      );
      const jsonData = await response.json();
      console.log('AllTime', jsonData.resultSet.rowSet.slice(0, 10));
      setAllTimeLeaders(jsonData.resultSet.rowSet.slice(0, 10));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllTimeLeaders();
  }, []);

  const sortBy = (arr) => {
    allTimeLeaders.sort((a, b) => a - b);
  };
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
      <div className="pb-4 bg-white dark:bg-gray-900">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for player"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-zebra active">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            {labels.map((label, index) => {
              return (
                <th scope="col" className="py-3 px-6" key={`label ${label}`}>
                  <div className="flex items-center">
                    {label}
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 w-3 h-3"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                      </svg>
                    </a>
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
                  {index + 1}
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

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {(player[24] * 100).toFixed(1)}
                </td>
                {/* TS */}

                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center">
                  {(player[25] * 100).toFixed(1)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* *****PAGINATION***** */}
      <nav
        className="flex justify-between items-center pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>{' '}
          of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
