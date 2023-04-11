import { Modal, Button, ConfigProvider } from 'antd'
const HelpModal = ({ handleClickModalOk, handleClickModalCancel, isModalOpen }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: 'hsl(25, 84%, 61%)',
        colorBgBase: '#ffff98',
        colorBgMask: 'rgba(0,0,0,0.8)',

        margin: 0,
        borderRadius: 0,
        colorText: 'black',
        fontFamily: "'Montserrat', sans-serif",
        paddingContentHorizontal: '4px'
      }
    }}>
    <Modal
      title={
        <section>
          <h1
            style={{
              margin: 0,
              fontFamily: 'Limelight, cursive',
              fontSize: '2rem',
              textAlign: 'center'
            }}>
            KIDDLE
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
      }>
      <p>
        Click <button>Start</button> to play.
        <br />
        Type the letters to guess the word before the timer hits 0!
      </p>
    </Modal>
  </ConfigProvider>
)
export default HelpModal
