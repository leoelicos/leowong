import RiddleAnswer from '../Game/components/RiddleAnswer.jsx'
import Hero from '../Hero.jsx'
import MainHeader from '../MainHeader.jsx'

const PreGame = ({ preGameTime, attempt }) => {
  return (
    <>
      <MainHeader
        time={60}
        health={10}
      />

      <Hero>
        <h2>Get ready!</h2>
        <h1>{preGameTime}</h1>
        <RiddleAnswer>{attempt}</RiddleAnswer>
      </Hero>
    </>
  )
}
export default PreGame
