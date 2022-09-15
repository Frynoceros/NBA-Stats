import React from 'react';
import MainDiv from './MainDiv';

export default function EntireContainer() {
  return (
    <div className="flex flex-col w-full h-full border border-yellow">
      <MainDiv />
    </div>
  );
}
