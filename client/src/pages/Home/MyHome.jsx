import {Container, Row, Col} from 'react-bootstrap';
import './home.css';

const MyHome = () => {
  return (
    <div className='home-component'>
      <Container className='xxl'>
        <Row>
          <Col className='info-home'>
            <h2>Álvaro Valle</h2>
            <h1>Software Developer</h1>
            <p>I help businesses and individuals transform ideas into solutions using technology. I develop scalable and maintainable software, from web applications to backend systems, and work with data to extract insights, build predictive models, and support smarter, data-driven decisions.</p>
          </Col>

          <Col className='technologies'>
            <Row>
              <Col className='d-flex justify-content-center align-items-center'>
                <img src="/images/TechnologiesLogos/logo_dark.svg" alt="react logo" />
              </Col>
              <Col className='d-flex align-items-center justify-content-center'>
                <img src="/images/TechnologiesLogos/node.svg" alt="node logo" />
              </Col>
            </Row>

            <Row>
              <Col className='d-flex align-items-center justify-content-center'>
                <img src="/images/TechnologiesLogos/python.svg" alt="python logo" />
              </Col>
              <Col className='d-flex justify-content-center align-items-center'>
                <img src="/images/TechnologiesLogos/sql.png" alt="mysql logo" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyHome;