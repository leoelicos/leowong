/* AntD components */
import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'

/* custom components */
import ProjectTrackerHeader from './components/ProjectTrackerHeader'
import ProjectTable from './components/ProjectTable'
import HelpModal from './components/HelpModal'

/* custom hooks */
import useTime from './hooks/useTime'
import useData from './hooks/useData'
import useModal from './hooks/useModal'

export default function ProjectTracker() {
  /* time */
  const time = useTime()

  /* data and data methods */
  const { data, addProject, deleteProject } = useData()

  /* modal and modal methods */
  const { modal, showModal, hideModal } = useModal()

  const headerStyle = { height: '300px', background: '#eee', display: 'flex', justifyContent: 'center', textAlign: 'center' }

  return (
    <Layout>
      <Header style={headerStyle}>
        <ProjectTrackerHeader
          time={time}
          showModal={showModal}
        />
      </Header>
      <Layout>
        <Content>
          <ProjectTable
            data={data}
            onDelete={deleteProject}
          />
        </Content>
      </Layout>
      <HelpModal
        modal={modal}
        onAdd={addProject}
        hideModal={hideModal}
      />
    </Layout>
  )
}
