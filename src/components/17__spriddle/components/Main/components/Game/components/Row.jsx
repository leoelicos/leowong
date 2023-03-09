const Row = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto 8px',
      touchAction: 'manipulation'
    }}>
    {children}
  </div>
)
export default Row
