/* hooks */
import { useRef } from 'react'

/* customhooks */
import useTrailer from './hooks/useTrailer'
import useLocalStorage from './hooks/useLocalStorage'
import useTitle from '../../hooks/useTitle'
import useOMDB from './hooks/useOMDB'
import useFavicon from '../../hooks/useFavicon'

/* api */
import searchYouTube from './api/youtubeSearchAPI'

/* components */
import { Button, ConfigProvider, Progress, Select, Space, Spin, Tag, Tooltip } from 'antd'
import Search from 'antd/es/input/Search'
import Title from 'antd/es/typography/Title'

/* images */
import Logo from './images/moovee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown } from '@fortawesome/free-regular-svg-icons'
import { faClockRotateLeft, faFaceMehBlank, faMessage } from '@fortawesome/free-solid-svg-icons'
import NoPoster from './images/noposter.png'

/* style */
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import './css/index.css'

export default function MooVee() {
  /* useRef to track without re-render */
  const loadingOMDB = useRef(false)
  let hasSearched = useRef(false)

  /* custom hooks */
  const { savedMovies, saveMovie } = useLocalStorage()
  useFavicon('/favicons/14-favicon.png')
  useTitle('MooVee')
  const { searchOMDB, OMDBmovies } = useOMDB()

  /* event handlers */
  const handleSubmit = async (e) => {
    const capitalize = (w) => w.slice(0, 1).toLocaleUpperCase() + w.slice(1).toLocaleLowerCase()
    if (e.length === 0) {
      console.log('e.length = 0, return')
      return
    }

    let m = e.replace(/[^a-zA-Z0-9 ]/g, '')
    if (!m.length) {
      console.log('no title, return')
      return
    }

    let c = m.split(' ').map(capitalize).join(' ').trim()
    hasSearched.current = true
    saveMovie(c)

    loadingOMDB.current = true
    // console.log('set loading to true')
    await searchOMDB(c)
    loadingOMDB.current = false
    // console.log('set loading to false')
  }
  const { Trailer, showTrailer, updateUri, updateLoadingGapi } = useTrailer()
  const handleClickTrailer = async (title, year) => {
    showTrailer()
    let gapiRes = ''
    try {
      updateLoadingGapi(true)
      gapiRes = await searchYouTube(`${title}+${year}+trailer`)
      updateLoadingGapi(false)
      // console.log({ gapiRes })
    } catch (error) {
      console.error(error)
    } finally {
      // console.log('setting uri to', gapiRes)
      updateUri(gapiRes)
    }
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
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#ed7d31'
            }
          }}>
          <header
            className={`header ${hasSearched?.current === false ? 'unsearched' : ''}`}
            style={hasSearched?.current === false ? { flex: 1 } : null}>
            <img
              className='logo'
              src={Logo}
              alt='moovee logo'
            />
            <div style={{ display: 'flex', width: '100%' }}>
              <Search
                style={{ flex: '3' }}
                placeholder='Any movie name...'
                enterButton={
                  <FontAwesomeIcon
                    icon={faFaceMehBlank}
                    style={{ color: 'white', display: 'inline-block', fontSize: '1rem' }}
                  />
                }
                loading={false}
                onSearch={handleSubmit}
                allowClear={true}
              />

              <Select
                disabled={savedMovies.length === 0}
                dropdownMatchSelectWidth={false}
                bordered={false}
                style={{ flex: '1', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '1rem' }}
                onChange={handleSelectMovieHistory}
                suffixIcon={<FontAwesomeIcon icon={faCaretSquareDown} />}
                placeholder={<FontAwesomeIcon icon={faClockRotateLeft} />}
                options={savedMovies?.map((title, i) => ({
                  value: i,
                  label: title
                }))}
              />
            </div>
          </header>

          {hasSearched?.current === false ? null : loadingOMDB.current ? (
            <main>
              <Spin
                size='large'
                className='loading-spin'
              />
            </main>
          ) : !OMDBmovies || !OMDBmovies.length ? (
            <main>
              <div className='result-container empty'>
                <Title
                  level={5}
                  style={{
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                  N
                  <FontAwesomeIcon
                    icon={faFaceMehBlank}
                    style={{ color: 'pink', display: 'inline-block', fontSize: '0.8rem', marginBottom: '1px' }}
                  />
                  &ensp;m
                  <FontAwesomeIcon
                    icon={faFaceMehBlank}
                    style={{ color: 'pink', display: 'inline-block', fontSize: '0.8rem', marginBottom: '1px' }}
                  />
                  vies&ensp;f
                  <FontAwesomeIcon
                    icon={faFaceMehBlank}
                    style={{ color: 'pink', display: 'inline-block', fontSize: '0.8rem', marginBottom: '1px' }}
                  />
                  und
                </Title>
              </div>
            </main>
          ) : (
            <main>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 0: 1, 450: 2, 679: 3 }}
                style={{}}>
                <Masonry
                  style={{ gap: '4px', maxWidth: 'calc(900px + 8px)' }}
                  className='movie-grid'>
                  {OMDBmovies.map((movie, i) => (
                    <Card
                      key={i}
                      {...movie}
                      handleClickTrailer={handleClickTrailer}
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </main>
          )}
          <footer>
            <Button
              type='text'
              href='https://www.facebook.com/MooVee-The-Movies-104712718873649/'
              target='_blank'
              rel='noferrer'>
              <FontAwesomeIcon
                icon={faMessage}
                style={{ color: 'white' }}
              />
            </Button>
          </footer>
          <Trailer />
        </ConfigProvider>
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
            src={poster === 'N/A' ? NoPoster : poster}
            alt='movie poster'
          />
        </div>

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
