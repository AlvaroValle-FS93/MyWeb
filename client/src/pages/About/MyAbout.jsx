import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import './about.css';

const MyAbout = () => {

  const [numStack, setNumStack] = useState();

  const changeStack = (num) => {
    setNumStack(num);
    num == numStack && setNumStack();
  }

  return (
    <section id='about' className='about-component'>
      <Container xxl>
        <div className="about">
          <div className='header-about'>
            <div className='title-section'>
              <img src="/images/icons/about-icon.svg" alt="about icon" />
              <h2 className='text-center'>About Me</h2>
            </div>
            <h5 className='text-center'>
              I turn ideas into digital products that boost productivity, enhance user experience, and drive smarter business decisions.
            </h5>
          </div>

          <Row className='about-info'>

            <Col xs={12} md={12} lg={5} className='column-about-1'>
              <div className='photo-container'>
                <img src="/images/photos/me-working.jpeg" alt="Photo of me working with a computer" />
              </div>
            </Col>

            <Col xs={12} md={12} lg={7} className='column-about-2'>
              <h6>Full Stack developer crafting powerful web apps using <span>React</span>, <span>Node (Express)</span>, <span>SQL</span>, and <span>Django</span>.</h6>
              <h6>Creating seamless and high-performance <span>native mobile applications</span> for real-world users.</h6>
              <h6>Leveraging <span>Data Science</span> with <span>Python</span> to transform raw data into actionable insights.</h6>
              <h6><span>Automating</span> business processes and optimizing workflows for <span>SEO</span>, efficiency, and growth.</h6>

              <div className='location-div'>
                <img src="/images/icons/world-icon.svg" alt="world icon" />
                <p><span>Location: Valencia, Spain • </span>Remote work or dispo for relocation </p>
              </div>

              <div className='stack'>
                <h4>Tech Stack</h4>
                <div className='stack-list'>
                  <div onClick={() => changeStack(1)} className='stack-part'>
                    <img src="/images/icons/front.svg" alt="" />
                    <p>Frontend</p>
                  </div>
                  <div onClick={() => changeStack(2)} className='stack-part'>
                    <img src="/images/icons/server.svg" alt="" />
                    <p>Server</p>
                  </div>
                  <div onClick={() => changeStack(3)} className='stack-part'>
                    <img src="/images/icons/db.svg" alt="" />
                    <p>Data Base</p>
                  </div>
                  <div onClick={() => changeStack(4)} className='stack-part'>
                    <img src="/images/icons/tools.svg" alt="" />
                    <p>Tools</p>
                  </div>
                </div>
                {numStack == 1 && <p>Html 5, CSS 3, React, React Native, Bootstrap, Tailwind</p>}
                {numStack == 2 && <p>Node.js, Django, Express</p>}
                {numStack == 3 && <p>SQL, NoSQL</p>}
                {numStack == 4 && <p>Git, Scrum, GitHub, VSC, Trello, Figma</p>}
              </div>

              <div className='languages'>
                <img src="/images/icons/languages.svg" alt="" />
                <div className='languages-list'>
                  <h4>Languages</h4>
                  <p>Spanish (native), french (native), english (professional proficiency), italian (professional proficiency)</p>
                </div>
              </div>


            </Col>

          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <a href='#portfolio' className='my-primary-button'>
                <p>View my projects</p>
                <img src="/images/icons/arrow.svg" alt="" />
              </a>
            </Col>
          </Row>
        </div>

        
      </Container>
    </section>
  )
}

export default MyAbout;