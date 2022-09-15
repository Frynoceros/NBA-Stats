import React from 'react';
import '../../assets/Styles/App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';
import MainDiv from '../MainDiv';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <MainDiv />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
