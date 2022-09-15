import React from 'react';
import {useEffect, useState} from 'react';
import {nbaLogos} from '../../assets/Logos/nbaLogos';
import {Link} from 'react-router-dom';
import MainDiv from '../MainDiv';

export default function TeamHome() {
  return (
    <div>
      <MainDiv />
      <figure>
        <img src={nbaLogos['POR']} />
      </figure>
    </div>
  );
}
