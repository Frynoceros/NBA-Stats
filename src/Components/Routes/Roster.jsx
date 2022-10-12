import {useParams, useOutletContext} from 'react-router-dom';

export default function Roster({roster, setRoster}) {
  // variable to assign current team name
  const {teamId} = useParams();
  const [currTeam, setCurrTeam] = useOutletContext();

  // check if a number has been assigned
  const checkNumber = (num) => {
    if (num === null) return 'Unassigned';
    return num;
  };

  return (
    <div className=" overflow-y-auto ">
      <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-primary my-auto flex flex-col justify-center items-center min-w-full ">
        <div>
          <h2 className="mb-3 text-2xl font-semibold leading-tight text-center ">
            {`${currTeam} Roster`}
          </h2>
        </div>
        <div className=" grid justify-items-stretch w-full ">
          <table className="h-screen text-xs table-zebra active ">
            <thead className="rounded-t-lg dark:bg-gray-700 ">
              <tr className="text-right">
                <th title="PLAYER" className="p-3 text-center ">
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
                    className="text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800 "
                    key={index}
                  >
                    <td className="px-3 py-2 text-center">
                      <span>{player[3]}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{checkNumber(player[6])}</span>
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
