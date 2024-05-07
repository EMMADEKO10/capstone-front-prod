import SideBar from "../components/SideBar"
import Rubrique from "../components/Rubrique"
import { useState } from "react";
// import { RiQuestionFill } from 'react-icons/ri';
import ExamForm from "../components/AjoutExamen";
import QuestionForm from "../components/QuestionForm";
import AffichageDesCours from "../components/AffichageDesCours";
import { createContext, useContext } from "react"
export const RubriqueContext = createContext(null);
import { v4 as uuidv4 } from 'uuid';


export default function AddEpreuves() {
    const [isExamenOpen, setIsExamenOpen] = useState(false);
    function FermetureExamen() {
        setIsExamenOpen(false)
    }
    return (
        <>
            <RubriqueContext.Provider value={{ isExamenOpen, setIsExamenOpen }} key={uuidv4()}>
                <nav className="bg-white shadow-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                {/* Logo ou titre de votre site */}
                                <span className="text-2xl font-bold text-fuchsia-800">SChool_Eva</span>
                            </div>
                            <div className="hidden sm:flex items-center">
                                {/* Liens de la NavBar */}
                                <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Home</a>
                                <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">About Us</a>
                                <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Sign In</a>
                                <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Sign Up</a>
                            </div>
                            <div className="flex sm:hidden items-center">
                                <button className="text-sm text-green-500 hover:text-green-600">Menu</button>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className='flex flex-row gap-2'>
                    <SideBar />
                    <div className="flex flex-col gap-2 w-[90%] ">
                        <Rubrique />
                        <Modal />
                        <button onClick={FermetureExamen} type="button" className="lg:mr-[650px] lg:ml-[300px] w-[120px] p-[10px]  ml-10 inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs mb-4">Soumettre</button>

                    </div>
                </div>
            </RubriqueContext.Provider>
        </>
    )
}
const Modal = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInterroOpen, setIsInterroOpen] = useState(false);
    const { isExamenOpen, setIsExamenOpen } = useContext(RubriqueContext);
    const [isDevoirOpen, setIsDevoirOpen] = useState(false);
    const [addQuestion, setAddQuestion] = useState(false);

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
                <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-60">
                    <div className="bg-white rounded-lg shadow-lg p-10">
                        <h2 className="text-lg font-bold mb-4">Ajouter une épreuve</h2>
                        <ul className="divide-y divide-gray-200">
                            <li className="flex items-center py-3 cursor-pointer hover:bg-gray-100" onClick={toggleInterro}>
                                <span>Interrogation</span>
                            </li>
                            <li className="flex items-center py-3 cursor-pointer hover:bg-gray-100" onClick={toggleExamen}>
                                <span>Examen</span>
                            </li>
                            <li className="flex items-center py-3 cursor-pointer hover:bg-gray-100" onClick={toggleDevoir}>
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
                        <ExamForm setAddQuestion={setAddQuestion} />
                        {addQuestion && (<QuestionForm />)}
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
            <AffichageDesCours />
        </div>
    );
};

