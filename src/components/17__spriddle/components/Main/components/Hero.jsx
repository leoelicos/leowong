const Hero = ({ children }) => {
  const style = {
    backgroundColor: 'transparent',
    borderRadius: '1rem',

    margin: '1rem',
    fontSize: '1.15rem',
    fontWeight: 'normal',
    fontFamily: 'monospace',
    color: '#000'
  }
  return <div style={style}>{children}</div>
}
export default Hero
