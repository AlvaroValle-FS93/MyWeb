import {NavLink} from 'react-router';
import './navbar.css'

export const MyNavbar = () => {
  return (
    <div className='navbar-component'>
        <nav className="navbar-container">
          <a href="#home" className='logo'>
              <img src="/av-icon.svg" alt="my logo" />
          </a>
          {/* <NavLink to='/' className='mynav-link'>Home</NavLink>
          <NavLink to='/about' className='mynav-link'>About</NavLink>
          <NavLink to='/portfolio' className='mynav-link'>Portfolio</NavLink>
          <NavLink to='/hobbies' className='mynav-link'>Hobbies</NavLink>
          <NavLink to='/contact' className='mynav-link'>Contact</NavLink> */}

          <div className="navigation-links">
            <a href="#home" className='mynav-link'>Home</a>
            <a href="#about" className='mynav-link'>About</a>
            <a href="#portfolio" className='mynav-link'>Portfolio</a>
            <a href="#contact" className='mynav-link'>Contact</a>
          </div>
      
          <div className='other-links'>
            <a href="/documents/cv.pdf" download>
              <img src="/images/icons/download.svg" alt="" />
              My Resume
            </a>
          </div>
        </nav>
    </div>
  )
}
