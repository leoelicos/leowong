import { Outlet } from 'react-router-dom'
import Background from './components/Background/index.jsx'
import Header from './components/Header/index.jsx'
import './style/style.css'

export default function Home() {
  return (
    <div className='home'>
      <Background>
        <Header />
        <Outlet />
      </Background>
    </div>
  )
}
