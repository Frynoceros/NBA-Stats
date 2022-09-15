import {useState, useEffect} from 'react';

export default function () {
  const [roster, setRoster] = useState([]);

  const getRoster = async () => {
    try {
      const response = await fetch(
        'https://data.nba.net/json/cms/noseason/team/blazers/roster.json'
      );
      const jsonData = await response.json();
      console.log('json', jsonData);
      setRoster(jsonData.sports_content.roster.players.player);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Formula to convert players DOB to Date accepted format - json returns 'YYYYMMDD'
  function parseBirthDate(dateStr) {
    const birth = new Date(
      dateStr.slice(0, 4),
      dateStr.slice(4, 6),
      dateStr.slice(6, 8)
    );

    const since = Date.now() - birth.getTime();
    return isNaN(since) || since < 0 ? undefined : birth;
  }

  // Get age after conversion
  function getAge(birthDate) {
    const now = new Date();
    const mth = now.getMonth() - birthDate.getMonth();
    const adjust =
      mth < 0 || (mth === 0 && now.getDate() < birthDate.getDate()) ? 1 : 0;
    return now.getFullYear() - birthDate.getFullYear() - adjust;
  }

  // Get schools after conversion
  function getSchool(affiliation) {
    let school = '';
    for (let i = 0; i < affiliation.length; i++) {
      if (affiliation[i] === '/') return school;
      school += affiliation[i];
    }
    return school;
  }

  useEffect(() => {
    getRoster();
  }, []);

  console.log('Roster', roster);

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
                    key={player.person_id}
                  >
                    <td className="px-3 py-2 text-center">
                      <span>{`${player.first_name} ${player.last_name}`}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player.jersey_number}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player.position_short}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{`${player.height_ft}-${player.height_in}`}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player.weight_lbs}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>
                        {parseBirthDate(player.birth_date).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{getAge(parseBirthDate(player.birth_date))}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{player.years_pro}</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <span>{getSchool(player.affiliation)}</span>
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
