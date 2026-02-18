import { MyNavbar } from '../components/MyNavbar/MyNavbar'
import { Outlet } from 'react-router'
import { MyFooter } from '../components/MyFooter/MyFooter';
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
        <MyFooter/>
      </footer>
    </div>
  )
}
