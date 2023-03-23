const Keyboard = ({ children }) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '200px',
    maxWidth: '500px',
    margin: '0 auto'
  }
  return <div style={style}>{children}</div>
}
export default Keyboard
