import Logo from '../image/logo.png'
const Splash = ({ startGame, numQuestions }) => (
  <main>
    <section id='splash'>
      <img
        className='splash-image'
        src={Logo}
        alt='quiz icon'
      />
      <h1 className='splash-heading'>So You Think You Can Javascript?</h1>
      <p className='splash-description'>{`${numQuestions} questions.`}</p>
      <p className='splash-description'>Wrong answers will deduct 10 seconds!</p>
      <button
        className='splash-start-button'
        id='startTime'
        onClick={() => {
          startGame()
        }}>
        Ready?
      </button>
    </section>
  </main>
)
export default Splash
