const Description = ({ app }) => {
  console.log({ app })
  const {
    title,
    description,
    userStory,
    businessRequirements,
    frontEndTech,
    backEndTech //
  } = app

  return (
    <PageWrapper>
      <SectionWrapper>{title}</SectionWrapper>
      <SectionWrapper>{description}</SectionWrapper>
      <SectionWrapper>{userStory}</SectionWrapper>
      <SectionWrapper>{businessRequirements}</SectionWrapper>
      <SectionWrapper>
        {frontEndTech.map((tech) => (
          <Tech
            key={tech}
            name={tech}
            background='white'
            color='black'
          />
        ))}
      </SectionWrapper>
      <SectionWrapper>
        {backEndTech.map((tech) => (
          <Tech
            key={tech}
            name={tech}
            background='black'
            color='white'
          />
        ))}
      </SectionWrapper>
    </PageWrapper>
  )
}
export default Description

function Tech({ name, background, color }) {
  console.log({ name, background, color })
  var style = {
    backgroundColor: background,
    color: color,
    padding: '0.5vmin 2vmin',
    borderRadius: '1vmin',
    fontFamily: "'Arial', sans-serif",
    fontSize: 'max(16px, 1vmin)',
    textAlign: 'center'
  }
  console.log({ style })
  return (
    <span
      key={name}
      style={style}>
      {name}
    </span>
  )
}

function SectionWrapper({ children }) {
  const style = {
    display: 'flex',
    gap: '1vmin',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return <div style={style}>{children}</div>
}

function PageWrapper({ children }) {
  const style = {
    backgroundColor: 'lightblue',
    display: 'flex',
    gap: '1vmax',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column nowrap',
    flex: '1',
    height: '100vh',
    width: '100%',
    overflowY: 'auto'
  }
  return <div style={style}>{children}</div>
}
