import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/Routes/App';
import './assets/Styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Teams from './Components/Routes/Teams';
import Roster from './Components/Routes/Roster';
import TeamHome from './Components/Routes/TeamHome';

// import Root, {loader as rootLoader} from './Components/Routes/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'teams',
        element: <Teams />,
      },
      {
        path: 'teams/:teamId',
        element: <TeamHome />,
      },
      {
        path: 'teams/:teamId/roster',
        element: <Roster />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
