import { Table } from 'antd'
const { Column } = Table

function ProjectTable({ data }) {
  return (
    <Table dataSource={data}>
      <Column
        title='Project Name'
        dataIndex='projectName'
        key='projectName'
      />
      <Column
        title='Project Type'
        dataIndex='projectType'
        key='projectType'
      />
      <Column
        title='Hourly Rate'
        dataIndex='hourlyRate'
        key='hourlyRate'
      />
      <Column
        title='Due Date'
        dataIndex='dueDate'
        key='dueDate'
      />

      <Column
        title='Days until Due Date'
        dataIndex='daysUntilDueDate'
        key='daysUntilDueDate'
      />
      <Column
        title='Potential total Earnings ($)'
        dataIndex='potentialEarnings'
        key='potentialEarnings'
      />
    </Table>
  )
}
export default ProjectTable
