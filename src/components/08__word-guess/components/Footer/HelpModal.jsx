import { Modal, Button } from 'antd'
const HelpModal = ({ handleClickModalOk, handleClickModalCancel, isModalOpen }) => (
  <Modal
    maskStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    title={
      <section style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Limelight, cursive', color: '#ffff98' }}>
          <span style={{ fontSize: '3.7rem', margin: '0', padding: '0' }}>KIDDLE</span>
          <br />
          instructions
        </h1>
      </section>
    }
    centered
    open={isModalOpen}
    okType={'danger'}
    onOk={handleClickModalOk}
    onCancel={handleClickModalCancel}
    footer={
      <Button
        key='ok'
        type='primary'
        onClick={handleClickModalOk}>
        OK
      </Button>
    }
    bodyStyle={{ fontFamily: 'Montserrat, sans-serif' }}>
    <p>
      Click <button className='modal-start-button'>Start</button> to play.
      <br />
      Type the letters to guess the word before the timer hits 0!
    </p>
  </Modal>
)
export default HelpModal
