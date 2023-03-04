import { openDB } from 'idb'

const useIDB = () => {
  const dbName = 'team-maker-employees'
  const putDb = async (employee) => {
    try {
      const db = await openDB(dbName, 1)
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

  const getDb = async () => {
    try {
      const schemaVersion = 1
      const db = await openDB(dbName, schemaVersion, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(dbName)) {
            db.createObjectStore(dbName, {
              keyPath: 'id',
              autoIncrement: true
            })
          }
        }
      })
      const tx = db.transaction(dbName, 'readonly')
      const store = tx.objectStore(dbName)
      const employees = await store.getAll()
      return employees
    } catch (e) {
      console.error(e)
    }
  }

  const deleteDb = async (id) => {
    const db = await openDB(dbName, 1)
    const tx = db.transaction(dbName, 'readwrite')
    const store = tx.objectStore(dbName)
    const request = store.delete(id)
    const result = await request
    return result
  }

  return { putDb, getDb, deleteDb }
}

export default useIDB
