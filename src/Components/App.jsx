import React from 'react';
import '../assets/Styles/App.css';
import EntireContainer from './EntireContainer';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import Teams from './MainDiv/Teams';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EntireContainer />
    </div>
  );
}

export default App;
