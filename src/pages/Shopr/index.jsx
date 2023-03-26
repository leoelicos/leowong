import useFavicon from '../../hooks/useFavicon'

export default function ReduxStore() {
  useTitle('Shopr')
  useFavicon('favicons/shopr.png')
  return <div>ReduxStore</div>
}
