import { createBrowserRouter, Navigate } from 'react-router-dom'

import Home from '../pages/Home/index.jsx'
import ErrorPage from '../components/ErrorPage/index.jsx'

import Ingre from '../pages/Ingre/index.jsx'
import Submitted from '../pages/Submitted/index.jsx'
import Algoz from '../pages/Algoz/index.jsx'
import Clima from '../pages/Clima/index.jsx'
import Kiddin from '../pages/Kiddin/index.jsx'
import MooVee from '../pages/Moovee/index.jsx'

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/ingre',
    element: <Ingre />,
    errorElement: <ErrorPage />
  },
  {
    path: '/submitted',
    element: <Submitted />,
    errorElement: <ErrorPage />
  },
  {
    path: '/algoz',
    element: <Algoz />,
    errorElement: <ErrorPage />
  },
  {
    path: '/kiddin',
    element: <Kiddin />,
    errorElement: <ErrorPage />
  },
  {
    path: '/moovee',
    element: <MooVee />,
    errorElement: <ErrorPage />
  },
  {
    path: '/clima',
    element: <Clima />,
    errorElement: <ErrorPage />
  },
  {
    path: '*',
    element: (
      <Navigate
        to='/'
        replace
      />
    )
  }
]

const router = createBrowserRouter(routes)

export default router
