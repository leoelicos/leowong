import { useState } from 'react'

const useData = () => {
  const [data, setData] = useState([])

  const addProject = (data) => {
    const { projectName, projectType, hours, hourlyRate, dueDate } = data
    console.log({ dueDate })
    setData((prev) => {
      const timestamp = new Date().getTime()
      const serialized = {
        key: timestamp,
        timestamp,
        projectName,
        projectType,
        hours,
        hourlyRate,
        dueDate: dueDate.$d.toLocaleDateString()
      }
      return prev.concat(serialized)
    })
  }
  const deleteProject = (timestamp) => {
    setData((prev) => prev.filter((project) => project.timestamp !== timestamp))
  }

  return { data, addProject, deleteProject }
}

export default useData
