const Tiles = ({ tiles }) => {
  return (
    <div className='tile-wrapper'>
      {tiles.map((v, i) => (
        <div
          key={`tile${i}`}
          className='tile'
          id={`tile${i}`}>
          {v}
        </div>
      ))}
    </div>
  )
}

export default Tiles
