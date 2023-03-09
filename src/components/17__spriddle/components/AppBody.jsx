const AppBody = ({ children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
    backgroundColor: '#eee'
  }

  return <div style={style}>{children}</div>
}
export default AppBody
