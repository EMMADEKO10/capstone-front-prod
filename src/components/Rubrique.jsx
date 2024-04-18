
// import { useContext } from 'react';
// import { RubriqueContext } from '../pages/cours';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Rubrique() {

    // const [showAddButton, setShowAddButton] = useState(false);
    // const { isHomeOpen, setIsHomeOpen } = useContext(RubriqueContext)
    // function handleClick() {
    //     setShowAddButton(!showAddButton)
    //     setIsHomeOpen(!isHomeOpen)
    // }
    return (
        <nav className=" bg-white   mx-auto lg:px-4  lg:w-[90%] sm:w-[100%] lg:mt-3 shadow-md ease-nav-brand">
            <div className="max-w-7xl mx-auto lg:px-4">
                <div className="flex lg:content-between justify-between lg:h-10">

                    {/* Liens de navigation */}
                    <div className=" sm:items-center">
                        <div className="flex justify-center lg:space-x-4 text-sm text-slate-700">
                            <ul className='flex lg:space-x-4 list-none'>
                                <NavLink to="/Cours"><li href="#" className="ease-nav-brand hover:text-purple-400 px-3 py-2 rounded-md">Flux</li></NavLink> 
                                <NavLink to="/Travaux"><li href="#" className="hover:text-purple-400 px-3 py-2 rounded-md">Travaux et Devoirs</li></NavLink>
                                <NavLink to="/All"><li href="#" className="hover:text-purple-400 px-3 py-2 rounded-md">Personne</li></NavLink>
                                <NavLink to="/Stat"><li href="#" className=" hover:text-purple-400 px-3 py-2 rounded-md">Note</li></NavLink>
                                <li href="#" className=" hover:text-purple-400 px-3 py-2 rounded-md hidden lg:flex">Statistique</li>
                            </ul>
                        </div>

                    </div>

                    <p className='hidden lg:flex'>=</p>
                </div>
            </div>
            {/* Rubrique "Travaux et Devoirs" - Affichage du bouton Ajouter */}
            {/* {showAddButton && (
                // <div className="bg-gray-200 py-2">
                //     <div className="max-w-7xl mx-auto px-4 justify-end hidden">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300">
                    Ajouter
                </button>
                //     </div>
                // </div>
            )} */}
        </nav>
    );
}


{/* <nav className="bg-white mx-auto px-4  lg:w-[90%] sm:w-[100%] lg:mt-3 shadow-md ease-nav-brand">
    <div className="max-w-7xl container mx-auto lg:px-4">
        <div className="flex lg:content-between lg:justify-between lg:h-10">

            {/* Liens de navigation */}
    //         <div className="">
    //             <div className="flex justify-center lg:space-x-4 text-sm text-slate-700">
    //                 <ul className='flex lg:space-x-4 list-none'>
    //                     <NavLink to="/Cours"><li href="#" className="ease-nav-brand hover:text-purple-400 px-3 py-2 rounded-md">Flux</li></NavLink>
    //                     <NavLink to="/Travaux"><li href="#" className="hover:text-purple-400 px-3 py-2 rounded-md">Travaux et Devoirs</li></NavLink>
    //                     <NavLink to="/All"><li href="#" className="hover:text-purple-400 px-3 py-2 rounded-md">Personne</li></NavLink>
    //                     <NavLink to="/Stat"><li href="#" className=" hover:text-purple-400 px-3 py-2 rounded-md">Note</li></NavLink>
    //                     <li href="#" className=" hover:text-purple-400 px-3 py-2 rounded-md">Statistique</li>
    //                 </ul>
    //             </div>
    //         </div>

    //         <p className='sm:hidden'>=</p>
    //     </div>
    // </div> */}