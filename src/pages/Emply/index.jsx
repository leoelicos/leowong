import EmployeeProvider from './context/EmployeeContext'
import Main from './components/Main'

import useTitle from '../../hooks/useTitle'
import useFavicon from '../../hooks/useFavicon'
import logo from './images/emply.png'
import './style/index.css'

export default function Emply() {
  useTitle('Emply')
  useFavicon('/favicons/emply.png')
  return (
    <div className='emply disable-caret'>
      <header>
        <img
          className='logo'
          src={logo}
          alt='logo'
        />
        <h1>Emply</h1>
      </header>
      <EmployeeProvider>
        <Main />
      </EmployeeProvider>
    </div>
  )
}
