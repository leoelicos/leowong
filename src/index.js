import { Spin } from 'antd'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './style/index.css'

import router from './router/index.js'

createRoot(document.getElementById('root')).render(
  <RouterProvider
    fallbackElement={<Spin />}
    router={router}
  />
)
