import { useState } from 'react'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import Main from './components/Main/index.jsx'

export default function Spriddle() {
  const [stage, setStage] = useState(0)

  const goToNextStage = () => {
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
        <Header />
        <Main
          stage={stage}
          goToNextStage={goToNextStage}
        />
        <Footer />
      </div>
    </div>
  )
}
