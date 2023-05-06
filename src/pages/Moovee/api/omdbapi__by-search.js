const { REACT_APP_14_OMDB_KEY } = process.env
const OMDbAPIBySearch = async (str) => {
  let results = undefined
  try {
    if (!str) throw new Error('useOMDB searchByString: No string to search')
    const responseOMDB = await fetch(`https://www.omdbapi.com/?apikey=${REACT_APP_14_OMDB_KEY}&type=movie&s=${str}&page=1`)
    const dataOMDB = await responseOMDB.json()
    results = dataOMDB.Search || []
  } catch (error) {
    console.error(error)
  } finally {
    return results
  }
}
export default OMDbAPIBySearch
