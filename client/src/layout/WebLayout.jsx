// import { MyNavbar } from '../components/MyNavbar/MyNavbar'
// import { Outlet } from 'react-router'
import { MyFooter } from '../components/MyFooter/MyFooter';
import MyHome from '../pages/Home/MyHome';
import MyAbout from '../pages/About/MyAbout';
import MyPortfolio from '../pages/MyPortfolio/MyPortfolio';
import ContactMe from '../pages/Contact/ContactMe';
import './layoutWeb.css';
import { MyNavbar2 } from '../components/MiNavbar2/MyNavbar2';

export const WebLayout = () => {
  return (
    <div className='layoutWeb'>
      <header>
        <MyNavbar2/>
        {/* <MyNavbar/> */}
      </header>

      <main>
        <MyHome/>
        <MyAbout/>
        <MyPortfolio/>
        <ContactMe/>
      </main>

      <footer>
        <MyFooter/>
      </footer>
    </div>
  )
}
