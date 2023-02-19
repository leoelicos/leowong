const Iframe = ({ uri }) => {
  return (
    <iframe
      src={uri}
      style={{ border: 'none' }}
      width='100%'
      height='100%'
      title='Trailer'
      allowFullScreen='allowfullscreen'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
    />
  )
}

export default Iframe
