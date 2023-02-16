import YTSearch from 'youtube-api-search'

const { REACT_APP_14_GAPI_KEY } = process.env

const searchYouTube = (term) =>
  new Promise((res) => {
    // res('https://www.youtube.com/embed/8qi_EO6jQvM')
    YTSearch({ key: REACT_APP_14_GAPI_KEY, term: term }, (videos) => {
      res(`https://www.youtube.com/embed/${videos[0].id.videoId}`)
    })
  })

export default searchYouTube
