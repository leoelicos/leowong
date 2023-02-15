import useTrailer from './hooks/useTrailer'
import { Button, Form, Input } from 'antd'
import useOMDB from './hooks/useOMDB'
import searchYouTube from './api/youtubeSearchAPI'

import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

export default function MooVee() {
  useFavicon('/favicons/14-favicon.png')
  useTitle('MooVee')

  const { searchOMDB, OMDBmovies } = useOMDB()
  const [form] = Form.useForm()
  const handleSubmit = async (e) => {
    if (e === undefined) {
      // console.log('is blank')
      return
    }
    await searchOMDB(e)
  }
  const { Trailer, showTrailer } = useTrailer()
  const handleClickTrailer = async (title, year) => {
    // console.log({ title, year })
    const uri = await searchYouTube(`${title}+${year}+trailer`)
    // console.log('handleClickTrailer', { uri })
    showTrailer(uri)
  }
  return (
    <div className='app-14'>
      <div className='body'>
        <Form
          name='basic'
          form={form}
          onFinish={handleSubmit}
          initialValues={{ query: '' }}>
          <Form.Item
            label='Project Name'
            name='query'>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'>
              Mock search movies
            </Button>
          </Form.Item>
        </Form>

        <Trailer />
        {OMDBmovies.map((movie) => (
          <Card
            key={movie.poster}
            {...movie}
            handleClickTrailer={handleClickTrailer}
          />
        ))}
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
        <ul className='movieUL'>
          <li className='esrb'>
            <b>Rated: </b>
            {esrb === 'N/A' ? 'Unrated' : esrb}
          </li>
          <li className='year'>
            <b>Year: </b>
            {esrb === 'N/A' ? 'Unrated' : year}
          </li>
          <li className='rated'>
            <b>Ratings: </b>
            <br />
            {rating.length === 0 ? (
              'No ratings found'
            ) : (
              <ul>
                {rating.map((r) => (
                  <li
                    className='rating'
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
