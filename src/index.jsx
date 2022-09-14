import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './assets/Styles/index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Teams from './Components/MainDiv/Teams';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="teams" element={<Teams />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
