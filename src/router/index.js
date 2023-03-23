import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home/index.jsx'
import ErrorPage from '../components/ErrorPage/index.jsx'

import About from '../pages/Home/components/About/index.jsx'

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <About />,
        errorElement: <ErrorPage />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

export default router
