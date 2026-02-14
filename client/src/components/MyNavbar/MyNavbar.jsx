import {NavLink} from 'react-router';
import './navbar.css'
import { MyButton } from '../MyButton/MyButton';

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
        </div>
    </div>
  )
}
