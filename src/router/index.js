import {
  createRoutesFromElements,
  createBrowserRouter,
  Route //
} from 'react-router-dom'

import ErrorPage from '../components/ErrorPage/index.jsx'
import Home from '../pages/Home/index.jsx'
import Moovee from '../pages/Moovee/index.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Home />}>
      <Route
        path='moovee'
        element={<Moovee />}
      />
    </Route>
  )
)

export default router
