/* hooks */
import useTrailer from './hooks/useTrailer'
import useLocalStorage from './hooks/useLocalStorage'
import useTitle from '../../hooks/useTitle'
import useOMDB from './hooks/useOMDB'
import useFavicon from '../../hooks/useFavicon'

/* api */
import searchYouTube from './api/youtubeSearchAPI'

/* components */
import { Button, Select, Space, Tag, Tooltip } from 'antd'
import Search from 'antd/es/input/Search'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

/* images */
import Logo from './images/moovee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown, faSquare } from '@fortawesome/free-regular-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

/* style */
import './css/index.css'
import { useRef } from 'react'

export default function MooVee() {
  const { savedMovies, saveMovie } = useLocalStorage()
  useFavicon('/favicons/14-favicon.png')
  useTitle('MooVee')
  let hasSearched = useRef(false)

  const { searchOMDB, OMDBmovies } = useOMDB()

  const capitalize = (w) => w.slice(0, 1).toLocaleUpperCase() + w.slice(1).toLocaleLowerCase()
  const handleSubmit = async (e) => {
    if (e.length === 0) return
    let m = e.replace(/[^a-zA-Z0-9 ]/g, '')
    if (!m.length) return
    let c = m.split(' ').map(capitalize).join(' ').trim()
    hasSearched.current = true
    saveMovie(c)
    await searchOMDB(c)
  }
  const { Trailer, showTrailer } = useTrailer()
  const handleClickTrailer = async (title, year) => {
    const uri = await searchYouTube(`${title}+${year}+trailer`)

    showTrailer(uri)
  }
  const handleSelectMovieHistory = (historyIdx) => {
    handleClickHistory(savedMovies[historyIdx])
  }
  const handleClickHistory = (historyMovie) => {
    handleSubmit(historyMovie)
  }

  return (
    <div className='app-14'>
      <div className='body'>
        <header className={`header ${hasSearched?.current === false ? 'unsearched' : ''}`}>
          <img
            className='logo'
            src={Logo}
            alt='moovee logo'
          />
          <Space direction='vertical'>
            <Search
              placeholder='Any movie name...'
              enterButton
              loading={false}
              onSearch={handleSubmit}
              allowClear={true}
            />
            {savedMovies.length === 0 ? null : (
              <Select
                dropdownMatchSelectWidth={true}
                style={{ width: '100%' }}
                onChange={handleSelectMovieHistory}
                suffixIcon={<FontAwesomeIcon icon={faCaretSquareDown} />}
                placeholder={<FontAwesomeIcon icon={faClockRotateLeft} />}>
                {savedMovies?.map((title, i) => (
                  <Select.Option
                    key={i}
                    value={i}>
                    {title}
                  </Select.Option>
                ))}
              </Select>
            )}
          </Space>
        </header>
        <main>
          {hasSearched?.current === false ? null : OMDBmovies.length === 0 ? (
            <div className='result-container'>No movies found 🤔</div>
          ) : (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 0: 1, 400: 2, 700: 3 }}
              style={{}}>
              <Masonry
                style={{ gap: '1rem', maxWidth: 'calc(900px + 2rem)' }}
                className='movie-grid'>
                {OMDBmovies.map((movie) => (
                  <Card
                    key={movie.poster}
                    {...movie}
                    handleClickTrailer={handleClickTrailer}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </main>
        <footer className='footer'>
          <a href='https://www.facebook.com/MooVee-The-Movies-104712718873649/'>
            <FontAwesomeIcon
              icon={faSquare}
              className='footer-icon'
            />
          </a>
        </footer>
        <Trailer />
      </div>
    </div>
  )
}

const Card = ({ poster, title, esrb, year, genre, actors, plot, rating, handleClickTrailer }) => {
  return (
    <div className='card'>
      <div
        className='result-container'
        key={poster}>
        <div className='movie-poster'>
          <img
            src={poster === 'N/A' ? './images/noposter.png' : poster}
            alt='movie poster'
          />
        </div>

        <div className='movie-details'>
          <Button
            className='trailer-btn'
            type='primary'
            onClick={() => {
              handleClickTrailer(title, year)
            }}>
            Watch Trailer
          </Button>
          <h3 className='title'>{title === 'N/A' ? 'Untitled' : title}</h3>
          <Tooltip
            title={rating[0].Source}
            placement='bottom'>
            <Tag color='#ed7d31'>
              <b>{rating[0].Value.replace('/10', '')}</b>
            </Tag>
          </Tooltip>
          <p>
            {year === 'N/A' ? '—' : year} <b>{esrb === 'N/A' ? 'Unrated' : esrb}</b>
          </p>

          <p className='actors'>
            <b>Actors: {actors === 'N/A' ? '—' : actors}</b>
          </p>
          <p className='plot'>
            <b>Plot: </b>
            {plot === 'N/A' ? '—' : plot}
          </p>
          {genre === 'N/A' ? null : (
            <p className='genre'>
              <Space
                style={{ justifyContent: 'center' }}
                size={[0, 8]}
                wrap>
                {genre.split(', ').map((g) => (
                  <Tag
                    color='#ed7d31'
                    key={g}>
                    {g}
                  </Tag>
                ))}
              </Space>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
