import axios from 'axios'

const { REACT_APP_14_TMDB_KEY } = process.env

export default async function TMDbAPIBySearch(str) {
  let data = []
  try {
    if (str === undefined) {
      throw new Error('TMDbAPIBySearch No string to search')
    } else if (REACT_APP_14_TMDB_KEY === undefined) {
      throw new Error('TMDbAPIBySearch Missing TMDB Key')
    } else {
    }

    const uri = 'https://api.themoviedb.org/3/movie/popular'
    const params = {
      api_key: REACT_APP_14_TMDB_KEY,
      language: 'en-US',
      page: 1
    }

    const res = await axios(uri, { params })
    let data = await res.json()
    data = data.Search
    return data
  } catch (error) {
    console.error(error)
  } finally {
    return data
  }
}
