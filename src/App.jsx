
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

export const DataContext = createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [dataCourses, setDataCours] = useState({})
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
            <Route path='/' element={<Accueil />} />
            <Route path='/All' element={<AllNote />} />
            <Route path='/Travaux' element={<AddEpreuves />} />
            <Route path='/Edit' element={<AjoutEpreuve />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  )
}
export default App
