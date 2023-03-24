import { createBrowserRouter, Navigate } from 'react-router-dom'

import Home from '../pages/Home/index.jsx'
import ErrorPage from '../components/ErrorPage/index.jsx'

const routes = [
  {
    path: '/',
    element: <Home />,
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
