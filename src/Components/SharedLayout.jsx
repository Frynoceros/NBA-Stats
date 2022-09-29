import Navbar from './Navbar';
import Hero from './Hero';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import {useState} from 'react';

export default function SharedLayout() {
  const [currTeam, setCurrTeam] = useState('');

  const handleCurrTeam = () => {
    setCurrTeam(e.target.value);
    console.log(currTeam);
  };

  return (
    <>
      <Navbar />

      <Hero currTeam={currTeam} setCurrTeam={setCurrTeam} />

      <Outlet context={[currTeam, setCurrTeam]} />

      <Footer />
    </>
  );
}
