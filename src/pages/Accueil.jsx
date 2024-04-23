import SideBar from "../components/SideBar"
// import Rubrique from "../components/Rubrique"
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { v4 as uuidv4 } from 'uuid';
import Loading from 'react-loading';
import AddCourseModal from "../../modal/AddCoursModal";

// import { useContext, useState } from "react";
// import { DataContext } from "../App";

export default function Accueil() {
    // http://localhost:3000/api/cours/
    // const { dataUser, setDataUser } = useContext(DataContext)
    const [DataInit, setDataInit] = useState(null)
    const [Data, setData] = useState(null)
    const [showModal, setShowModal] = useState(false); // État pour gérer l'ouverture du modal
    // const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get(
                    "http://localhost:3000/api/cours/"
                );
                setDataInit(response.data); // Update state after successful fetch
                setData(response.data);
            } catch (error) {
                console.error("Error fetching tweets:", error);
            }
        };
        fetchData(); // Call the function to fetch data
    }, [], [Data]); // Empty dependency array ensures the effect runs only once

    // useEffect(() => {
    //     console.log("Voici les données des cours : ", DataInit[0].course_name)
    // }, [DataInit], [])

    if (!DataInit) {
        return (
            <div className="timeline flex justify-center items-center w-[650px]">
                <Loading type="spin" color="#004a99" height={50} width={50} />
            </div>
        );
    }

    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    // };

    // const handleCloseModal = () => {
    //     setIsModalOpen(!isModalOpen);
    // };

    // const handleClick = () => {
    //     // Ici, vous pouvez traiter les données du formulaire, comme les envoyer à votre backend
    //     console.log('Données du formulaire soumises :');
    // };

    return (
        <>
            <NavBar />
            <div className='flex flex-row gap-2'>
                <SideBar />

                <div className="flex flex-col  w-[90%] ">
                    {/* <Rubrique /> */}
                    <div className="flex flex-row flex-wrap gap-6">
                        <Link to="http://localhost:5173/Cours"><div className="mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2  items-center pl-20 pb-20">
                            <div className="cours absolute w-[100%] h-[75%] top-0 right-0 left-0 rounded-2xl">

                            </div>
                            <div className="absolute bottom-0 left-0 mb-0 p-2 w-[100%] h-[25%] flex flex-row justify-between text-center content-center">
                                <p className="font-sans font-semibold leading-normal text-gray-500 text-[26px]">Anglais</p>
                                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="src/assets/femme-bulle-dialogue-montrant-visage-souriant-sueur-froide-emoji.jpg" alt="Avatar" />
                                </div>
                            </div>
                        </div></Link>

                        {DataInit.map((course) => (
                            
                            <Link key={uuidv4()} to={`http://localhost:5173/Cours/${course.course_id}`}><div className="mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2  items-center pl-20 pb-20">
                                <div className="cours absolute w-[100%] h-[75%] top-0 right-0 left-0 rounded-2xl">

                                </div>
                                <div className="absolute bottom-0 left-0 mb-0 p-2 w-[100%] h-[25%] flex flex-row justify-between text-center content-center">
                                    <p className="font-sans font-semibold leading-normal text-gray-500 text-[26px]">{course.course_name}</p>
                                    <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                        <img className="w-full h-full object-cover" src="src/assets/femme-bulle-dialogue-montrant-visage-souriant-sueur-froide-emoji.jpg" alt="Avatar" />
                                    </div>
                                </div>
                            </div></Link>
                           
                        ))
                        }
                        <div onClick={() => setShowModal(true)} className="mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2  items-center pl-20 pb-20">
                            ADD A COURSES
                        </div>

                        {/* Affichez le modal s'il est ouvert */}
                        {showModal && (
                            <AddCourseModal
                               
                            />
                        )}
                    
                    </div>
                </div>
            </div>
        </>
    )
}



