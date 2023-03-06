import { useState } from 'react'
import Main from './components/Main'

export default function Spriddle() {
  const [stage, setStage] = useState(0)
  const goToNextStage = (e) => {
    e.preventDefault()
    console.log('clicked')
    setStage((prev) => (prev + 1 > 3 ? 0 : prev + 1))
  }

  return (
    <div className='app-17'>
      <div className='body'>
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
