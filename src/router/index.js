import { createBrowserRouter, Navigate } from 'react-router-dom'

import Home from '../pages/Home/index.jsx'
import ErrorPage from '../components/ErrorPage/index.jsx'

import About from '../pages/Home/components/About/index.jsx'
import Projects from '../pages/Home/components/Projects/index.jsx'
import Resume from '../pages/Home/components/Resume/index.jsx'

const routes = [
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/home/about', element: <About />, errorElement: <ErrorPage /> },
      { path: '/home/projects', element: <Projects />, errorElement: <ErrorPage /> },
      { path: '/home/resume', element: <Resume />, errorElement: <ErrorPage /> }
    ]
  },
  {
    path: '*',
    element: (
      <Navigate
        to='/home'
        replace
      />
    )
  }
]

const router = createBrowserRouter(routes)

export default router
