import { Outlet } from 'react-router-dom'

import Header from './components/Header.jsx'

import './style/index.css'

const PastelProfile = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default PastelProfile
