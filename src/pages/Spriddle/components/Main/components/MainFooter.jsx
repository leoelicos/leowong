const MainFooter = ({ children }) => {
  const style = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return <footer style={style}>{children}</footer>
}
export default MainFooter
