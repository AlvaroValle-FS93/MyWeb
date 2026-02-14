import {BrowserRouter, Route, Routes} from 'react-router';
import { WebLayout } from '../layout/WebLayout';
import MyHome from '../pages/Home/MyHome';
import MyAbout from '../pages/About/MyAbout';
import MyPortfolio from '../pages/MyPortfolio/MyPortfolio';
import MyHobbies from '../pages/MyHobbies.jsx/MyHobbies';
import ContactMe from '../pages/Contact/ContactMe';


export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<WebLayout/>}>
            <Route path='/' element={<MyHome/>}/>
            <Route path='/about' element={<MyAbout/>}/>
            <Route path='/portfolio' element={<MyPortfolio/>}/>
            <Route path='/hobbies' element={<MyHobbies/>}/>
            <Route path='/contact' element={<ContactMe/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
