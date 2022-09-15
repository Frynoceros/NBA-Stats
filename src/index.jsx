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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'teams',
        element: <Teams />,
        children: [
          {
            path: 'teams/:teamId/',
            element: <Roster />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <div>
      <App />
    </div> */}
  </React.StrictMode>
);
