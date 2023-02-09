/* hooks */
import { useEffect, useState } from 'react'

/* custom components */
import CustomHeader from './components/CustomHeader'
import CustomFooter from './components/CustomFooter'
import AutoComplete from './components/AutoComplete'

import useTime from './hooks/useTime'

export default function DayPlanner() {
  /* state */
  const [toggle, setToggle] = useState(false)
  const now = useTime()
  /* event handlers */
  const handleToggle = () => {
    setToggle((prev) => {
      console.log(`Setting toggle to ${!prev}`)
      return !prev
    })
  }

  /* effect */
  useEffect(() => {
    document.querySelector('#favicon').setAttribute('href', 'favicons/11-favicon.png')
    return () => {
      document.querySelector('#favicon').setAttribute('href', 'favicons/00-favicon.png')
    }
  }, [])

  return (
    <div className={`app-11 ${toggle ? 'dark' : ''}`}>
      <div className='body'>
        <CustomHeader now={now} />
        <main className={`container ${toggle ? 'dark' : ''}`}>
          <AutoComplete />
        </main>
        <CustomFooter
          toggle={toggle}
          handleToggle={handleToggle}
        />
      </div>
    </div>
  )
}
