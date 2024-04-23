// RegisterForm.js

import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { DataContext } from '../App';
import { Link } from 'react-router-dom';

// https://capstone-c1-emmadeko10-2.onrender.com/api/auth/register/

 function Login() {
     const { isLoggedIn, setIsLoggedIn } = useContext(DataContext)
     const { dataUser, setDataUser } = useContext(DataContext)
     
    //  const [dt, setDt] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log("Value : ", value)
        // console.log("name : ", name)
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
                        
            const response = await axios.post('http://localhost:3000/api/auth/login', formData);
            // console.log("quel est la reponse : ",response.data); // Réponse de votre backend
            // Ajoutez ici la logique pour gérer la réponse de votre backend
            // setDt(response.data)
            setDataUser(response.data)
            let utilisateur = response.data
            
            sessionStorage.setItem("utilisateur", JSON.stringify(utilisateur));

            setIsLoggedIn(true)
        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer.', error);
        }
        // console.log("quel est la reponse : ", dt); // Réponse de votre backend
        console.log("les données du user : ", dataUser)
        
    };

     if (dataUser) {
         console.log("quel est la reponse : ", dataUser); // Réponse de votre backend
    // console.log(isLoggedIn)
}
     useEffect(() => {
        //  console.log(dataUser)
     }, [dataUser])

     useEffect(() => {
        //  console.log(isLoggedIn)
     }, [isLoggedIn])


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inscription</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Nom
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Nom"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Adresse e-mail
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Adresse e-mail"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Mot de passe
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Mot de passe"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        {isLoggedIn ? <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        > <Link to = "/"> S inscrire</Link> 
                        </button> : <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        > S inscrire
                        </button>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
