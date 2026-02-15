import {Container, Row, Col} from 'react-bootstrap';
import './home.css';

const MyHome = () => {
  return (
    <div className='home-component'>
      <Container className='xxl'>
        <Row>
          <Col className='info-home'>
            <div className="title-photo">
              <div className="name-job">
                <h1>Hola! I'm <span>Álvaro</span>,</h1>
                <h2>Software Developer & Data Scientist</h2>
              </div>
              <img src="/images/photos/profile_photo.png" alt="Photo of me" />
            </div>
            <div className="technologies-images">
              <img src="/images/TechnologiesLogos/python.svg" alt="" />
              <img src="/images/TechnologiesLogos/logo_dark.svg" alt="" />
              <img src="/images/TechnologiesLogos/node.svg" alt="" />
              <img src="/images/TechnologiesLogos/sql.png" alt="" />
            </div>

            <p>I build full-stack <span>applications</span> and help businesses develop scalable solutions using technologies such as <span>Node.js</span>, <span>Express</span>, <span>Django</span>, <span>SQL</span>, <span>React</span>, and <span>Python</span>. I focus on writing clean, efficient code and creating reliable systems that solve real-world problems.</p>
            <p>I also work as a <span>data analyst</span> and <span>data scientist</span>, using Python to analyze data, uncover insights, build predictive models, and support data-driven decision making.</p>
            <div className='links-social-network'>
              <a href="https://github.com/AlvaroValle-FS93" target='_blank'>
                <img src="/images/icons/github.svg" alt="github logo" />
              </a>
              <a href="https://www.linkedin.com/in/alvaro-valle-melgarejo/" target='_blank'>
                <img src="/images/icons/linkedin.svg" alt="linkedin logo" />
              </a>
              <a href="mailto:alvaro.valle.melga@hotmail.com">
                <img src="/images/icons/mymail.svg" alt="email logo" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyHome;