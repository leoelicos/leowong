import { createBrowserRouter } from 'react-router-dom'

import apps from '../data/apps.js'

import TOC from '../components/TOC/index.jsx'
import ErrorPage from '../components/ErrorPage/index.jsx'

const appRoutes = apps.map(
  ({
    link,
    element,
    children = [] //
  }) => ({
    path: link,
    element,
    children: children,
    errorElement: <ErrorPage />
  })
)

const routes = [
  {
    path: '/',
    element: <TOC />,
    errorElement: <ErrorPage />
  },
  ...appRoutes
]

const router = createBrowserRouter(routes)

export default router
