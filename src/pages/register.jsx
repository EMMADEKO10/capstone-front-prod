// RegisterForm.js

import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false); // Add state for success message
  const [successMessage, setSuccessMessage] = useState(''); // Add state for success message content
  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("Value : ", value)
    // console.log("name : ", name)
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({}); // Clear errors on input change

  };
  const navigate = useNavigate(); // Initialize useNavigate hook

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {}; // Initialize empty error object

    if (!formData.name) {
      newErrors.name = 'Veuillez saisir votre nom.';
    }

    if (!formData.email) {
      newErrors.email = 'Veuillez saisir votre adresse e-mail.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Adresse e-mail invalide.';
    }

    if (!formData.password) {
      newErrors.password = 'Veuillez saisir votre mot de passe.';
    }

    setErrors(newErrors); // Set errors state object

    if (Object.keys(newErrors).length === 0) {
      // All fields are valid, proceed with form submission logic
      // You can use axios or fetch to submit the data to your backend
      console.log('Form data is valid:', formData); // Replace with your submission logic
    }


    // https://capstone-c1-emmadeko10-3.onrender.com

    try {
      const response = await axios.post('https://capstone-c1-emmadeko10-3.onrender.com/api/auth/register', formData);
      // console.log(response.data); // Réponse de votre backend
      // Ajoutez ici la logique pour gérer la réponse de votre backend
      if (response.status === 201) { // Check for successful registration response
        setIsRegistrationSuccessful(true);
        setSuccessMessage('Inscription réussie !'); // Set success message
        // Optionally, perform other actions like clearing the form

        // After a short delay, redirect to the homepage
        setTimeout(() => {
          navigate('/');
        }, 3000); // Replace 2000 with desired delay in milliseconds
      } else {
        // Handle unsuccessful registration (e.g., display error message)
      }
    } catch (error) {
      if (error.response) {
        // Erreur avec réponse du serveur
        console.error('Erreur de réponse du serveur:', error.response.data);
      } else if (error.request) {
        // La requête a été faite mais pas de réponse reçue
        console.error('Aucune réponse reçue du serveur:', error.request);
      } else {
        // Erreur de configuration ou autre
        console.error('Erreur lors de la requête:', error.message);
      }
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tl to-pink-500 bg-opacity-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full  bg-opacity-80 p-8 rounded-lg shadow-lg flex items-center justify-center space-x-8">
        <div className='bg-gradient-to-tl from-purple-700 to-pink-500 bg-opacity-70 w-6 h-2'></div>

        <form className="w-2/3" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-600">Inscription</h2>
            <div className="rounded-md shadow-sm -space-y-px bg-opacity-50">
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
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-purple-500 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm ${errors.name ? 'border-red-500' : ''
                    }`} // Add error border class
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>} {/* Display error message */}
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
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-purple-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm ${errors.email ? 'border-red-500' : ''
                    }`} // Add error border class
                  placeholder="Adresse e-mail"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>} {/* Display error message */}
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-purple-500 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                  placeholder="Mot de passe"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>

              
                {isRegistrationSuccessful && (
                <div className="bg-green-100 p-5 w-[100%] sm:w-1/2 rounded mb-10 items-center">
                  <div className="flex justify-between">
                    <div className="flex space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-green-500 h-4 w-4">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" /></svg>
                      <div className="flex-1 leading-tight text-sm text-green-700 font-medium">succès</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-none fill-current text-green-600 h-3 w-3">
                      <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>
                  </div>
                </div>
                )}
             

              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                S inscrire
              </button>
            </div>
          </div>
        </form>
        <img src="public/image/background_cours/signup-page-banner.png" alt="Inscription" className="w-1/3 rounded-lg shadow-lg" />
      </div>
    </div>



  );
};

export default RegisterForm;
