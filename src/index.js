import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style/index.css'

import ErrorPage from './components/ErrorPage/index.jsx'
import Home, { HomeContent } from './pages/Home/index.jsx'
import All from './pages/All'
import Missing from './pages/Missing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomeContent /> }]
  },
  {
    path: '/all',
    element: <All />,
    errorElement: <ErrorPage />
  },
  {
    path: '*',
    element: <Missing />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
