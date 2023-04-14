import { Modal, Button, ConfigProvider } from 'antd'

export default function KiddleModal({ handleClickModalOk, handleClickModalCancel, isModalOpen, children, title }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'hsl(25, 84%, 61%)',
          colorBgBase: '#ffff98',
          colorBgMask: 'rgba(0,0,0,0.8)',

          margin: 0,
          borderRadius: 0,
          colorText: 'black',
          fontFamily: 'Montserrat, sans-serif'
        }
      }}>
      <Modal
        width='max(min(100%,400px), 50vw)'
        title={
          <section>
            <h1
              style={{
                margin: 0,
                fontFamily: "'Arial', sans-serif",
                fontSize: 'max(32px, 8vmin)',
                textAlign: 'center'
              }}>
              {title}
            </h1>
          </section>
        }
        bodyStyle={{
          fontSize: 'max(64px, 8vmin)',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          textAlign: 'center'
        }}
        centered
        open={isModalOpen}
        okType={'danger'}
        onOk={handleClickModalOk}
        onCancel={handleClickModalCancel}
        footer={
          <Button
            size='large'
            key='ok'
            type='primary'
            onClick={handleClickModalOk}
            style={{
              fontFamily: "'Arial', sans-serif",
              fontSize: 'max(32px, 4vmin)',
              width: 'fit-content',
              height: 'fit-content'
            }}>
            OK
          </Button>
        }>
        {children}
      </Modal>
    </ConfigProvider>
  )
}
