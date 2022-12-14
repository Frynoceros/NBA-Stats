import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar p-7 bg-primary">
      <div className="flex-none"></div>
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          NBA Stats
        </NavLink>
      </div>
      <div className="flex-1">
        <NavLink
          to="allTimeLeaders"
          className="btn btn-ghost normal-case text-base"
        >
          All Time Leaders
        </NavLink>
      </div>
      <div className="flex-1">
        <NavLink
          to="leagueLeaders"
          className="btn btn-ghost normal-case text-base"
        >
          Season Leaders
        </NavLink>
      </div>

      <div className="flex-none">
        {/* <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button> */}
      </div>
    </div>
  );
}
