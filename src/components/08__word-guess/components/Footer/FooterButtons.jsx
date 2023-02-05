const FooterButtons = ({ handleClickResetTally, handleClickHelp }) => (
  <section className='footer-buttons'>
    <button
      className='btn'
      id='button-reset-games'
      onClick={handleClickResetTally}>
      Reset
    </button>
    <button
      className='btn'
      id='button-help'
      onClick={handleClickHelp}>
      ?
    </button>
  </section>
)
export default FooterButtons
