import {BrowserRouter, Route, Routes} from 'react-router';
import { WebLayout } from '../layout/WebLayout';
import Privacy from '../pages/Privacy/Privacy';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
/* import MyHome from '../pages/Home/MyHome';
import MyAbout from '../pages/About/MyAbout';
import MyPortfolio from '../pages/MyPortfolio/MyPortfolio';
import MyHobbies from '../pages/MyHobbies.jsx/MyHobbies';
import ContactMe from '../pages/Contact/ContactMe'; */


export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Esto lo dejo comentado en caso de que queramos hacer navegación en vez de scroll */}
          <Route path='/' element={<WebLayout/>}>
            {/* <Route path='/' element={<MyHome/>}/>
            <Route path='/about' element={<MyAbout/>}/>
            <Route path='/portfolio' element={<MyPortfolio/>}/>
            <Route path='/hobbies' element={<MyHobbies/>}/>
            <Route path='/contact' element={<ContactMe/>}/> */}
          </Route>

          <Route path='/privacy' element={<Privacy />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
