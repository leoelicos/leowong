/* hooks */
import { useEffect, useState } from 'react'
import useTime from './hooks/useTime'
import useWeather from './hooks/useWeather'
import useData from './hooks/useData'
import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

/* custom components */
import CustomHeader from './components/CustomHeader'
import CustomFooter from './components/CustomFooter'
import TimeBlock from './components/TimeBlock'

/* style */
import './css/index.css'

export default function DayPlanner() {
  /* state */
  const [toggle, setToggle] = useState(false)

  /* hooks */
  const { schedule, addToSchedule } = useData()
  const now = useTime()
  const weather = useWeather()
  useFavicon('favicons/11-favicon.png')
  useTitle(now.toLocaleDateString('en-US', { weekday: 'long' }))

  /* event handlers */
  const handleToggle = () => {
    setToggle((prev) => {
      console.log(`Setting toggle to ${!prev}`)
      return !prev
    })
  }

  /* effect */

  return (
    <div className={`app-11 ${toggle ? 'dark' : ''}`}>
      <div className='body'>
        <CustomHeader
          now={now}
          weather={weather}
        />
        <main className={`container ${toggle ? 'dark' : ''}`}>
          {schedule?.map((v) => {
            return (
              <TimeBlock
                key={v.time}
                time={v.time}
                initialText={v.text}
                addToSchedule={addToSchedule}
                relative={now.getHours() === v.time ? 'present' : now.getHours() > v.time ? 'past' : 'future'}
              />
            )
          }) || null}
        </main>
        <CustomFooter
          toggle={toggle}
          handleToggle={handleToggle}
        />
      </div>
    </div>
  )
}
