import SideBar from "../components/SideBar"
import Rubrique from "../components/Rubrique"
import { useState } from "react";
import { RiQuestionFill } from 'react-icons/ri';
import QuestionForm from "../components/QuestionForm";
// import { RiQuestionFill, RiExamFill, RiFileTextFill } from 'react-icons/ri';
// import { RiExamFill} from 'react-icons/ri';
// import { RiFileTextFill } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import { createContext } from "react"

export const RubriqueContext = createContext(null);

export default function Traveaux() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isInterroOpen, setIsInterroOpen] = useState(false);
    const [isExamenOpen, setIsExamenOpen] = useState(false);
    const [isDevoirOpen, setIsDevoirOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
          {/* <RiQuestionFill className="text-purple-700 mr-2" /> */}
          <RubriqueContext.Provider value={{ isInterroOpen, setIsInterroOpen, isExamenOpen, setIsExamenOpen, isDevoirOpen, setIsDevoirOpen }} key={uuidv4()}>

         
          <nav className="bg-white shadow-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                      <div className="flex items-center">
                          {/* Logo ou titre de votre site */}
                          <span className="text-2xl font-bold text-fuchsia-800">MonSite</span>
                      </div>
                      <div className="hidden sm:flex items-center">
                          {/* Liens de la NavBar */}
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Home</a>
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">About Us</a>
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Sign In</a>
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Sign Up</a>
                      </div>
                      <div className="flex sm:hidden items-center">
                          {/* Bouton de menu pour les écrans mobiles */}
                          <button className="text-sm text-green-500 hover:text-green-600">Menu</button>
                      </div>
                  </div>
              </div>
          </nav>

          <div className='flex flex-row gap-2'>
              <SideBar />
              {/* <RubriqueContext.Provider value={{ isHomeOpen, setIsHomeOpen }} key={uuidv4()}> */}
              <div className="flex flex-col gap-2 w-[90%] ">
                  <Rubrique />
                  <Modal />
                  <button onClick={toggleMenu} type="button" className="lg:mr-[650px] lg:ml-[300px]  ml-10 inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs mb-4">+ Ajouter</button>
                  {isMenuOpen && (
                      <div className="absolute text-sm lg:top-[170px]  top-[160px] lg:w-[400px] w-[360px]  ml-10 lg:ml-[200px]  bg-white shadow-lg rounded-lg">
                          <ul className="divide-y divide-gray-200">
                              <li className="flex items-center lg:p-4 py-3 px-4 cursor-pointer hover:bg-gray-100">
                                  {/* <RiQuestionFill className="text-purple-700 mr-2" /> */}
                                  <img src="" alt="" />
                                  <span>Interrogation</span>
                              </li>
                              <li className="flex items-center lg:p-4 py-3 px-4 cursor-pointer hover:bg-gray-100">
                                  {/* <RiExamFill className="text-pink-700 mr-2" /> */}
                                  <img src="" alt="" />

                                  <span>Examen</span>
                              </li>
                              <li className="flex items-center lg:p-4 py-3 px-4 cursor-pointer hover:bg-gray-100">
                                  {/* <RiFileTextFill className="text-blue-700 mr-2" /> */}
                                  <img src="" alt="" />

                                  <span>Devoir</span>
                              </li>
                          </ul>
                      </div>
                  )}
              </div>
              {/* </RubriqueContext.Provider> */}
          </div>
          
          </RubriqueContext.Provider>

    </>
  )
}



const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInterroOpen, setIsInterroOpen] = useState(false);
    const [isExamenOpen, setIsExamenOpen] = useState(false);
    const [isDevoirOpen, setIsDevoirOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleInterro = () => {
        setIsInterroOpen(!isInterroOpen);
        setIsModalOpen(false); // Fermer le modal global après avoir sélectionné une rubrique
    };

    const toggleExamen = () => {
        setIsExamenOpen(!isExamenOpen);
        setIsModalOpen(false); // Fermer le modal global après avoir sélectionné une rubrique
    };

    const toggleDevoir = () => {
        setIsDevoirOpen(!isDevoirOpen);
        setIsModalOpen(false); // Fermer le modal global après avoir sélectionné une rubrique
    };

    return (
        <div className="text-sm">
            <button onClick={toggleModal} type="button" className="lg:mr-[650px] lg:ml-[300px]  ml-10 inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs mb-4">+ Ajouter</button>
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
                    <div className="bg-white rounded-lg shadow-lg p-10">
                        <h2 className="text-lg font-bold mb-4">Ajouter une épreuve</h2>
                        <ul className="divide-y divide-gray-200">
                           <li className="flex items-center py-3 cursor-pointer hover:bg-gray-100" onClick={toggleInterro}>
                                <RiQuestionFill className="text-purple-700 mr-2" />
                                <span>Interrogation</span>
                            </li>
                            <li className="flex items-center py-3 cursor-pointer hover:bg-gray-100" onClick={toggleExamen}>
                                {/* <RiExamFill className="text-pink-700 mr-2" /> */}
                                <span>Examen</span>
                            </li>
                            <li className="flex items-center py-3 cursor-pointer hover:bg-gray-100" onClick={toggleDevoir}>
                                {/* <RiFileTextFill className="text-blue-700 mr-2" /> */}
                                <span>Devoir</span>
                            </li>
                            
                        </ul>
                        <button onClick={toggleModal} className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-semibold rounded-md shadow-md">Fermer</button>
                    </div>
                </div>
            )}
            {isInterroOpen && (
                // Affichez le contenu spécifique pour l'interrogation ici
                <div className="fixed inset-0 w-full flex justify-center items-center bg-black bg-opacity-40">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-lg font-bold mb-4">Ajouter une interrogation</h2>
                        {/* Ajoutez les champs de saisie et les boutons pour créer une interrogation */}
                        <button onClick={toggleInterro} className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-semibold rounded-md shadow-md">Fermer</button>
                    </div>
                </div>
            )}
            {isExamenOpen && (
                <div className="inset-0 flex justify-center items-center bg-black bg-opacity-40">
                    <div className="bg-white w-full h-full max-h-screen overflow-y-auto p-8">
                        <h2 className="text-lg font-bold mb-4">Ajouter un examen</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="titre" className="block text-sm font-semibold text-gray-700 mb-2">Titre de lexamen</label>
                                <input type="text" id="titre" name="titre" className="px-4 py-2 border border-gray-300 rounded-md w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Date de lexamen</label>
                                <input type="date" id="date" name="date" className="px-4 py-2 border border-gray-300 rounded-md w-full" />
                                <h2>Ajouter à partir de Google Forms <a href="https://docs.google.com/forms/u/0/" target="_blank"><img src="src/assets/google-forms (2).png" alt="Google Forms" /></a></h2>
                            </div>
                            <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md shadow-md">Enregistrer</button>
                        </form>
                        <QuestionForm />
                        <button onClick={toggleExamen} className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-semibold rounded-md shadow-md">Fermer</button>
                    </div>
                </div>
            )}
            {isDevoirOpen && (
                // Affichez le contenu spécifique pour le devoir ici
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-lg font-bold mb-4">Ajouter un devoir</h2>
                        {/* Ajoutez les champs de saisie et les boutons pour créer un devoir */}
                        <button onClick={toggleDevoir} className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-semibold rounded-md shadow-md">Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};


//     return (
//         <div className="flex flex-col gap-2 w-[90%] ">
//             <Rubrique />
//             <button
//                 type="button"
//                 className="mr-[650px] ml-[300px] inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs mb-4"
//                 onClick={toggleMenu}
//             >
//                 + Ajouter
//             </button>
//             {isMenuOpen && (
//                 <div className="bg-white shadow-lg rounded-lg">
//                     <ul className="divide-y divide-gray-200">
//                         <li className="py-3">Interrogation</li>
//                         <li className="py-3">Examen</li>
//                         <li className="py-3">Devoir</li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// }






