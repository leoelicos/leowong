/* components */
import { Tag, Button, Progress, Space, Tooltip } from 'antd'

const MooCard = ({ poster, title, esrb, year, genre, actors, plot, rating, handleClickTrailer }) => {
  return (
    <div className='card'>
      <div
        className='result-container'
        key={poster}>
        {poster !== 'N/A' && (
          <div className='movie-poster'>
            <img
              src={poster}
              alt='movie poster'
            />
          </div>
        )}

        <div className='movie-details'>
          <h3 className='title'>{title === 'N/A' ? 'Untitled' : title} </h3>

          <Button
            className='trailer-btn'
            type='primary'
            onClick={() => {
              handleClickTrailer(title, year)
            }}>
            Watch Trailer
          </Button>
          <div className='plot'>{plot === 'N/A' ? '—' : plot}</div>
          <div className='rating'>
            {rating.length > 0 && (
              <Tooltip
                title={rating[0].Source}
                placement='bottom'>
                <div
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '1rem',
                    padding: '0 0 1px 8px '
                  }}>
                  <Progress
                    percent={parseFloat(rating[0].Value) * 10}
                    format={(percent) => parseFloat(percent / 10).toFixed(1)}
                    style={{ color: 'white' }}
                    steps={10}
                    status={parseInt(rating[0].Value) < 7 ? 'exception' : 'success'}
                    strokeColor={parseInt(rating[0].Value) < 4 ? 'red' : parseInt(rating[0].Value) < 7 ? 'orange' : 'green'}
                  />
                </div>
              </Tooltip>
            )}
          </div>
          <div>
            {year === 'N/A' ? '—' : year}
            <br />
            {esrb === 'N/A' ? 'Unrated' : esrb}
          </div>
          <div className='actors'>
            {actors === 'N/A'
              ? '—'
              : actors.split(', ').map((actor, i) => (
                  <Tag
                    key={i}
                    color='#222'
                    style={{ color: 'white' }}>
                    {actor}
                  </Tag>
                ))}
          </div>
          {genre === 'N/A' ? null : (
            <div className='genre'>
              <Space
                style={{ justifyContent: 'center' }}
                size={[0, 8]}
                wrap>
                {genre.split(', ').map((g, i) => (
                  <Tag
                    color='black'
                    key={i}>
                    {g}
                  </Tag>
                ))}
              </Space>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default MooCard
