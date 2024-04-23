import { useState,useContext, useEffect } from 'react';
import axios from 'axios';
import { DataContext } from '../src/App';
const AddCourseModal = () => {
    const utilisateurStocke = JSON.parse(sessionStorage.getItem('utilisateur'));
    const [dt, setDt] = useState(null)
    const { dataUser } = useContext(DataContext)

    useEffect(() => {
        console.log("utilisateurStocke : ", utilisateurStocke.token);
        console.log("utilisateurStocke : ", utilisateurStocke.user);
    }, [utilisateurStocke]);
    
    useEffect(() => {
        // console.log("id du user xxxxxxxxxxxxxxxxxx : ", dataUser.user)

    },[ dataUser])

    const [formData, setFormData] = useState({
        course_name: '',
        description: '',
        teacherId: utilisateurStocke.user.id, // Vous pouvez remplir cette valeur dynamiquement selon votre logique d'authentification
    });

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // console.log("quel est la reponse : ", formData); // Réponse de votre backend
        // dataUser.id
        // console.log("id du user xxxxxxxxxxxxxxxxxx : ", dataUser.id)
        try {

            const response = await axios.post('http://localhost:3000/api/cours/add', formData);
            // console.log("quel est la reponse : ", response.data); // Réponse de votre backend
            // Ajoutez ici la logique pour gérer la réponse de votre backend
            setDt(response.data)
            
        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer.', error);
        }
     
        // console.log("quel est la reponse : ", dt); // Réponse de votre backend

    };

    if (dt) {
        // console.log("quel est la reponse : ", dt); // Réponse de votre backend
    }

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 '
                }`}
        >
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Ajouter un cours</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="course_name" className="block text-sm font-medium text-gray-700">
                            Nom du cours
                        </label>
                        <input
                            type="text"
                            id="course_name"
                            name="course_name"
                            value={formData.course_name}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="mr-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Ajouter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCourseModal;
