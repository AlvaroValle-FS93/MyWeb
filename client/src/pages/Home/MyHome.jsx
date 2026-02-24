import {Container, Row, Col} from 'react-bootstrap';
import './home.css';
import { Link } from 'react-router';

const MyHome = () => {
  return (
    <section id='home' className='home-component'>
      <Container xxl>
        <Row className='info-home'>
          <Col xs={12} md={4} className='photo-container'>
              <img className='profile-photo' src="/images/photos/profile_photo.png" alt="Photo of me" />
          </Col>

          <Col xs={12} md={6} className='text-info'>
          

              <div className="name-job">
                <h1>Hola! I'm <span>Álvaro</span>,</h1>
                <h2>
                  <span className='rotulo'>
                    <span>Full Stack Developer</span>
                    <span>Data Scientist</span>
                    <span>AI Integration</span>
                    <span>Automatization Specialist</span>
                  </span>
                </h2>
              </div>

              <p>I build full-stack Applications and help businesses develop scalable solutions using technologies such as <span>Node.js</span>, <span>Express</span>, <span>Django</span>, <span>SQL</span>, <span>React</span>, and <span>Python</span>. I focus on writing clean, efficient code and creating reliable systems that solve real-world problems.</p>
              <p>I also work as a <span>Data Analyst</span> and <span>Data Scientist</span>, using Python to analyze data, uncover insights, build predictive models, and support data-driven decision making.</p>

              <Row className="links-get-in-touch">
                <Col className='links-social-network'>
                  <a href="https://github.com/AlvaroValle-FS93" target='_blank'>
                    <img src="/images/icons/github-footer.svg" alt="github logo" />
                  </a>
                  <a href="https://www.linkedin.com/in/alvaro-valle-melgarejo/" target='_blank'>
                    <img src="/images/icons/linkedin-footer.svg" alt="linkedin logo" />
                  </a>
                  <a href="mailto:alvaro.valle.melga@hotmail.com">
                    <img src="/images/icons/email-footer.svg" alt="email logo" />
                  </a>
                </Col>

                <Col className='buttons'>
                  <a href='#contact' className='getInTouch text-center' >Get in Touch!</a>
                </Col>
              </Row>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default MyHome;