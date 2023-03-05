const Main = ({ children }) => {
  const mainStyle = {
    background: '#eee',
    flex: 1
  }
  return <div style={mainStyle}>{children}</div>
}
export default Main
