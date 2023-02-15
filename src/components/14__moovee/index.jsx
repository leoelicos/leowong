import useTrailer from './hooks/useTrailer'
import { Button, Form, Input } from 'antd'
import useOMDB from './hooks/useOMDB'
import { useState } from 'react'

export default function MooVee() {
  const { Trailer, showTrailer } = useTrailer()
  const [movies, setMovies] = useState([])
  const updateMovies = (array) => {
    setMovies(array)
  }
  const search = useOMDB(updateMovies)
  const [form] = Form.useForm()
  const handleSubmit = async (e) => {
    if (e === undefined) {
      console.log('is blank')
      return
    }
    await search(e)
  }
  console.log({ movies })
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

        <>
          {movies.map((movie) => {
            const { poster, title, esrb, year, genre, actors, plot, rating } = movie
            console.log({ title })
            return (
              <p key={poster}>
                {/* {poster} */}
                {title}
                {/* {esrb} */}
                {/* {year} */}
                {/* {genre} */}
                {/* {actors} */}
                {/* {plot} */}
                {/* {rating} */}
                <Trailer />
                <Button
                  type='primary'
                  onClick={showTrailer}>
                  Mock show trailer
                </Button>
              </p>
            )
          })}
        </>
      </div>
    </div>
  )
}
