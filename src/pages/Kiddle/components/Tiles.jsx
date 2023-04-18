const Tiles = ({ tiles }) => {
  return (
    <div className='tile-wrapper'>
      {tiles.map((letter, i) => (
        <div
          key={`tile${i}`}
          className='tile'
          id={`tile${i}`}>
          {letter}
        </div>
      ))}
    </div>
  )
}

export default Tiles
