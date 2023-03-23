import { openDB } from 'idb'

const useIDB = () => {
  const dbName = 'team-maker-employees'

  const connect = async () => {
    try {
      const schemaVersion = 1
      const connection = await openDB(dbName, schemaVersion, {
        upgrade(dbNames) {
          if (!dbNames.objectStoreNames.contains(dbName)) {
            dbNames.createObjectStore(dbName, {
              keyPath: 'id',
              autoIncrement: true
            })
          }
        }
      })
      return connection
    } catch (e) {
      console.error(e)
    }
  }

  const getDb = async () => {
    try {
      const db = await connect()
      const tx = db.transaction(dbName, 'readonly')
      const store = tx.objectStore(dbName)
      const employees = await store.getAll()
      return employees
    } catch (e) {
      console.error(e)
    }
  }

  const putDb = async (employee) => {
    try {
      const db = await connect()
      const tx = db.transaction(dbName, 'readwrite')
      const store = tx.objectStore(dbName)
      const payload = {
        name: employee.name,
        id: employee.id,
        role: employee.role,
        email: employee.email
      }
      await store.put(payload)
    } catch (e) {
      console.error(e)
    }
  }

  const deleteDb = async (id) => {
    try {
      const db = await connect()
      const tx = db.transaction(dbName, 'readwrite')
      const store = tx.objectStore(dbName)
      const request = store.delete(id)
      const result = await request
      return result
    } catch (e) {
      console.error(e)
    }
  }

  return { putDb, getDb, deleteDb }
}

export default useIDB
