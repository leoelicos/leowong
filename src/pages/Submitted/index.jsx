import useTitle from '../../hooks/useTitle'
import useFavicon from '../../hooks/useFavicon'
export default function Submitted() {
  useTitle('submitted!')
  useFavicon('favicons/submitted.png')
  return <div>Submitted</div>
}
