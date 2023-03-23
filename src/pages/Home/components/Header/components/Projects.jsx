import Project from './Project.jsx'
import projects from '../data/projects.jsx'
export default function Projects() {
  return (
    <div className='centered'>
      {projects.map((p) => (
        <Project
          key={p.title}
          title={p.title}
          description={p.description}
          deployedURL={p.deployedURL}
          repoURL={p.repoURL}
          imageURL={p.imageURL}
        />
      ))}
    </div>
  )
}
