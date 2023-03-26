import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Spin } from 'antd'

import router from './router/index.js'

import './style/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      fallbackElement={<Spin />}
      router={router}
    />
  </StrictMode>
)
