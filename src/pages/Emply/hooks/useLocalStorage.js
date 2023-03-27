import { useEffect, useState } from 'react'

const useLocalStorage = (name) => {
  const [employeesLS, setEmployeesLS] = useState()

  useEffect(() => {
    let item = localStorage.getItem(name)
    if (item === 'undefined') item = []
    else item = JSON.parse(item)

    setEmployeesLS(item)
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
