import { Spin } from 'antd'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Toc from './admin/TOC/index'
import ErrorPage from './components/ErrorPage/index.jsx'
import apps from './data/apps'

import './style/index.css'

const appRoutes = apps.map(({ link, element, children = [] }) => ({ path: link, element, children: children, errorElement: <ErrorPage /> }))
const routes = [{ path: '/', element: <Toc />, errorElement: <ErrorPage /> }, ...appRoutes]
const router = createBrowserRouter(routes)
const rootEl = document.getElementById('root')

createRoot(rootEl).render(
  <RouterProvider
    fallbackElement={<Spin />}
    router={router}
  />
)
