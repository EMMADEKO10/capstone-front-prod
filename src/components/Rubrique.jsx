
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Rubrique() {
    const currentCours = JSON.parse(sessionStorage.getItem('currentCours'));
    const utilisateurStocke = JSON.parse(sessionStorage.getItem('utilisateur'));
    const [isApprenant, setIsApprenant] = useState(false)


    useEffect(() => {
        const checkEnrollment = async () => {
            try {
                const response = await axios.get(` https://capstone-c1-emmadeko10-3.onrender.com/api/CourseEnrollment/${utilisateurStocke.user.id}/${currentCours}/isEnrolledAsProf`);
                setIsApprenant(response.data.isEnrolled);
                console.log("isApprenant : ", isApprenant)

            } catch (error) {
                console.error('Erreur lors de la vérification de l\'enrôlement :', error);
            }
        }
        checkEnrollment();
    });

    return (
        <>
            {isApprenant && (
                <nav className="bg-white mx-auto lg:px-4 lg:w-[90%] sm:w-[100%] lg:mt-3 shadow-md ease-nav-brand">
                    <div className="max-w-7xl mx-auto lg:px-4">
                        <div className="flex lg:content-between justify-between lg:h-10">
                            {/* Liens de navigation */}
                            <div className="sm:items-center">
                                <div className="flex justify-center lg:space-x-4 text-sm text-slate-700">
                                    <ul className='flex lg:space-x-4 list-none'>
                                        <NavLink to={`/Cours/${currentCours}`}><li className="ease-nav-brand hover:text-purple-400 px-3 py-2 rounded-md">Flux</li></NavLink>
                                        <NavLink to="/Travaux"><li className="hover:text-purple-400 px-3 py-2 rounded-md">Travaux et Devoirs</li></NavLink>
                                        <NavLink to="/All"><li className="hover:text-purple-400 px-3 py-2 rounded-md">Personne</li></NavLink>
                                        <NavLink to="/Stat"><li className="hover:text-purple-400 px-3 py-2 rounded-md">Note</li></NavLink>
                                        <li className="hover:text-purple-400 px-3 py-2 rounded-md hidden lg:flex">Statistique</li>
                                    </ul>
                                </div>
                            </div>
                            <p className='hidden lg:flex'>=</p>
                        </div>
                    </div>
                </nav>
            )}</>
    );
}


