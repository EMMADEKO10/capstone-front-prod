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

    // const { isExamenOpen, setIsExamenOpen } = useContext(RubriqueContext);

    
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isInterroOpen, setIsInterroOpen] = useState(false);
    const [isExamenOpen, setIsExamenOpen] = useState(false);
    // const [isDevoirOpen, setIsDevoirOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

     function FermetureExamen() {
        setIsExamenOpen(false)
    }


    // Définition de la fonction updateExamenDataAll
    // const updateExamenDataAll = (data) => {
    //     setExamenDataAll(data);
    // };
    return (
        <>
            <RubriqueContext.Provider value={{ isExamenOpen, setIsExamenOpen }} key={uuidv4()}> 
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
                        {/* <button onClick={FermetureExamen} type="button" className="lg:mr-[650px] lg:ml-[300px]  ml-10 inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs mb-4">+ Ajouter</button> */}
                        <button onClick={FermetureExamen} type="button" className="lg:mr-[650px] lg:ml-[300px] w-[120px] p-[10px]  ml-10 inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs mb-4">Soumettre</button>

                </div>
            </div>

            {/* <div>
                
            </div> */}
            </RubriqueContext.Provider> 
        </>
    )
}
const Modal = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInterroOpen, setIsInterroOpen] = useState(false);
    const { isExamenOpen, setIsExamenOpen } = useContext(RubriqueContext);
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
                <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-60">
                    <div className="bg-white rounded-lg shadow-lg p-10">
                        <h2 className="text-lg font-bold mb-4">Ajouter une épreuve</h2>
                        <ul className="divide-y divide-gray-200">
                            <li className="flex items-center py-3 cursor-pointer hover:bg-gray-100" onClick={toggleInterro}>
                                {/* <RiQuestionFill className="text-purple-700 mr-2" /> */}
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
                        {/* <h2 className="text-lg font-bold mb-4">Ajouter un examen</h2> */}
                        {/* <form onSubmit={handleExamSubmit}>
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
                        </form> */}
                        <ExamForm />
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


            {/* <Dashboard /> */}

            {/* <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md">
                <img className="w-full h-56 object-cover object-center" src="https://via.placeholder.com/350x200" alt="Placeholder" />
                <div className="p-6">
                    <h2 className="text-lg font-semibold mb-2">Titre de la carte</h2>
                    <p className="text-gray-600">Description de la carte. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="mt-4 flex justify-end">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Bouton</button>
                    </div>
                </div>
            </div> */}

            <AffichageDesCours />
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



// const Dashboard = () => {
//     const [questions, setQuestions] = useState([
//         {
//             question: 'Quelle est votre couleur préférée ?',
//             type: 'choice',
//             isMultiple: false,
//             choices: ['Bleu', 'Rouge', 'Vert'],
//         },
//         {
//             question: 'Quels sont vos loisirs ?',
//             type: 'multipleChoice',
//             isMultiple: true,
//             choices: ['Lecture', 'Sport', 'Voyage', 'Cuisine'],
//         },
//     ]);

//     // const handleChoicesChange = (e, index) => {
//     //     // Ajoutez ici la logique pour gérer les changements de choix
//     // };

//     return (
//         <div className="p-8">
//             {/* Section pour afficher les questions */}
//             <div className="mt-8">
//                 <h3 className="text-lg font-bold mb-4">Questions créées</h3>
//                 <ul className="divide-y divide-gray-200">
//                     {questions.map((q, index) => (
//                         <li key={index} className="py-4">
//                             <p className="font-semibold">{q.question}</p>
//                             {q.type === 'choice' && (
//                                 <ul className="ml-4 mt-2">
//                                     {q.choices.map((choice, i) => (
//                                         <li key={i} className="flex items-center">
//                                             <input
//                                                 type={q.isMultiple ? 'checkbox' : 'radio'}
//                                                 name={`choice-${index}`}
//                                                 value={choice}
//                                                 // onChange={(e) => handleChoicesChange(e, i)}
//                                                 className="form-checkbox h-5 w-5 text-blue-600"
//                                             />
//                                             <label className="ml-2">{choice}</label>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                             {q.type === 'multipleChoice' && (
//                                 <ul className="ml-4 mt-2">
//                                     {q.choices.map((choice, i) => (
//                                         <li key={i} className="flex items-center">
//                                             <input
//                                                 type="checkbox"
//                                                 name={`multipleChoice-${index}`}
//                                                 value={choice}
//                                                 // onChange={(e) => handleChoicesChange(e, i)}
//                                                 className="form-checkbox h-5 w-5 text-blue-600"
//                                             />
//                                             <label className="ml-2">{choice}</label>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                             <p className="text-sm mt-1">
//                                 {q.isMultiple ? 'Choix multiples' : 'Choix unique'}
//                             </p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };







