import { useEffect, useState } from 'react'

const useLocalStorage = (name) => {
  const [employeesLS, setEmployeesLS] = useState()

  useEffect(() => {
    setEmployeesLS(JSON.parse(localStorage.getItem(name)) || [])
  }, [name])

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(employeesLS))
  }, [employeesLS, name])

  const updateEmployeesLS = (r) => {
    setEmployeesLS(r)
  }

  return { employeesLS, updateEmployeesLS }
}
export default useLocalStorage
