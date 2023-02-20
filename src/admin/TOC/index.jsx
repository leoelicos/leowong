import list from '../../data/apps'
import { Link } from 'react-router-dom'
import './style/toc.css'
import { Button, Card, Col, Row } from 'antd'

function Toc() {
  const firstNotFinished = list.findIndex((p) => !p.finished)
  const finished = list.slice(0, firstNotFinished)
  const unfinished = list.slice(firstNotFinished)

  return (
    <div className='toc'>
      <div className='body'>
        <Cards
          r={finished}
          title='finished'
          finished={true}
        />

        <hr />
        <Cards
          r={unfinished}
          title='unfinished'
          finished={false}
        />
      </div>
    </div>
  )
}

const Cards = ({ r, title, finished }) => {
  const gap = { sm: 16, lg: 24 }
  return (
    <Row
      offset={0}
      gutter={[gap, gap]}
      style={{ width: '100%' }}>
      {r.map(({ name, link, finished }) => (
        <Col
          xs={24}
          sm={12} // >= 576
          md={12} // >= 768
          lg={8} // >= 992
          xl={6} // >= 1200
          xxl={4} // >= 1600
          key={name}>
          <Card
            title={name}
            className='grid-style'>
            <Button
              disabled={!finished}
              type='primary'
              block
              style={{ padding: 0, border: 'none' }}>
              <Link
                key={name}
                to={link}
                className={`link ${finished ? 'finished' : ''}`}
                style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {name.replace(' ', '\n')}
              </Link>
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Toc
