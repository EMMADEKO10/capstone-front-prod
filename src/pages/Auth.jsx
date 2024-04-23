import { useContext, useState } from "react";
import { DataContext } from "../App";
export default function Auth() {
    const { isLoggedIn, setIsLoggedIn } = useContext(DataContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        // Ici, vous pouvez ajouter la logique de connexion avec votre backend
    };

    // Fonction de connexion (simulée ici)
    // const handleLogin = () => {
    //     // Simuler le processus de connexion réussie
    // };
    if(isLoggedIn){
        // console.log(isLoggedIn)
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Authentification</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300"
                    >
                        Se connecter
                    </button>
                </form>
                <div className="mt-4 flex justify-between space-x-4">
                    {/* Boutons d'authentification avec les logos */}
                    <button className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full shadow-md transition duration-300">
                        <img src="/google-logo.png" alt="Google Logo" className="w-6 h-6" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-900 rounded-full shadow-md transition duration-300">
                        <img src="/github-logo.png" alt="GitHub Logo" className="w-6 h-6" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition duration-300">
                        <img src="/facebook-logo.png" alt="Facebook Logo" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}