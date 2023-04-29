/* components */
import { Tag, Button, Progress, Space, Tooltip, Modal } from 'antd'
import { useState } from 'react'
import useYouTube from '../hooks/useYouTube'
import Iframe from './Iframe'

const Result = ({
  poster,
  title,
  esrb,
  year,
  genre,
  actors,
  plot,
  imdbRating,
  idx,
  idxOfClickedTrailer, //
  setIdxOfClickedTrailer,
  resetIdxOfClickedTrailer,
  trailerWasClicked,
  setTrailerWasClicked
}) => {
  const { youTubeData, youTubeLoading, youTubeError, searchYouTube } = useYouTube()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const hideModal = () => {
    setIsModalOpen(false)
  }
  const handleClickTrailer = async () => {
    try {
      setTrailerWasClicked(true)
      setIdxOfClickedTrailer(idx)
      const query = [title || '', year || '', 'trailer'].join('+')
      await searchYouTube(query)
      setTrailerWasClicked(false)
      resetIdxOfClickedTrailer()

      setIsModalOpen(true)
    } catch (error) {
      console.error(error)
      setIsModalOpen(false)
    }
  }

  return (
    <div className='result-container'>
      {poster !== 'N/A' && (
        <div className='movie-poster'>
          <img
            src={poster}
            alt='movie poster'
          />
        </div>
      )}

      <div className='result'>
        {title && <h3 className='title'>{title}</h3>}

        <Button
          loading={youTubeLoading}
          disabled={youTubeError || (trailerWasClicked && idxOfClickedTrailer !== idx)}
          className='trailer-btn'
          type='primary'
          onClick={handleClickTrailer}>
          {youTubeLoading ? 'Finding' : youTubeError ? 'Unavailable' : 'Watch Trailer'}
        </Button>

        {plot && <div className='plot'>{plot}</div>}

        {imdbRating && (
          <div className='rating'>
            <Tooltip
              title='IMDB'
              placement='bottom'>
              <div
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  borderRadius: '1rem',
                  padding: '0 0 1px 8px '
                }}>
                <Progress
                  percent={imdbRating * 10}
                  format={(percent) => parseFloat(percent / 10).toFixed(1)}
                  style={{ color: 'white' }}
                  steps={10}
                  status={imdbRating < 7 ? 'exception' : 'success'}
                  strokeColor={imdbRating < 4 ? 'red' : imdbRating < 7 ? 'orange' : 'green'}
                />
              </div>
            </Tooltip>
          </div>
        )}

        {year && esrb ? (
          <div>
            {year}
            <br />
            {esrb}
          </div>
        ) : year ? (
          <div>{year}</div>
        ) : esrb ? (
          <div>{esrb}</div>
        ) : null}

        {actors.length > 0 && (
          <div className='actors'>
            {actors.split(', ').map((actor, i) => (
              <Tag
                key={i}
                color='#222'
                style={{ color: 'white' }}>
                {actor}
              </Tag>
            ))}
          </div>
        )}

        {genre && (
          <div className='genre'>
            <Space
              style={{ justifyContent: 'center' }}
              size={[0, 8]}
              wrap>
              {genre.map((g, i) => (
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

      <Modal
        open={isModalOpen}
        onOk={hideModal}
        onCancel={hideModal}
        closable={false}
        maskClosable={true}
        className='moovee-modal'
        footer={
          <Button
            type='primary'
            block
            key='close'
            onClick={hideModal}>
            Close
          </Button>
        }
        maskStyle={{ background: 'radial-gradient(circle, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%)' }}
        transitionName='' // cancel popup animation
      >
        <Iframe uri={youTubeData} />
      </Modal>
    </div>
  )
}
export default Result
