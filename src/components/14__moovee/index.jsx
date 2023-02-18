/* hooks */
import { useRef } from 'react'
import useTrailer from './hooks/useTrailer'
import useLocalStorage from './hooks/useLocalStorage'
import useTitle from '../../hooks/useTitle'
import useOMDB from './hooks/useOMDB'
import useFavicon from '../../hooks/useFavicon'

/* api */
import searchYouTube from './api/youtubeSearchAPI'

/* components */
import { Button, ConfigProvider, Progress, Space, Tag, Tooltip } from 'antd'

import MooHeader from './components/MooHeader'
import MooResults from './components/MooResults'

/* icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

/* style */
import './css/index.css'

export default function MooVee() {
  /* favicon */
  useFavicon('/favicons/14-favicon.png')

  /* title */
  useTitle('MooVee')

  /* results will mount */
  let hasSearched = useRef(false)

  /* local storage */
  const { savedMovies, saveMovie } = useLocalStorage('titles')

  /* OMDB */
  const { searchOMDB, OMDBMovies } = useOMDB()

  /* OMDB loading */
  const loadingOMDB = useRef(false)

  /* modal with trailer */
  const { Trailer, showTrailer, updateUri, updateLoadingGapi } = useTrailer()

  /* handle search */
  const handleSubmit = async (e) => {
    console.log('clicked submit', e)
    let m = e.replace(/[^a-zA-Z0-9 ]/g, '').trim()
    if (!m.length) return

    hasSearched.current = true // flag to render results page

    const c = m[0].toLocaleUpperCase() + m.slice(1).toLocaleLowerCase()
    saveMovie(c) /* save to local storage */
    console.log('saved to local storage')
    loadingOMDB.current = true
    await searchOMDB(c)
    console.log('finished saving to local storage')
    console.log({ OMDBMovies })
    loadingOMDB.current = false
  }

  /* handle trailer */
  const handleClickTrailer = async (title, year) => {
    showTrailer()
    let gapiRes = ''
    try {
      updateLoadingGapi(true)
      console.log('searching youtube')
      gapiRes = await searchYouTube(`${title}+${year}+trailer`)
      console.log({ gapiRes })
      updateLoadingGapi(false)
    } catch (error) {
      console.error(error)
    } finally {
      // console.log('setting uri to', gapiRes)
      updateUri(gapiRes)
    }
  }

  /* handle click history option */
  const handleSelectMovieHistory = (historyIdx) => {
    handleSubmit(savedMovies[historyIdx])
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
          <MooHeader
            searched={hasSearched?.current}
            loading={loadingOMDB?.current}
            handleSubmit={handleSubmit}
            savedMovies={savedMovies}
            handleSelectMovieHistory={handleSelectMovieHistory}
          />
          <MooResults
            searched={hasSearched?.current}
            loading={loadingOMDB?.current}
            OMDBMovies={OMDBMovies}
            handleClickTrailer={handleClickTrailer}
          />

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
