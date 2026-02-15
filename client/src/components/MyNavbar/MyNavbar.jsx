import {NavLink} from 'react-router';
import './navbar.css'

export const MyNavbar = () => {
  return (
    <div className='navbar-component'>
        <div className="navbar-container">
          <div className='logo'>
            {/* Mi logo aquí */}
            <img src="/vite.svg" alt="" />
          </div>
          <NavLink to='/' className='mynav-link'>Home</NavLink>
          <NavLink to='/about' className='mynav-link'>About</NavLink>
          <NavLink to='/portfolio' className='mynav-link'>Portfolio</NavLink>
          <NavLink to='/hobbies' className='mynav-link'>Hobbies</NavLink>
          <NavLink to='/contact' className='mynav-link'>Contact</NavLink>
          <div className='other-links'>
            <a href="/documents/cv.pdf" download>
              <img src="/images/icons/download.svg" alt="" />
              My Resume
            </a>
          </div>
        </div>
    </div>
  )
}
