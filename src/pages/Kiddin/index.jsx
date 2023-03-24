import useTitle from '../../hooks/useTitle'
import useFavicon from '../../hooks/useFavicon'

export default function JustKidding() {
  useTitle('Kiddin')
  useFavicon('/favicons/27-favicon.png')
  return <div>JustKidding</div>
}
