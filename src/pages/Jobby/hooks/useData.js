import { useEffect, useState } from 'react'

const useData = () => {
  const [jobs, setJobs] = useState(() => {
    const currentStorage = JSON.parse(localStorage.getItem('jobs'))
    if (!currentStorage) return []

    const newStorage = currentStorage.map((x) => ({ ...x, dueDate: new Date(Date.parse(x.dueDate)) }))
    return newStorage
  })

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs))
  }, [jobs])

  const addJob = (data) => {
    const { projectName, projectType, hours, hourlyRate, dueDate } = data
    setJobs((prev) => {
      const timestamp = new Date().getTime()
      const serialized = {
        key: timestamp,
        timestamp,
        projectName,
        projectType,
        hours,
        hourlyRate,
        dueDate: dueDate.$d
      }
      return prev.concat(serialized)
    })
  }
  const deleteJob = (timestamp) => {
    setJobs((prev) => prev.filter((project) => project.timestamp !== timestamp))
  }

  return { jobs, addJob, deleteJob }
}

export default useData
