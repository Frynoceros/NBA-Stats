import React from 'react';
import '../assets/Styles/App.css';
import EntireContainer from './EntireContainer';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <EntireContainer />
      </div>
    </>
  );
}

export default App;
