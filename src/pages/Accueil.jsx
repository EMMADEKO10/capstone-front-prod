import SideBar from "../components/SideBar"
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect, createContext, } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Loading from 'react-loading';
import AddCourseModal from "../../modal/AddCoursModal";
import PropTypes from 'prop-types';

export const RubriqueContext = createContext(null);

export default function Accueil() {

    const [DataInit, setDataInit] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [Data, setData] = useState(null)
    const [showModal, setShowModal] = useState(false); // État pour gérer l'ouverture du modal
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [allCourseUserEnrolled, setAllCourseUserEnrolled] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    // const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedCourseImage,setSelectedCourseImage] = useState(null);

    const utilisateurStocke = JSON.parse(sessionStorage.getItem('utilisateur'));

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/api',
        headers: {
            Authorization: `Bearer ${utilisateurStocke.token}`,
        },
    });

    useEffect(() => {
        if (!utilisateurStocke.token) {
            return <Navigate to="/login" />;
        }
        const fetchData = async () => {

            try {
                const response = await axiosInstance.get(
                    "/cours"
                );
                setDataInit(response.data); // Update state after successful fetch
                setData(response.data);
            } catch (error) {
                console.error("Error fetching tweets:", error);
            }
        };
        fetchData(); // Call the function to fetch data
    }, [utilisateurStocke.token, axiosInstance], [Data]); // Empty dependency array ensures the effect runs only once

    // -----------------------------------------------------------------------------------

    useEffect(() => {
        const checkEnrollment = async () => {
            try {

                const response = await axios.get(`http://localhost:3000/api/CourseEnrollment/${utilisateurStocke.user.id}`);

                setAllCourseUserEnrolled(response.data);
                
            } catch (error) {
                console.error('Erreur lors de la vérification de l\'enrôlement :', error);
            }
        }
        checkEnrollment();
    }, [allCourseUserEnrolled, utilisateurStocke, setAllCourseUserEnrolled], []);
    // ----------------------------------------------------------------------
    if (!DataInit) {
        return (
            <div className="timeline flex justify-center items-center w-[650px]">
                <Loading type="spin" color="#004a99" height={50} width={50} />
            </div>
        );
    }

    return (
        <>
            <NavBar />
            <div className='flex flex-row gap-2'>
                <SideBar />

                <div className="flex flex-col  w-[90%] ">
                    <div className="flex flex-row flex-wrap gap-6">
                        {allCourseUserEnrolled.map((enrollment) => (
                            <div key={enrollment.Cours.course_id} className="mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2 items-center pl-20 pb-20">
                                <Link to={`http://localhost:5173/Cours/${enrollment.Cours.course_id}`}>
                                    {/* <div className="cours absolute w-[100%] h-[75%] top-0 right-0 left-0 rounded-2xl" style={{ backgroundImage: `url(${selectedCourseImage})` }}></div> */}
                                    <div className="cours absolute w-[100%] h-[75%] top-0 right-0 left-0 rounded-2xl" style={{ backgroundImage: `url(${enrollment.Cours.background})` }}></div>
                                    {/* <div className="cours absolute w-[100%] h-[75%] top-0 right-0 left-0 rounded-2xl" style={{ backgroundImage: `url("public/image/background_cours/home-page-banner-small.jpg")` }}></div> */}
                                </Link>
                                <div className="absolute bottom-0 left-0 mb-0 p-2 w-[100%] h-[25%] flex flex-row justify-between text-center content-center">
                                    <p className="font-sans font-semibold leading-normal text-gray-500 text-[26px]">{enrollment.Cours.course_name}</p>
                                    <div  className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                        <img className="w-full h-full object-cover" src="src/assets/femme-bulle-dialogue-montrant-visage-souriant-sueur-froide-emoji.jpg" alt="Avatar" />
                                    </div>
                                    <div onClick={() => { setSelectedCourseId(enrollment.Cours.course_id), setModalIsOpen(true); }} className="flex items-center">
                                        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-gray-500 rounded-full ml-1"></div>
                                        <div className="w-3 h-3 bg-gray-500 rounded-full ml-1"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div onClick={() => setShowModal(true)} className="mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2  items-center content-center justify-center">
                            <img className="m-auto" width={80} height={80} src="public/image/terre.png" alt="" />
                        </div>
                        {/* Affichez le modal s'il est ouvert */}
                        {showModal && (
                            <AddCourseModal showModal={showModal} setShowModal={setShowModal}

                            />
                        )}
                        {modalIsOpen && (<ModalT courseId={selectedCourseId} setSelectedCourseImage={setSelectedCourseImage} setModalIsOpen={setModalIsOpen} />)}
                    </div>
                </div>
            </div>
        </>
    )
}




const ModalT = ({ courseId, setModalIsOpen, setSelectedCourseImage }) => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInterroOpen, setIsInterroOpen] = useState(false);
    const [addTweetFile, setAddTweetFile] = useState(0);
    const [isExamenOpen, setIsExamenOpen] = useState(false);
    const [isDevoirOpen, setIsDevoirOpen] = useState(false);

    function handleFileChange(event) {
        
        const selectedFile = event.target.files[0];
        const reader = new FileReader()
        reader.onload = (e) => {
            setAddTweetFile(e.target.result)
        };
        reader.readAsDataURL(selectedFile)
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setModalIsOpen(false)
    };

    const toggleInterro = () => {
        setIsInterroOpen(!isInterroOpen);
        setIsModalOpen(false); // Fermer le modal global après avoir sélectionné une rubrique
    };

    const toggleExamen = () => {

        setIsExamenOpen(!isExamenOpen);
        // setIsModalOpen(false); // Fermer le modal global après avoir sélectionné une rubrique
    };

    const toggleDevoir = () => {
        setIsDevoirOpen(!isDevoirOpen);
        // setIsModalOpen(false); // Fermer le modal global après avoir sélectionné une rubrique
    };
    useEffect(() => {
        console.log("addTweetFile : ", addTweetFile)
        setSelectedCourseImage(addTweetFile)
    }, [addTweetFile, setSelectedCourseImage])
    return (

        // <div className="text-sm">
        <div className="fixed inset-0 z-10 overflow-y-auto bg-white bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 w-auto text-sm">
                {/* <button onClick={toggleModal} type="button" className="lg:mr-[650px] lg:ml-[300px]  ml-10 inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs mb-4">+ Ajouter</button> */}
                {/* {isModalOpen && ( */}
                <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-60">
                    <div className="bg-white rounded-lg shadow-lg p-10">
                        <h2 className="text-lg font-bold mb-4">Modification du cours</h2>
                        <ul className="divide-y divide-gray-200">
                            <li className="flex items-center py-3 cursor-pointer hover:bg-gray-100 gap-2" onClick={toggleInterro} >
                                {/* <RiQuestionFill className="text-purple-700 mr-2" /> */}
                                <img src="public/image/carnet.png" width={40} height= {40} alt="" /> <span>Ajouter un Apprenant</span>
                            </li>
                            <li className="flex items-center py-3 cursor-pointer hover:bg-gray-100 gap-2" onClick={toggleExamen}>
                                {/* <RiExamFill className="text-pink-700 mr-2" /> */}
                                <img src="public/image/galerie.png" width={40} height={40} alt="" /> <span>Changer image background du cours </span>

                                <span> Changer le Background </span>
                            </li>
                            <li className="flex items-center py-3 cursor-pointer hover:bg-gray-100 gap-2" onClick={toggleDevoir}>
                                {/* <RiFileTextFill className="text-blue-700 mr-2" /> */}
                                <img src="public/image/poubelle.png" width={40} height={40} alt="" /> <span>Supprimer le Cours.</span>

                                {/* <span>Supprimer le Cours.</span> */}
                            </li>
                        </ul>
                        {/* <button onClick={toggleModal} className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-semibold rounded-md shadow-md">Fermer</button> */}
                        <button onClick={toggleModal} type="button" className=" px-4 py-2 rounded-md font-bold text-center text-white uppercase align-middle transition-all  cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs ">Fermer</button>

                    </div>
                </div>

                {isInterroOpen && (

                    // Affichez le contenu spécifique pour l'interrogation ici
                    <div className="fixed inset-0 w-full flex justify-center items-center bg-white bg-opacity-20">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-lg font-bold mb-4">
                                <label htmlFor="media" className="logo-input">
                                    <img src="src\images\Media.svg" alt="Logo" />
                                    <input type="file" name="media" id="media" hidden accept="image/*" onChange={handleFileChange}
                                    />
                                </label>
                                Ajouter une interrogation</h2>
                            {/* Ajoutez les champs de saisie et les boutons pour créer une interrogation */}
                            <button onClick={toggleInterro} className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-semibold rounded-md shadow-md">Fermer</button>
                            <button  className="bg-pink-500 hover:bg-pink-700 text-white px-4 py-2 rounded-md">
                                Ajouter
                            </button>
                        </div>
                    </div>
                )}

                {isExamenOpen && (
                    <div className="inset-0 flex justify-center items-center bg-black bg-opacity-40">
                        <div className="bg-white w-full h-full max-h-screen overflow-y-auto p-8">
                            <AjoutApprenantModal courseId={courseId} setModalIsOpen={setModalIsOpen} />

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
        </div>
    );
};




const AjoutApprenantModal = ({ courseId, setModalIsOpen }) => {
    const utilisateurStocke = JSON.parse(sessionStorage.getItem('utilisateur'));

    const [formData, setFormData] = useState({
        enrollment_date: 0,
        email_user: '',
        course_id: courseId,
        // role: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const toggleModal = () => {
        // setIsModalOpen(!isModalOpen);
        setModalIsOpen(false)
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(courseId)
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:3000/api',
            headers: {
                Authorization: `Bearer ${utilisateurStocke.token}`,
            },
        });


        try {
            const { enrollment_date, email_user, course_id } = formData
            // const parsedEnrollmentDate = parseInt(enrollment_date)
            const response = await axiosInstance.post('/CourseEnrollment/add', { enrollment_date, email_user, course_id });
            console.log("Réponse du backend :", response.data); // Vous pouvez gérer la réponse ici
            // Ajoutez ici la logique pour gérer la réponse de votre backend

            // Réinitialisez le formulaire après l'envoi réussi des données
            setFormData({
                enrollment_date: 0,
                email_user: '',
                // course_id: '',
                // role: '',
            });
        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'ajout de l\'apprenant:', error);
            // Vous pouvez gérer les erreurs ici
        }
        toggleModal()
    };

    // if (!AjoutApprenant) return null;

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-white bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 w-96">
                <h2 className="text-xl font-bold mb-6 text-center">Ajouter un apprenant </h2>
                <form onSubmit={handleSubmit} className="text-sm">
                    <div className="mb-4">
                        <label htmlFor="enrollment_date" className="block text-sm font-medium text-gray-700">
                            Enrollment Date
                        </label>
                        <input
                            type="text"
                            id="enrollment_date"
                            name="enrollment_date"
                            value={formData.enrollment_date}
                            onChange={handleChange}
                            className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email_user" className="block text-sm font-medium text-gray-700">
                            User ID
                        </label>
                        <input
                            type="text"
                            id="email_user"
                            name="email_user"
                            value={formData.email_user}
                            onChange={handleChange}
                            className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label htmlFor="course_id" className="block text-sm font-medium text-gray-700">
                            Course ID
                        </label>
                        <input
                            type="text"
                            id="course_id"
                            name="course_id"
                            value={formData.course_id}
                            onChange={handleChange}
                            className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div> */}
                    {/* <div className="mb-4">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Role
                        </label>
                        <input
                            type="text"
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div> */}
                    <div className="flex justify-end gap-3">
                        <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white px-4 py-2 rounded-md">
                            Submit
                        </button>
                        {/* <button onClick={toggleModal} className="ml-4 text-gray-500 hover:text-gray-800"> */}
                        <button onClick={toggleModal} type="button" className=" px-4 py-2 rounded-md font-bold text-center text-white uppercase align-middle transition-all  cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs ">Cancel</button>
                        {/* Cancel */}
                        {/* </button> */}
                    </div>
                </form>
            </div>
        </div>
    );
};




AjoutApprenantModal.propTypes = {
    courseId: PropTypes.bool.isRequired,
    setModalIsOpen: PropTypes.func.isRequired,
};



ModalT.propTypes = {
    courseId: PropTypes.bool.isRequired,
    setModalIsOpen: PropTypes.func.isRequired,
    setSelectedCourseImage: PropTypes.func.isRequired,
};

