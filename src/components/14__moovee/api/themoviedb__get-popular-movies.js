const { REACT_APP_14_TMDB_KEY } = process.env
const TMDbAPIBySearch = async (str) => {
  let results = undefined
  try {
    if (!str) throw new Error('useOMDB searchByString: No string to search')
    const responseTMDB = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_14_TMDB_KEY}&language=en-US&page=1`)
    const dataTMDB = await responseTMDB.json()
    results = dataTMDB.Search || []
    return results
  } catch (error) {
    console.error(error)
    results = []
  } finally {
    return results
  }
}
export default TMDbAPIBySearch
