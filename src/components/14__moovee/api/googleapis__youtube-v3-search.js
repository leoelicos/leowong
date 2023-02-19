import axios from 'axios'
const { REACT_APP_14_GAPI_KEY } = process.env

const googleapisYouTubeV3Search = async (term) => {
  let response = null
  try {
    if (!REACT_APP_14_GAPI_KEY) throw new Error('Gapi key undefined')
    var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'
    var params = {
      part: 'snippet',
      key: REACT_APP_14_GAPI_KEY,
      q: term,
      type: 'video'
    }
    response = await axios(ROOT_URL, { params })
  } catch (e) {
    console.error(e)
  } finally {
    return response
  }
}

export default googleapisYouTubeV3Search
