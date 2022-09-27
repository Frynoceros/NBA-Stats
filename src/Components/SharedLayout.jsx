import Navbar from './Navbar';
import Hero from './Hero';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';

export default function SharedLayout() {
  return (
    <>
      <Navbar />

      <Hero />

      <Outlet />

      <Footer />
    </>
  );
}
