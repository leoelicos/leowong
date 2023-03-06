import { useState } from 'react'
import Main from './components/Main/index.jsx'

export default function Spriddle() {
  const [stage, setStage] = useState(0)
  const goToNextStage = (e) => {
    e.preventDefault()
    console.log('clicked')
    setStage((prev) => (prev + 1 > 3 ? 0 : prev + 1))
  }

  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    overflowY: 'auto'
  }

  return (
    <div className='app-17'>
      <div
        className='body'
        style={bodyStyle}>
        <header>SPRIDDLE</header>
        <Main
          stage={stage}
          goToNextStage={goToNextStage}
        />
        <footer>Made with Heart</footer>
      </div>
    </div>
  )
}
