import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Table } from 'antd'
import { useRef } from 'react'
import useResize from '../hooks/useResize'

const { Column } = Table

const columns = [
  {
    title: 'Name',
    shortTitle: 'Name',
    dataIndex: 'projectName'
  },
  {
    title: 'Type',
    shortTitle: 'Type',
    dataIndex: 'projectType'
  },
  {
    title: 'Hourly Rate ($)',
    shortTitle: '$/hr',
    dataIndex: 'hourlyRate'
  },
  {
    title: 'Hours',
    shortTitle: 'Hours',
    dataIndex: 'hours'
  },
  {
    title: 'Due Date',
    shortTitle: 'Due',
    dataIndex: 'dueDate'
  },
  {
    title: 'Days until Due Date',
    shortTitle: 'Days left',
    dataIndex: 'daysUntilDueDate'
  },
  {
    title: 'Potential total Earnings ($)',
    shortTitle: 'Total ($)',
    dataIndex: 'potentialEarnings'
  },
  { title: '', shortTitle: '', dataIndex: 'deleteButton' }
]
const ProjectTable = ({ data, onDelete }) => {
  const tableRef = useRef(null)
  const w = useResize(tableRef)

  const now = new Date().getTime()
  const deserialized = data.map(({ timestamp, projectName, projectType, hours, hourlyRate, dueDate }) => {
    return {
      key: timestamp,
      projectName,
      projectType,
      hours,
      hourlyRate: hourlyRate.toFixed(2),
      dueDate: new Date(dueDate).toLocaleDateString(),
      daysUntilDueDate: Math.max(0, Math.floor((new Date(dueDate).getTime() - now) / (1000 * 60 * 60 * 24))),
      potentialEarnings: (hours * Number(hourlyRate)).toFixed(2),
      deleteButton: (
        <Button
          type='primary'
          onClick={() => {
            onDelete(timestamp)
          }}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      )
    }
  })
  return (
    <Table
      dataSource={deserialized}
      ref={tableRef}>
      {columns
        .filter(({ dataIndex }) => {
          if (w > 600) return true

          if (dataIndex === 'hourlyRate' || dataIndex === 'hours' || dataIndex === 'dueDate') return false
          return true
        })
        .map(({ title, shortTitle, dataIndex }) => (
          <Column
            title={w > 800 ? title : shortTitle}
            key={dataIndex}
            dataIndex={dataIndex}
          />
        ))}
    </Table>
  )
}
export default ProjectTable
