const Project = ({ title, description, deployedURL, repoURL, imageURL }) => {
  return (
    <section className='project-wrapper'>
      <section className='content'>
        <h2>{title}</h2>
        <h3>{description}</h3>

        <div className='code-links'>
          <a
            href={repoURL}
            target='_blank'
            rel='noreferrer'
            className='repo'>
            🧩code
          </a>
          <a
            href={deployedURL}
            target='_blank'
            rel='noreferrer'
            className='deployed'>
            ❇️ app
          </a>
        </div>
        <a
          className='anchor-past-project'
          target='_blank'
          rel='noreferrer'
          href={deployedURL}>
          <img
            className='content-image'
            src={imageURL}
            alt='Kiddle game'
          />
        </a>
      </section>
    </section>
  )
}

export default Project
