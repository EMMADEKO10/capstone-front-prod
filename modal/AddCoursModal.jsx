import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';



const AddCourseModal = ({ setShowModal }) => {
    const utilisateurStocke = JSON.parse(sessionStorage.getItem('utilisateur'));
    const [dt, setDt] = useState(null)
    const [usedImages, setUsedImages] = useState([]);

    const  handleClickOnBtnCancel =()=>{
        setShowModal(false)
    }

    const DefaultImages = [
        "public/image/background_cours/Charity-cuate.png",
        "public/image/background_cours / Designer(7).jpeg",
        "public/image/background_cours/healthy food vs fast food-rafiki.png",
        "public/image/background_cours/Designer(9).jpeg",
        "public/image/background_cours/home-page-banner.png",
        "public/image/background_cours/login-page-banner.png",
        "public/image/background_cours/signup-page-banner.png"
    ]

    const chooseRandomImage = () => {
        const availableImages = DefaultImages.filter(image => !usedImages.includes(image));
        if (availableImages.length === 0) {
            // Toutes les images ont été utilisées, réinitialiser l'historique
            setUsedImages([]);
            return chooseRandomImage(); // Appeler récursivement pour éviter les boucles infinies
        }
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        const randomImage = availableImages[randomIndex];
        setUsedImages([...usedImages, randomImage]);
        return randomImage;
    };

    const [formData, setFormData] = useState({
        course_name: '',
        description: '',
        teacherId: utilisateurStocke.user.id,
        background: ""

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

        const axiosInstance = axios.create({
            baseURL: 'https://capstone-c1-emmadeko10-3.onrender.com/api',
            //  headers: {
            //    Authorization: `Bearer ${utilisateurStocke.token}`,
            // },
        });
        try {
            const newFormData = {
                ...formData,
                background: "public/image/background_cours/Charity-cuate.png" // Choisir une nouvelle image aléatoire
            };
            const response = await axiosInstance.post('/cours/add', newFormData);
            setDt(response.data)

            setFormData({
                course_name: '',
                description: '',
                teacherId: utilisateurStocke.user.id,
                background: ""

            })

        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer.', error);
        }
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
                            className="text-white bg-gradient-to-r from-purple-600 to-pink-600 text-justify pr-2 pt-3 pl-2 pb-3 h-[40px] mt-1 block w-full border-transparent shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
                        <button onClick={handleClickOnBtnCancel} type="button" className="mr-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
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

AddCourseModal.propTypes = {
   
    setShowModal: PropTypes.func.isRequired,
   
};



export default AddCourseModal;
