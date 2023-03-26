import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

export default function Clist() {
  useTitle('Clist')
  useFavicon('favicons/clist.png')
  return <div>Clist</div>
}
