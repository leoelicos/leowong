import { useCallback, useEffect, useState } from 'react'

function useResize(element = null) {
  let [w, setW] = useState(0)

  const onResize = useCallback(
    (event) => {
      let w = window.innerWidth

      if (element && element.current) {
        const clientRect = element.current.getBoundingClientRect()

        w = clientRect.width
      }

      setW(w)
    },
    [element]
  )

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
