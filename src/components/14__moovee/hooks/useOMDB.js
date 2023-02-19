import { useState } from 'react'
import OMDbAPIById from '../api/omdbapi__by-id-or-title'
import OMDbAPIBySearch from '../api/omdbapi__by-search'

const parse = ({
  //
  Poster: poster,
  Title: title,
  Rated: esrb,
  Year: year,
  Genre: genre,
  Actors: actors,
  Plot: plot,
  Ratings: rating
}) => ({ poster, title, esrb, year, genre, actors, plot, rating })

const useOMDB = (saveSearch) => {
  const [omdbLoading, setOmdbLoading] = useState(null)
  const [omdbMovies, setOmdbMovies] = useState([])
  const searchOMDB = async (str) => {
    setOmdbLoading(true)
    try {
      const idArray = await OMDbAPIBySearch(str)
      const mPromise = async (v) => parse(await OMDbAPIById(v.imdbID))
      const movies = await Promise.all(idArray.map(mPromise))
      if (movies.length > 0) saveSearch(str)
      setOmdbMovies(movies)
    } catch (error) {
      console.error(error)
    } finally {
      setOmdbLoading(false)
    }
  }
  return { omdbLoading, omdbMovies, searchOMDB }
}

export default useOMDB
