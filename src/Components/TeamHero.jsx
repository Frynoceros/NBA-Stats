import {useOutletContext} from 'react-router-dom';
export default function TeamHero() {
  const [currTeam, setCurrTeam] = useOutletContext();

  return (
    <div className=" w-screen card bg-base-300 rounded-box border border-white ">
      <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 bg-base-300 ">
        <h1 className="text-5xl font-bold dark:text-gray-50">{`${currTeam} Home`}</h1>
      </div>
    </div>
  );
}
