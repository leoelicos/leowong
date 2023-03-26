import useTitle from '../../hooks/useTitle'
import useFavicon from '../../hooks/useFavicon'

export default function JustKidding() {
  useTitle('Kiddin')
  useFavicon('/favicons/kiddin.png')
  return <div>JustKidding</div>
}
