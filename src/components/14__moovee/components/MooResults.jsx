/* components */
import { Spin } from 'antd'
import Title from 'antd/es/typography/Title'
import MooCard from './MooCard'

/* icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceMehBlank } from '@fortawesome/free-solid-svg-icons'
/* style */
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const MooResults = ({ searched, loading, OMDBMovies, handleClickTrailer }) => {
  if (!searched) return null
  else if (loading)
    return (
      <main>
        <Spin
          size='large'
          className='loading-spin'
        />
      </main>
    )
  else if (!OMDBMovies?.length)
    return (
      <main>
        <div className='result-container empty'>
          <Title
            className='no-movies'
            level={5}>
            N
            <FontAwesomeIcon icon={faFaceMehBlank} />
            &ensp;m
            <FontAwesomeIcon icon={faFaceMehBlank} />
            vies&ensp;f
            <FontAwesomeIcon icon={faFaceMehBlank} />
            und
          </Title>
        </div>
      </main>
    )
  else
    return (
      <main>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 1, 450: 2, 679: 3 }}
          style={{}}>
          <Masonry
            style={{ gap: '4px', maxWidth: 'calc(900px + 8px)' }}
            className='movie-grid'>
            {OMDBMovies.map((movie, i) => (
              <MooCard
                key={i}
                {...movie}
                handleClickTrailer={handleClickTrailer}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </main>
    )
}

export default MooResults
