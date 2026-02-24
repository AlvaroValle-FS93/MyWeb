import { useState } from 'react';
import {Navbar, Container, Nav, Dropdown, DropdownButton} from 'react-bootstrap';
import './navbar2.css';

const languages = {
  english: '🇬🇧 English',
  spanish: '🇪🇸 Español',
  french: '🇫🇷 Français',
  italian: '🇮🇹 Italiano'
}

export const MyNavbar2 = () => {

  const [active, setActive] = useState(1)
  const [lang, setLang] = useState('EN')
  const [title, setTitle] = useState('🇬🇧 English')
  const [theme, setTheme] = useState(true)
  console.log(lang);

  const changeLanguage = (lang, title) => {
    setLang(lang);
    setTitle(title);
  }

  return (
    <Navbar className='navbar-component' variant="dark" expand="lg" fixed="top">
      <Container className='container-navbar'>
        <Navbar.Brand className='title' href="#home"><span>Álvaro</span>Valle</Navbar.Brand>
        
        {/* Botón hamburguesa */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Menú colapsable */}
        <Navbar.Collapse className='collapse-navbar' id="basic-navbar-nav">
          <Nav className="links-navbar">
            <Nav.Link onClick={() => setActive(1)} className={active == 1 && `active`} href="#home">Home</Nav.Link>
            <Nav.Link onClick={() => setActive(2)} className={active == 2 && `active`} href="#about">About</Nav.Link>
            <Nav.Link onClick={() => setActive(3)} className={active == 3 && `active`} href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link onClick={() => setActive(4)} className={active == 4 && `active`} href="#contact">Contact</Nav.Link>
          </Nav>
            <Nav className='resume-toggle'>

              <DropdownButton className='dropdown-btn' id="dropdown-basic-button" title={`${title}`}>
                <Dropdown.Item onClick={() => changeLanguage('EN', languages.english)}>{languages.english}</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('ES', languages.spanish)}>{languages.spanish}</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('FR', languages.french)}>{languages.french}</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('IT', languages.italian)}>{languages.italian}</Dropdown.Item>
              </DropdownButton>

              {
              theme ?
              <div className='theme-button' onClick={() => setTheme(false)}>
                <img src="/images/icons/light.svg" alt="light mode icon" />
              </div>
              :
              <div className='theme-button' onClick={() => setTheme(true)}>
                <img src="/images/icons/dark.svg" alt="dark mode icon" />
              </div>
              }

              <Nav.Link className='curriculum' href='/documents/cv.pdf' download>
                <img src="/images/icons/download.svg" alt="" />
                <p>My Resume</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
