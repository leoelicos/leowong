import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Table } from 'antd'

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
function ProjectTable({ data, w, handleClickDelete }) {
  const now = new Date().getTime()
  const deserialized = data.map(({ timestamp, projectName, projectType, hours, hourlyRate, dueDate }) => ({
    projectName,
    projectType,
    hours,
    hourlyRate: hourlyRate.toFixed(2),
    dueDate: new Date(dueDate).toLocaleDateString(),
    daysUntilDueDate: Math.max(0, (new Date(dueDate).getTime() - now) / (1000 * 60 * 60 * 24)).toFixed(0),
    potentialEarnings: (hours * Number(hourlyRate)).toFixed(2),
    deleteButton: (
      <Button
        type='primary'
        onClick={() => {
          handleClickDelete(timestamp)
        }}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    )
  }))
  return (
    <Table dataSource={deserialized}>
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
