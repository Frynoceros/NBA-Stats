import Navbar from './Navbar';
import Hero from './Hero';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import LeagueLeaders from './Routes/LeagueLeaders';
import AllTimeLeaders from './Routes/AllTimeLeaders';

export default function SharedLayout() {
  return (
    <>
      <Navbar />

      <Hero />
      <LeagueLeaders />

      <Outlet />
      <AllTimeLeaders />

      <Footer />
    </>
  );
}
