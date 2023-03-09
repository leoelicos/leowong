const Main = ({ children }) => {
  const style = {
    flex: '1',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxWidth: '500px',
    width: '100%'
  }

  return <main style={style}>{children}</main>
}
export default Main
