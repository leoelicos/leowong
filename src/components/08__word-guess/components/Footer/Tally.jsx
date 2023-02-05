const Tally = ({ wins, losses }) => (
  <section className='tally'>
    <button id='button-tally-wins'>
      <div id='tally-wins-label'>Wins:&nbsp;</div>
      <div id='tally-wins-value'>{wins}</div>
    </button>

    <button id='button-tally-losses'>
      <div id='tally-losses-label'>Losses:&nbsp;</div>
      <div id='tally-losses-value'>{losses}</div>
    </button>
  </section>
)

export default Tally
