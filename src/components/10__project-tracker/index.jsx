import ProjectTable from './components/ProjectTable'
import Header from './components/Header'
import dummyData from './data/dummydata'
import { useEffect, useRef, useState } from 'react'

const useTime = () => {
  const [time, setTime] = useState(new Date().getTime())
  const timer = useRef(null)

  const incrementTime = () => {
    setTime((prev) => prev + 1)
  }
  useEffect(() => {
    clearInterval(timer.current)
    timer.current = setInterval(incrementTime, 1000)
  }, [])
  const newTime = new Date(time)
  const timeString = newTime.toLocaleTimeString([], { hour12: true })
  const dateString = newTime.toLocaleDateString()
  return [timeString, dateString]
}

export default function ProjectTracker() {
  const [modal, setModal] = useState(false)
  const [timeString, dateString] = useTime()
  const handleClickAdd = () => {
    setModal(true)
  }
  return (
    <main>
      <Header
        timeString={timeString}
        dateString={dateString}
        handleClickAdd={handleClickAdd}
      />
      <ProjectTable data={dummyData} />
    </main>
  )
}
