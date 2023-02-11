import { useCallback, useEffect, useState } from 'react'

function useResize() {
  let [w, setW] = useState(0)

  const onResize = useCallback(() => {
    setW(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    onResize()
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [onResize])

  return w
}
export default useResize
