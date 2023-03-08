import Hero from '../Hero.jsx'
import MainHeader from '../MainHeader.jsx'

const PreGame = ({ preGameTime }) => {
  return (
    <div>
      <MainHeader
        time={60}
        health={10}
      />
      <main>
        <Hero>
          <h1>Get ready!</h1>
          <h1>{preGameTime}</h1>
        </Hero>
      </main>
    </div>
  )
}
export default PreGame
