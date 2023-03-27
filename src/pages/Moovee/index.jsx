/* hooks */
import { useRef, useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import useTitle from '../../hooks/useTitle'
import useFavicon from '../../hooks/useFavicon'
import useOMDB from './hooks/useOMDB'

/* components */
import { Button, ConfigProvider, Spin } from 'antd'
import Title from 'antd/es/typography/Title'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

/* custom components */
import MooHeader from './components/MooHeader'
import Result from './components/Result'

/* appearance */
import './css/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faFaceMehBlank } from '@fortawesome/free-solid-svg-icons'

export default function MooVee() {
  useTitle('MOOVEE')
  useFavicon('/favicons/moovee.png')

  let hasSearched = useRef(false)

  const [idxOfClickedTrailer, setIdxOfClickedTrailer] = useState(-1)
  const [trailerWasClicked, setTrailerWasClicked] = useState(false)

  /* hooks */
  const { history, saveHistory } = useLocalStorage('titles')
  const { omdbLoading, omdbMovies, searchOMDB } = useOMDB(saveHistory)

  /* handle search */
  const handleSubmit = async (e) => {
    let m = e.replace(/[^a-zA-Z0-9 ]/g, '').trim()
    if (!m.length) return
    else hasSearched.current = true

    const searchString = m[0].toLocaleUpperCase() + m.slice(1).toLocaleLowerCase()
    await searchOMDB(searchString)
  }

  /* handle click history option */
  const handleSelectMovieHistory = (historyIdx) => {
    handleSubmit(history[historyIdx])
  }
  const o = <FontAwesomeIcon icon={faFaceMehBlank} />
  return (
    <div className='app-14'>
      <div className='body'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#ed7d31'
            }
          }}>
          <MooHeader
            searched={hasSearched?.current}
            handleSubmit={handleSubmit}
            history={history}
            handleSelectMovieHistory={handleSelectMovieHistory}
          />
          {hasSearched?.current && (
            <main>
              {omdbLoading ? (
                <Spin
                  size='large'
                  className='loading-spin'
                />
              ) : !omdbMovies.length ? (
                <div className='result-container empty'>
                  <Title
                    className='no-movies'
                    level={5}>
                    N{o}&ensp;m{o}vies&ensp;f{o}und
                  </Title>
                </div>
              ) : (
                <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 450: 2, 679: 3 }}>
                  <Masonry className='movie-grid'>
                    {omdbMovies.map((movie, i) => (
                      <Result
                        key={i}
                        idx={i}
                        idxOfClickedTrailer={idxOfClickedTrailer}
                        setIdxOfClickedTrailer={setIdxOfClickedTrailer}
                        trailerWasClicked={trailerWasClicked}
                        setTrailerWasClicked={setTrailerWasClicked}
                        resetIdxOfClickedTrailer={() => {
                          setIdxOfClickedTrailer(-1)
                        }}
                        {...movie}
                      />
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              )}
            </main>
          )}
          <footer>
            <Button
              type='text'
              href='https://www.facebook.com/MooVee-The-Movies-104712718873649/'
              target='_blank'
              rel='noferrer'>
              <FontAwesomeIcon
                className='facebook-icon'
                icon={faFacebookF}
              />
            </Button>
          </footer>
        </ConfigProvider>
      </div>
    </div>
  )
}
