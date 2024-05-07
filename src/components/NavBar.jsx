import { useState } from "react";
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const { isLoggedIn, setIsLoggedIn } = useContext(DataContext)
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
                            <span className="text-2xl font-bold text-fuchsia-800">SCHOOL_EV</span>
                        </div>
                        <div className="h-[100%]">
                            Retour
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
        </>
    )
}
