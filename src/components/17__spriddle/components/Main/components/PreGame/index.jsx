import { useEffect } from 'react'
import useTimer from '../../../../hooks/useTimer.jsx'
import Hero from '../Hero.jsx'
import MainHeader from '../MainHeader.jsx'

const PreGame = ({ goToNextStage }) => {
  const {
    time,
    startTimer
    //
  } = useTimer({ initialTime: 1 })

  useEffect(() => {
    startTimer()
  }, [])

  useEffect(() => {
    if (time === 0) goToNextStage()
  }, [time])

  return (
    <div>
      <MainHeader
        time={60}
        health={10}
      />
      <main>
        <Hero>
          <h1>Get ready!</h1>
          <h1>{time}</h1>
        </Hero>
      </main>
    </div>
  )
}
export default PreGame
