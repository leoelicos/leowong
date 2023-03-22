import { Spin } from 'antd'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import TOC from './components/TOC/index.jsx'
import ErrorPage from './components/ErrorPage/index.jsx'

import apps from './data/apps.js'

import './style/index.css'

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

createRoot(document.getElementById('root')).render(
  <RouterProvider
    fallbackElement={<Spin />}
    router={router}
  />
)
