
import SideBar from "../components/SideBar"
import Interrogation from "../components/interrogation"
import Information from "../components/Information"
import Rubrique from "../components/Rubrique"
// import { useState } from "react"
// import { v4 as uuidv4 } from 'uuid';
import { createContext } from "react"

export const RubriqueContext = createContext(null);
export default function Cours() {
    // StudentCoachList
    // const [isHomeOpen, setIsHomeOpen] = useState(false);
    // const [isAboutOpen, setIsAboutOpen] = useState(false);
    // const [isSignInOpen, setIsSignInOpen] = useState(false);
    // const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    // setIsHomeOpen(true)


    return (
        <> 
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
                    <div className="flex flex-col gap-2 lg:w-[90%] mr-3">
                        <Rubrique />
                      <div><div className="cours mt-4 relative lg:w-[90%] rounded-2xl mb-1 shadow-md h-40 lg:mr-10 text-center items-center pl-20 pb-20">
                            <div className="absolute bottom-0 left-0 mb-0 p-2">
                                <p className="font-sans font-semibold leading-normal text-gray-500 text-[32px]">Anglais</p>
                            </div>
                        </div>
                            <Information />
                            <Information />
                            <Information />
                            <Information />
                            <Interrogation  />
                            </div>
                            {/* ) : <StudentCoachList2 /> }  */}
                    </div>
                {/* </RubriqueContext.Provider> */}
            </div>
        </>
    )
}



// --------------------------------------


// const NavBar = () => {
//     const [isHomeOpen, setIsHomeOpen] = useState(false);
//     const [isAboutOpen, setIsAboutOpen] = useState(false);
//     const [isSignInOpen, setIsSignInOpen] = useState(false);
//     const [isSignUpOpen, setIsSignUpOpen] = useState(false);

//     const toggleHome = () => {
//         setIsHomeOpen(!isHomeOpen);
//     };

//     const toggleAbout = () => {
//         setIsAboutOpen(!isAboutOpen);
//     };

//     const toggleSignIn = () => {
//         setIsSignInOpen(!isSignInOpen);
//     };

//     const toggleSignUp = () => {
//         setIsSignUpOpen(!isSignUpOpen);
//     };

//     return (
//         <nav className="bg-white shadow-sm">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16">
//                     <div className="flex items-center">
//                         {/* Logo ou titre de votre site */}
//                         <span className="text-2xl font-bold text-fuchsia-800">MonSite</span>
//                     </div>
//                     {/* Liens de la NavBar */}
//                     <div className="flex items-center space-x-4">
//                         <button onClick={toggleHome} className="px-3 py-2 text-sm text-green-500 hover:text-green-600 focus:outline-none">
//                             Home
//                         </button>
//                         {isHomeOpen && (
//                             <ul className="absolute top-16 left-0 z-10 bg-white shadow-md p-2 rounded-lg">
//                                 <li>
//                                     <a href="#">bonjour</a>
//                                 </li>
//                                 <li>
//                                     <a href="#">bonsoir</a>
//                                 </li>
//                                 <li>
//                                     <a href="#">Succès</a>
//                                 </li>
//                             </ul>
//                         )}
//                         <button onClick={toggleAbout} className="px-3 py-2 text-sm text-green-500 hover:text-green-600 focus:outline-none">
//                             About Us
//                         </button>
//                         {isAboutOpen && (
//                             <ul className="absolute top-16 left-0 z-10 bg-white shadow-md p-2 rounded-lg">
//                                 <li>
//                                     <a href="#">Sous lien</a>
//                                 </li>
//                                 <li>
//                                     <a href="#">Lien commercial</a>
//                                 </li>
//                             </ul>
//                         )}
//                         <button onClick={toggleSignIn} className="px-3 py-2 text-sm text-green-500 hover:text-green-600 focus:outline-none">
//                             Sign In
//                         </button>
//                         {isSignInOpen && (
//                             <ul className="absolute top-16 left-0 z-10 bg-white shadow-md p-2 rounded-lg">
//                                 <li>
//                                     <a href="#">Social</a>
//                                 </li>
//                             </ul>
//                         )}
//                         <button onClick={toggleSignUp} className="px-3 py-2 text-sm text-green-500 hover:text-green-600 focus:outline-none">
//                             Sign Up
//                         </button>
//                         {isSignUpOpen && (
//                             <ul className="absolute top-16 left-0 z-10 bg-white shadow-md p-2 rounded-lg">
//                                 <li>
//                                     <a href="#">Socio media</a>
//                                 </li>
//                                 <li>
//                                     <a href="#">User</a>
//                                 </li>
//                                 <li>
//                                     <a href="#">Admin</a>
//                                 </li>
//                             </ul>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };





// const StudentCoachList = () => {
//     const students = [
//         { id: 1, name: 'John Doe', email: 'johndoe@example.com', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
//         { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
//         // Add more students as needed
//     ];

//     const coaches = [
//         { id: 1, name: 'James Johnson', email: 'jamesjohnson@example.com', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
//         { id: 2, name: 'Emily Brown', email: 'emilybrown@example.com', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
//         // Add more coaches as needed
//     ];

//     return (
//         <div className="bg-gray-100 p-8">
//             <h1 className="text-2xl font-bold mb-4 text-center">Liste des Apprenants</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {students.map((student) => (
//                     <div key={student.id} className="bg-white rounded-lg shadow-md p-4">
//                         <img src={student.avatar} alt={student.name} className="w-24 h-24 mx-auto rounded-full mb-2" />
//                         <h2 className="text-lg font-semibold mb-1">{student.name}</h2>
//                         <p className="text-gray-500">{student.email}</p>
//                     </div>
//                 ))}
//             </div>
//             <h1 className="text-2xl font-bold mt-8 mb-4 text-center">Liste des Coachs</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {coaches.map((coach) => (
//                     <div key={coach.id} className="bg-white rounded-lg shadow-md p-4">
//                         <img src={coach.avatar} alt={coach.name} className="w-24 h-24 mx-auto rounded-full mb-2" />
//                         <h2 className="text-lg font-semibold mb-1">{coach.name}</h2>
//                         <p className="text-gray-500">{coach.email}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };




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


