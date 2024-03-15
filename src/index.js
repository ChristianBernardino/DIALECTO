import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css';

import OnBoarding from './login/onBoarding';
import LogIn from './login/signIn';
import SignUp from './login/signUp'
import ForgotPass from './login/forgotPass';
import AgeSelection from './login/ageSelection';
import Home from './pages/homeIntereactive';
import HomeStandby from './pages/homeStandby';

const router = createBrowserRouter([
  {
    path: '/',
    element: <OnBoarding />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/sign-in',
    element: <LogIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/forgot-pass',
    element: <ForgotPass />
  },
  {
    path: '/age-selection',
    element: <AgeSelection />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/home-standby',
    element: <HomeStandby />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);