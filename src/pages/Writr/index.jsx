import useFavicon from '../../hooks/useFavicon'

export default function Writr() {
  useTitle('Writr')
  useFavicon('favicons/writr.png')
  return (
    <div>
      <p>NoteTaker</p>
      <a
        href='https://leoelicos-note-taker.herokuapp.com/'
        target='_blank'
        rel='noreferrer'>
        Deployed
      </a>
    </div>
  )
}
