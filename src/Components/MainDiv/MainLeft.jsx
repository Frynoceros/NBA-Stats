import React from 'react';
import Teams from './Teams';

export default function MainLeft() {
  return (
    <div className="mainLeft flex flex-row w-full card bg-base-300 rounded-box flex-wrap place-items-center border border-white p-2">
      <Teams />
    </div>
  );
}
