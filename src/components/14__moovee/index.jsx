/* hooks */
import useTrailer from './hooks/useTrailer'
import useLocalStorage from './hooks/useLocalStorage'
import useTitle from '../../hooks/useTitle'
import useOMDB from './hooks/useOMDB'
import useFavicon from '../../hooks/useFavicon'

/* api */
import searchYouTube from './api/youtubeSearchAPI'

/* components */
import { Button, Select } from 'antd'
import Search from 'antd/es/input/Search'

/* images */
import Logo from './images/moovee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown, faSquare } from '@fortawesome/free-regular-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

/* style */
import './css/index.css'

export default function MooVee() {
  const { savedMovies, saveMovie } = useLocalStorage()
  useFavicon('/favicons/14-favicon.png')
  useTitle('MooVee')

  const { searchOMDB, OMDBmovies } = useOMDB()

  const handleSubmit = async (e) => {
    if (e === undefined) return
    saveMovie(e)
    await searchOMDB(e)
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
        <header className='header'>
          <img
            className='logo'
            src={Logo}
            alt='moovee logo'
          />

          <Search
            placeholder='Any movie name...'
            enterButton
            loading={false}
            onSearch={handleSubmit}
          />
          {savedMovies.length === 0 ? null : (
            <Select
              className='history-button'
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
        </header>
        <main className='results'>
          {OMDBmovies.length === 0 ? (
            <div className='result-container'>No movies found 🤔</div>
          ) : (
            OMDBmovies.map((movie) => (
              <Card
                key={movie.poster}
                {...movie}
                handleClickTrailer={handleClickTrailer}
              />
            ))
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
    <div
      className='result-container'
      key={poster}>
      <div className='moviePoster'>
        <img
          className='movie-poster'
          src={poster === 'N/A' ? './images/noposter.png' : poster}
          alt='movie poster'
        />
      </div>
      <div className='movie-details'>
        <h3 className='title'>{title === 'N/A' ? 'Untitled' : title}</h3>
        <ul className='ul movieUL'>
          <li className='li esrb'>
            <b>Rated: </b>
            {esrb === 'N/A' ? 'Unrated' : esrb}
          </li>
          <li className='li year'>
            <b>Year: </b>
            {esrb === 'N/A' ? 'Unrated' : year}
          </li>
          <li className='li rated'>
            <b>Ratings: </b>
            <br />
            {rating.length === 0 ? (
              'No ratings found'
            ) : (
              <ul className='ul'>
                {rating.map((r) => (
                  <li
                    className='li rating'
                    key={r.Source}>
                    <b>{r.Source}: </b>
                    {r.Value}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        <p className='genre'>
          <b>Genre: {genre === 'N/A' ? '—' : genre}</b>
        </p>
        <p className='actors'>
          <b>Actors: {actors === 'N/A' ? '—' : actors}</b>
        </p>
        <p className='plot'>
          <b>Plot: </b>
          {plot === 'N/A' ? '—' : plot}
        </p>

        <Button
          type='primary'
          onClick={() => {
            handleClickTrailer(title, year)
          }}>
          Trailer
        </Button>
      </div>
    </div>
  )
}
