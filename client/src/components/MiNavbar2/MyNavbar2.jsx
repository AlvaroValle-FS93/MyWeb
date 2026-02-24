import { useState } from 'react';
import {Navbar, Container, Nav, Dropdown, DropdownButton} from 'react-bootstrap';
import './navbar2.css';

export const MyNavbar2 = () => {

  const [active, setActive] = useState(1)

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

              <DropdownButton className='dropdown-btn' id="dropdown-basic-button" title="English">
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Español</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Français</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Italiano</Dropdown.Item>
              </DropdownButton>
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
