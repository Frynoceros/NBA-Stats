import React from 'react';
import '../../assets/Styles/App.css';
import EntireContainer from '../EntireContainer';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../MainDiv/Hero';

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
        <EntireContainer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
