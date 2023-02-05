const StartButton = ({ handleClickStart, buttonMessage }) => (
  <section className='start-wrapper'>
    <button
      className='btn'
      id='button-start-games'
      onClick={(e) => {
        e.preventDefault()
        handleClickStart()
      }}>
      {buttonMessage}
    </button>
  </section>
)
export default StartButton
