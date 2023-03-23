const Balls = ({ type, value }) => (
  <div className='card-info-panel-graphical'>
    {[0, 1, 2, 3, 4].map((v) => (
      <div
        key={v}
        className={`ball ${getThreshold(type, value) >= v ? 'ballHighlight' : ''}`}
      />
    ))}
  </div>
)

const getThreshold = (type, query) => {
  const queryArray =
    type === 'temp' //
      ? [0, 10, 20, 30, 40]
      : type === 'wind'
      ? [0, 10, 20, 30, 40]
      : type === 'uv'
      ? [0, 2, 4, 6, 8]
      : type === 'humidity'
      ? [0, 30, 50, 60, 70]
      : undefined
  return queryArray.reduce((a, b) => (b < query ? a + 1 : a), 0)
}
export default Balls
