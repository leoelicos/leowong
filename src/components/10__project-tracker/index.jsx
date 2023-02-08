import ProjectTable from './components/ProjectTable'
import dummyData from './data/dummydata'
console.log({ dummyData })
export default function ProjectTracker() {
  return <ProjectTable data={dummyData} />
}
