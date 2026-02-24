import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import './footer.css';

export const MyFooter = () => {

  let date = new Date();
  date = date.toDateString({
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className='footer-component'>
      <Container className='xxl'>
        <Row className='pb-2'>
          <Col className='title'>
            <h3>Alvaro Valle</h3>
            <h5>Full Stack Developer, Data Scientist & Automatization Specialist </h5>
            <p>Valencia, Spain</p>
          </Col>
          <Col className='links'>
            {/* <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/portfolio'>Portfolio</Link>
            <Link className='link' to='/hobbies'>Hobbies</Link>
            <Link className='link' to='/contact'>Contact</Link> */}
            <a href="#home" className='link'>Home</a>
            <a href="#about" className='link'>About</a>
            <a href="#portfolio" className='link'>Portfolio</a>
            <a href="#contact" className='link'>Contact me</a>
          </Col>
          <Col className='contact'>
            <a target='_blank' href='https://www.linkedin.com/in/alvaro-valle-melgarejo/'>
              <div className='contact-icon'>
                <img src="/images/icons/linkedin-footer.svg" alt="" />
              </div>
            </a>
            <a target='_blank' href='https://github.com/AlvaroValle-FS93'>
              <div className='contact-icon'>
                <img src="/images/icons/github-footer.svg" alt="" />
              </div>
            </a>
            <a target='_blank' href='mailto:alvaro.valle.melga@hotmail.com'>
              <div className='contact-icon'>
                <img src="/images/icons/email-footer.svg" alt="" />
              </div>
            </a>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className='copy-right'>
            <p>© 2026 Álvaro. Todos los derechos reservados. Diseñado y desarrollado por Álvaro.</p>
          </Col>
          <Col className='policy'>
            <Link to='/privacy' className='priv-terms'>Privacy</Link>
            <p>•</p>
            <Link className='priv-terms'>Terms</Link>
          </Col>
          <Col className='date'>
            <p>{date}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
