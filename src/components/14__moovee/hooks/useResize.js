import { useCallback, useEffect, useState } from 'react'

function useResize() {
  let [w, setW] = useState(0)
  let [h, setH] = useState(0)
  const onResize = useCallback(() => {
    let w = window.innerWidth
    let h = window.innerHeight

    setH(h)
    setW(w)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    onResize()
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [onResize])

  return [w, h]
}
export default useResize
