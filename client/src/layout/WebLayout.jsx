import { MyNavbar } from '../components/MyNavbar/MyNavbar'
import { Outlet } from 'react-router'
import './layoutWeb.css';

export const WebLayout = () => {
  return (
    <div className='layoutWeb'>
      <header>
        <MyNavbar/>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        Mi Footer
      </footer>
    </div>
  )
}
