import useFavicon from '../../hooks/useFavicon'
import useTitle from '../../hooks/useTitle'

export default function Cinem() {
  useTitle('Cinem')
  useFavicon('favicons/cinem.png')
  return <div>Cinem</div>
}
