var axios = require('axios')

const { REACT_APP_14_GAPI_KEY } = process.env
var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

const searchYouTube = async (term) => {
  if (!REACT_APP_14_GAPI_KEY) throw new Error('Gapi key undefined')

  let firstVideoId = ''
  try {
    var params = {
      part: 'snippet',
      key: REACT_APP_14_GAPI_KEY,
      q: term,
      type: 'video'
    }
    const response = await axios.get(ROOT_URL, { params })
    const videos = response?.data?.items || null
    firstVideoId = (videos && videos[0]?.id?.videoId) || ''
    if (firstVideoId === '') throw new Error('No video found')
  } catch (e) {
    console.error(e)
  } finally {
    return firstVideoId
  }
}

export default searchYouTube
