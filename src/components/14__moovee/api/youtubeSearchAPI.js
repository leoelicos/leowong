// import YTSearch from 'youtube-api-search'

// const { REACT_APP_14_GAPI_KEY } = process.env

const searchYouTube = (term) =>
  new Promise((res) => {
    setTimeout(() => {
      res('https://www.youtube.com/embed/tPEE9ZwTmy0')

      // YTSearch({ key: REACT_APP_14_GAPI_KEY, term: term }, (videos) => {
      //   res(`https://www.youtube.com/embed/${videos[0].id.videoId}`)
      // })
    }, 1000)
  })

export default searchYouTube
