const Tally = ({ wins, losses }) => (
  <section className='tally'>
    <button id='button-tally-wins'>
      Wins
      <br />
      {wins}
    </button>

    <button id='button-tally-losses'>
      Losses
      <br />
      {losses}
    </button>
  </section>
)

export default Tally
