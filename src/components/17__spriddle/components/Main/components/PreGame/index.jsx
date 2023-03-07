import useTimer from '../../../../hooks/useTimer.jsx'
import Hero from '../Hero.jsx'
import MainHeader from '../MainHeader.jsx'

const PreGame = ({ time }) => {
  const {
    time: preGameTime,
    startTimer: startPreGameTimer
    //
  } = useTimer({ initialTime: 1 })

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
