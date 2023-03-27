import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider, //
  Route
} from 'react-router-dom'
import './style/index.css'

import ErrorPage from './components/ErrorPage/index.jsx'

import Home from './pages/Home/index.jsx'

import appData from './data/apps'
import Description from './components/Description/index.jsx'

console.log({ appData })
const routes = []
for (const app in appData) {
  routes.push(
    <Route
      path={`/${appData[app].endpoint}`}
      element={
        <Description
          app={appData[app]}
          errorElement={<ErrorPage />}
        />
      }
    />
  )
}
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path='/'
      element={<Home />}
      errorElement={<ErrorPage />}
    />,
    ...routes
  ])
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

/* 

alternative method to create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/moovee',
    element: <Moovee />,
    errorElement: <ErrorPage />
  }
]) */
