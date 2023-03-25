import { Typography } from 'antd'

const { Text, Title } = Typography
function ProjectTrackerHeader({ time, showModal }) {
  const d = new Date(time)
  const timeString = d.toLocaleTimeString([], { hourCycle: 'h11', hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' })
  const dateString = d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })
  return (
    <div>
      <Title level={1}>Jobby</Title>
      <Title level={2}>
        Time&ensp;<span id='time-display'>{timeString}</span>
      </Title>
      <Title level={2}>
        Date&ensp;<span id='date-display'>{dateString}</span>
      </Title>
      <button onClick={showModal}>
        <Text>Add Project</Text>
      </button>
    </div>
  )
}
export default ProjectTrackerHeader
