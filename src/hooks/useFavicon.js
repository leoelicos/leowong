import { useEffect } from 'react'

const useFavicon = (src) => {
  useEffect(() => {
    document.querySelector('#favicon').setAttribute('href', 'favicons/11-favicon.png')
    return () => {
      document.querySelector('#favicon').setAttribute('href', src)
    }
  }, [])
}
export default useFavicon
