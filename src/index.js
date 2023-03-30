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

import Home, { HomeContent } from './pages/Home/index.jsx'

import appData from './data/apps'
import Description from './pages/Home/components/Description/index.jsx'
import All from './pages/All'

const routes = []
for (const app in appData) {
  /*   routes.push(
    <Route
      path={`/description/${appData[app].endpoint}`}
      element={
        <Description
          app={appData[app]}
          errorElement={<ErrorPage />}
        />
      }
    />
  ) */

  if (appData[app].element !== null) {
    routes.push(
      <Route
        path={`/${appData[app].endpoint}`}
        element={appData[app].element}
      />
    )
  }
}
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path='/'
      element={<Home />}
      errorElement={<ErrorPage />}>
      <Route
        path='/'
        element={<HomeContent />}
      />
      <Route
        path='/description/:appName'
        element={<Description />}
      />
    </Route>,
    ...routes,
    <Route
      path='/all'
      element={<All />}
      errorElement={<ErrorPage />}
    />
  ])
)

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)

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
