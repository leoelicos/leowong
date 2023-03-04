import { useEffect, useState } from 'react'

const useLocalStorage = (name) => {
  const getter = () => JSON.parse(localStorage.getItem(name)) || []
  const setter = (r) => localStorage.setItem(name, JSON.stringify(r))

  const [employeesLS, setEmployeesLS] = useState()

  useEffect(() => {
    setEmployeesLS(getter())
  }, [])

  useEffect(() => {
    setter(employeesLS)
  }, [employeesLS])

  const updateEmployeesLS = (r) => {
    setEmployeesLS(r)
  }

  return { employeesLS, updateEmployeesLS }
}
export default useLocalStorage
