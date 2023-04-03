import EmployeeProvider from './context/EmployeeContext'
import Header from './components/Header'
import Main from './components/Main'

import useTitle from '../../hooks/useTitle'
import useFavicon from '../../hooks/useFavicon'
import './style/index.css'

export default function Emply() {
  useTitle('Emply')
  useFavicon('/favicons/emply.png')
  return (
    <div className='emply disable-caret'>
      <Header title='Team Maker' />
      <EmployeeProvider>
        <Main />
      </EmployeeProvider>
    </div>
  )
}
