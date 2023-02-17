import { useState } from 'react'

const { REACT_APP_14_OMDB_KEY } = process.env

function useOMDB() {
  const [OMDBmovies, setOMDBMovies] = useState([])

  const searchOMDB = async (str) => {
    let newMovies = undefined
    try {
      const imdbIDs = await searchByString(str)
      const movies = imdbIDs.map((v) => searchByID(v.imdbID))
      newMovies = await Promise.all(movies)
    } catch (error) {
      console.error('searchByString failed', error)
      newMovies = []
    } finally {
      // console.log({ newMovies })
      setOMDBMovies(newMovies)
    }
  }

  const searchByString = async (str) => {
    let results = undefined
    try {
      const responseOMDB = await fetch(`https://www.omdbapi.com/?apikey=${REACT_APP_14_OMDB_KEY}&type=movie&s=${str}&page=1`)
      const dataOMDB = await responseOMDB.json()
      results = dataOMDB.Search || []
      return results
    } catch (error) {
      console.error('searchByString failed', error)
      results = []
    } finally {
      return results
    }
  }

  const searchByID = async (id) => {
    let results = undefined
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${REACT_APP_14_OMDB_KEY}&type=movie&i=${id}`)
      const data = await res.json()
      const {
        Poster: poster, //
        Title: title,
        Year: year,
        Rated: esrb,
        Genre: genre,
        Actors: actors,
        Plot: plot,
        Ratings: rating
      } = data

      results = { poster, title, esrb, year, genre, actors, plot, rating }
    } catch (error) {
      console.error('searchByID failed', error)
      results = null
    } finally {
      return results
    }
  }

  return { searchOMDB, OMDBmovies }
}
export default useOMDB
