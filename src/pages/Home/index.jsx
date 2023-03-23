import { Outlet } from 'react-router-dom'
import Background from './components/Background/index.jsx'
import './style/style.css'
import { useEffect } from 'react'

export default function Home() {
  return (
    <div className='home'>
      <Background>
        <Outlet />
      </Background>
    </div>
  )
}
