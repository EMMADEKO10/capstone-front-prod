
import SideBar from "../components/SideBar"
import Information from "../components/Information"
import Rubrique from "../components/Rubrique"
import { useParams } from 'react-router-dom';
import { createContext, useEffect, useState } from "react"
import axios from "axios";
import Loading from 'react-loading';


export const RubriqueContext = createContext(null);
export default function Cours() {
    const { id } = useParams(); // Extraction de l'id des paramètres d'URL

    sessionStorage.setItem("currentCours", JSON.stringify(id));
    const utilisateurStocke = JSON.parse(sessionStorage.getItem('utilisateur'));
    const [isApprenant, setIsApprenant] = useState(false)
    const [DataInit, setDataInit] = useState(null)
    const [Data, setData] = useState(null)
    
    useEffect(() => {
        const checkEnrollment = async () => {
            try {
                // http://localhost:3000/api/CourseEnrollment/1/1/isEnrolledAsProf
                const response = await axios.get(`http://localhost:3000/api/CourseEnrollment/${utilisateurStocke.user.id}/${id}/isEnrolledAsProf`);
                setIsApprenant(response.data.isEnrolled);
                console.log("isApprenant : ", isApprenant)

            } catch (error) {
                console.error('Erreur lors de la vérification de l\'enrôlement :', error);
            }
        }
        checkEnrollment();
    });

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get(
                    `http://localhost:3000/api/cours/${id}`
                );
                // Extraire les épreuves de response.data
                const epreuves = response.data;

                // Mettre à jour dataUser en ajoutant les épreuves
                setDataInit(epreuves);

                setData(response.data);
            } catch (error) {
                console.error("Error fetching tweets:", error);
            }
        };
        fetchData(); // Call the function to fetch data
    }, [id], [Data]);

    useEffect(() => {
        // console.log("Voici les données des cours : ", DataInit)
    }, [DataInit], []);

    if (!DataInit) {
        return (
            <div className="timeline flex justify-center items-center w-[650px]">
                <Loading type="spin" color="#004a99" height={50} width={50} />
            </div>
        );
    }

    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            {/* Logo ou titre de votre site */}
                            <span className="text-2xl font-bold text-fuchsia-800">School_Eva</span>
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
                <SideBar id={id}/>
                <div className="flex flex-col gap-2 lg:w-[90%] mr-3">
                    <Rubrique />
                    <div><div className="cours mt-4 relative lg:w-[90%] rounded-2xl mb-1 shadow-md h-40 lg:mr-10 text-center items-center pl-20 pb-20">
                        <div className="absolute bottom-0 left-0 mb-0 p-2">
                            <p className="font-sans font-semibold leading-normal text-gray-500 text-[32px]">Anglais</p>
                        </div>
                    </div>
                        <Information />
                    </div>
                </div>

            </div>
        </>
    )
}



// --------------------------------------


export const StudentCoachList2 = () => {
    const students = [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 1, name: 'Deko Emmanuel', email: 'belcheck@example.com', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
        // Add more students as needed
    ];

    const coaches = [
        { id: 1, name: 'James Johnson', email: 'jamesjohnson@example.com', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
        { id: 2, name: 'Emily Brown', email: 'emilybrown@example.com', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
        // Add more coaches as needed
    ];

    return (
        <div className="bg-white p-8 w-full">
            <h1 className=" text-lg  text-slate-700 font-bold mb-4 text-center">Liste des Apprenants</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {students.map((student) => (
                    <div key={student.id} className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <div>
                            <img src={student.avatar} alt={student.name} className="w-24 h-24 mx-auto rounded-full mb-2" />
                        </div>
                        <div className="flex flex-col ml-4">
                            <div className="text-sm font-semibold mb-1">{student.name}</div>
                            <div className="text-sm  text-slate-700">{student.email}</div>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="text-lg  text-slate-700 font-bold mt-8 mb-4 text-center">Liste des Coachs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coaches.map((coach) => (
                    <div key={coach.id} className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <div>
                            <img src={coach.avatar} alt={coach.name} className="w-24 h-24 mx-auto rounded-full mb-2" />
                        </div>
                        <div className="flex flex-col ml-4">
                            <div className="text-sm font-semibold mb-1">{coach.name}</div>
                            <div className="text-sm  text-slate-700">{coach.email}</div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};



