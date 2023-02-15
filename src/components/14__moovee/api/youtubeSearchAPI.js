import YTSearch from 'youtube-api-search'

const { REACT_APP_14_GAPI_KEY } = process.env

const searchYouTube = (term) =>
  new Promise((res) => {
    const x = YTSearch({ key: REACT_APP_14_GAPI_KEY, term: term }, (videos) => {
      res(`https://www.youtube.com/embed/${videos[0].id.videoId}`)
    })
    console.log({ x })
  })

export default searchYouTube
