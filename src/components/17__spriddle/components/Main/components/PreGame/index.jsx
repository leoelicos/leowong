import Hero from '../Hero.jsx'
import MainHeader from '../MainHeader.jsx'

const PreGame = ({ preGameTime }) => {
  return (
    <>
      <MainHeader
        time={60}
        health={10}
      />

      <Hero>
        <h1>Get ready!</h1>
        <h1>{preGameTime}</h1>
      </Hero>
    </>
  )
}
export default PreGame
