import SideBar from "../components/SideBar"
// import Rubrique from "../components/Rubrique"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Accueil() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            {/* Logo ou titre de votre site */}
                            <span className="text-2xl font-bold text-fuchsia-800">MonSite</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            {/* Liens de la NavBar */}
                            <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Home</a>
                            <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">About Us</a>
                            <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Sign In</a>
                            <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Sign Up</a>
                        </div>
                        {/* Hamburger menu pour les tailles d'écran plus petites */}
                        <div className="flex md:hidden items-center">
                            <button onClick={toggleMenu} className="block px-3 py-2 text-green-500 hover:text-green-600 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                      
                    </div>
                </div>
            </nav>

            <div className='flex flex-row gap-2'>
                <SideBar />
                <div className="flex flex-col  w-[90%] ">
                    {/* <Rubrique /> */}
                <div className="flex flex-row flex-wrap gap-6">
                        <Link to = "http://localhost:5173/Cours"><div className="mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2  items-center pl-20 pb-20">
                            <div className="cours absolute w-[100%] h-[75%] top-0 right-0 left-0 rounded-2xl">

                            </div>
                            <div className="absolute bottom-0 left-0 mb-0 p-2 w-[100%] h-[25%] flex flex-row justify-between text-center content-center">
                                <p className="font-sans font-semibold leading-normal text-gray-500 text-[26px]">Anglais</p>
                                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="src/assets/femme-bulle-dialogue-montrant-visage-souriant-sueur-froide-emoji.jpg" alt="Avatar" />
                                </div>
                            </div>
                        </div></Link>
                        {/* ----------------------------------------------------------------------- */}
                        <div className="mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2  items-center pl-20 pb-20">
                            <div className="cours absolute w-[100%] h-[75%] top-0 right-0 left-0 rounded-2xl">

                            </div>
                            <div className="absolute bottom-0 left-0 mb-0 p-2 w-[100%] h-[25%] flex flex-row justify-between text-center content-center">
                                <p className="font-sans font-semibold leading-normal text-gray-500 text-[26px]">Philosophie</p>
                                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="src/assets/femme-bulle-dialogue-montrant-visage-souriant-sueur-froide-emoji.jpg" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                        {/* ------------------------------------------------------------------------------- */}

                        <div className="mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2  items-center pl-20 pb-20 p-1" >
                            <div className=" bg-slate-400 absolute w-[100%] h-[75%] top-0 right-0 left-0 rounded-2xl">

                            </div>
                            <div className="absolute bottom-0 left-0 mb-0 p-2 w-[100%] h-[25%] flex flex-row justify-between text-center content-center">
                                <p className="font-sans font-semibold leading-normal text-gray-500 text-[26px]">Francais</p>
                                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="src/assets/femme-bulle-dialogue-montrant-visage-souriant-sueur-froide-emoji.jpg" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------------------------------------------- */}
                        <div className="mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2  items-center pl-20 pb-20">
                            <div className=" bg-orange-300 absolute w-[100%] h-[75%] top-0 right-0 left-0 rounded-2xl">

                            </div>
                            <div className="absolute bottom-0 left-0 mb-0 p-2 w-[100%] h-[25%] flex flex-row justify-between text-center content-center">
                                <p className="font-sans font-semibold leading-normal text-gray-500 text-[26px]">R.O</p>
                                <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src="src/assets/femme-bulle-dialogue-montrant-visage-souriant-sueur-froide-emoji.jpg" alt="Avatar" />
                                </div>
                            </div>
                        </div>
                        {/* --------------------------------------------------------------------------------------
                        <div className="cours mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2 text-center items-center pl-20 pb-20">
                            <div className="absolute bottom-0 left-0 mb-0 p-2">
                                <p className="font-sans font-semibold leading-normal text-gray-500 text-[32px]">Math</p>
                            </div>

                        </div>
                        <div className="mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2 text-center items-center pl-20 pb-20 bg-slate-400">
                            <div className="absolute bottom-0 left-0 mb-0 p-2">
                                <p className="font-sans font-semibold leading-normal text-gray-500 text-[32px]">Histoire</p>
                            </div>
                        </div>
                        <div className=" mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2 text-center items-center pl-20 pb-20 bg-cover bg-no-repeat bg-opacity-20" style={{ backgroundImage: 'url("src/assets/banner-images/signup-page-banner.png")' }}>
                            <div className="absolute bottom-0 left-0 mb-0 p-2">
                                <p className="font-sans font-semibold leading-normal text-gray-500 text-[32px]">Statistique</p>
                            </div>
                        </div>
                        <div className=" mt-4 relative w-80 rounded-2xl mb-1 shadow-md h-60 mr-2 text-center items-center pl-20 pb-20 bg-cover bg-no-repeat bg-opacity-20 bg-green-600">
                            <div className="absolute bottom-0 left-0 mb-0 p-2">
                                <p className="font-sans font-semibold leading-normal text-gray-500 text-[32px]">Web</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}



