export default function useData() {
  const [results, setResults] = useState({ results: [], searchText: '', searchFormat: '' })
  const [loading, setLoading] = useState(false)
  const [savedText, setSavedText] = useState('')
  const [savedFormat, setSavedFormat] = useState('')

  const queryResults = (text, format) => {
    setSavedText('')
    setSavedFormat('')
    setLoading(true)

    fetch(
      format === undefined //
        ? `https://loc.gov/search/?q=${text}&fo=json`
        : `https://loc.gov/${format}/?q=${text}&fo=json`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(
          data.results
            .map((d) => ({
              date: d.date || '',
              title: d.title || '',
              url: d.url || '',
              subject: d.subject || '',
              description: d.description || ''
            }))
            .slice(0, 2)
        )
        setSavedText(text)
        setSavedFormat(format)

        setLoading(false)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return { results, queryResults, loading, savedText, savedFormat }
}
