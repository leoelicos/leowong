const StartButton = ({ handleClickStart, buttonMessage, disabled }) => (
  <section className='start-wrapper'>
    <button
      disabled={disabled}
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
