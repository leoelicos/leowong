const { REACT_APP_14_OMDB_KEY } = process.env
const OMDbAPIById = async (id) => {
  let data = null
  try {
    if (!id) throw new Error('useOMDB searchByID: No ID to search')
    const res = await fetch(`https://www.omdbapi.com/?apikey=${REACT_APP_14_OMDB_KEY}&type=movie&i=${id}`)
    data = await res.json()
  } catch (error) {
    console.error(error)
  } finally {
    return data
  }
}
export default OMDbAPIById
