
import './App.css'
import { useState } from 'react';
import Accueil from './pages/Accueil';
import Admin from './pages/Admin';
import AjoutEpreuve from './pages/btnAjoutEpreuve';
import AllNote from './pages/AllNote';
// import Auth from './pages/Auth';
import AddEpreuves from './pages/AddEpreuves';
import Cours from './pages/cours';
import Home from './pages/home';
import RegisterForm from './pages/register';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { createContext } from "react"
import Login from './pages/Login';
import Dashboard from './components/DashBoard';
import Hiro from './pages/hiro';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
export const DataContext = createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataUser, setDataUser] = useState({})

  return (
    <>
      <DataContext.Provider value={{ isLoggedIn, setIsLoggedIn, dataUser, setDataUser }} key={uuidv4()}>
        <BrowserRouter>
          <Routes>

            <Route path='/stat' element={<Home />} />
            <Route path="/cours/:id" element={<Cours />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/home' element={<Accueil />} />
            <Route path='/All' element={<AllNote />} />
            <Route path='/Travaux' element={<AddEpreuves />} />
            <Route path='/Edit' element={<AjoutEpreuve />} />
            <Route path='/epreuves/:id' element = {<Dashboard/>}></Route>
            <Route path='/' element={<Hiro/>}></Route>

          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  )
}
export default App

const AuthGuard = ({ element, redirectPath }) => {
  const isAuthenticated = false; // Mettez votre logique d'authentification ici

  if (isAuthenticated) {
    return element;
  } else {
    return <Navigate to={redirectPath} replace />;
  }
};

AuthGuard.propTypes = {
  element: PropTypes.element.isRequired, // Modifier le type ici
  redirectPath: PropTypes.string.isRequired,
};



{/* <Route path='/stat' element={<Home />} />
            <Route path="/cours/:id" element={<Cours />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/home' element={<Accueil />} />
            <Route path='/All' element={<AllNote />} />
            <Route path='/Travaux' element={<AddEpreuves />} />
            <Route path='/Edit' element={<AjoutEpreuve />} />
            <Route path='/epreuves/:id' element = {<Dashboard/>}></Route>
            <Route path='/' element={<Hiro/>}></Route> */}


{/* <AuthGuard
              path="/Admin"
              element={<Admin />}
              redirectPath="/home"
            /> */}





{/* <Route path="/" element={<Hiro />} />

            <Route
              path="/stat"
              element={<AuthGuard element={<Home />} redirectPath="/home" />}
            />

            <Route
              path="/cours/:id"
              element={<AuthGuard element={<Cours />} redirectPath="/home" />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/home" element={<Accueil />} />
            <Route path="/All" element={<AllNote />} />
            <Route path="/Travaux" element={<AddEpreuves />} />
            <Route path="/Edit" element={<AjoutEpreuve />} />
            <Route path="/epreuves/:id" element={<Dashboard />} /> */}