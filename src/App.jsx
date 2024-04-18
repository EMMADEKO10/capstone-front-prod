
import './App.css'
import Accueil from './pages/Accueil';
import Admin from './pages/Admin';
import AjoutEpreuve from './pages/AjoutEpreuve';
import AllNote from './pages/AllNote';
import Auth from './pages/Auth';
import Traveaux from './pages/Traveaux';
import Cours from './pages/cours';
import Home from './pages/home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { createContext } from "react"
import { useState } from 'react';
export const RubriqueContext = createContext(null);
function App() {

  const [isInterroOpen, setIsInterroOpen] = useState(false);
  const [isExamenOpen, setIsExamenOpen] = useState(false);
  const [isDevoirOpen, setIsDevoirOpen] = useState(false);

  return (
    <>
      <RubriqueContext.Provider value={{ isInterroOpen, setIsInterroOpen, isExamenOpen, setIsExamenOpen, isDevoirOpen, setIsDevoirOpen }} key={uuidv4()}>
      <BrowserRouter>
        <Routes>
          <Route path='/stat' element={<Home />} />
          <Route path='/cours' element={<Cours />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/' element={<Accueil />} />
          <Route path='/All' element={<AllNote />} />
          <Route path='/Travaux' element={<Traveaux />} />
          <Route path='/Edit' element={<AjoutEpreuve />} />       
        </Routes>
      </BrowserRouter>
      </RubriqueContext.Provider>
    </>
  )
}
export default App
