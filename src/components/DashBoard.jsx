import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importer PropTypes depuis React

// import { useParams } from 'react-router-dom';


const Dashboard = () => {



    // const questions = [
    //     {
    //         "id": 6,
    //         "epreuveId": 3,
    //         "title": "C'est le QBasic",
    //         "description": null,
    //         "type": "choice",
    //         "marks": 5,
    //         "assertionRubrics": [
    //             {
    //                 "id": 17,
    //                 "title": "Un langage ",
    //                 "description": "Ceci est la première rubrique d'assertion pour un test",
    //                 "questionId": 6,
    //                 "content": "Contenu de la première rubrique d'assertion",
    //                 "isCorrect": false
    //             },
    //             {
    //                 "id": 18,
    //                 "title": "Langage de programation",
    //                 "description": "Ceci est la première rubrique d'assertion pour un test",
    //                 "questionId": 6,
    //                 "content": "Contenu de la première rubrique d'assertion",
    //                 "isCorrect": false
    //             },
    //             {
    //                 "id": 19,
    //                 "title": "une langue de développement intégrée",
    //                 "description": "Ceci est la première rubrique d'assertion pour un test",
    //                 "questionId": 6,
    //                 "content": "Contenu de la première rubrique d'assertion",
    //                 "isCorrect": false
    //             }
    //         ]
    //     },
    //     {
    //         "id": 7,
    //         "epreuveId": 3,
    //         "title": "Quantième dans le classement ?",
    //         "description": null,
    //         "type": "choice",
    //         "marks": 5,
    //         "assertionRubrics": [
    //             {
    //                 "id": 20,
    //                 "title": "10",
    //                 "description": "Ceci est la première rubrique d'assertion pour un test",
    //                 "questionId": 7,
    //                 "content": "Contenu de la première rubrique d'assertion",
    //                 "isCorrect": false
    //             },
    //             {
    //                 "id": 21,
    //                 "title": "3",
    //                 "description": "Ceci est la première rubrique d'assertion pour un test",
    //                 "questionId": 7,
    //                 "content": "Contenu de la première rubrique d'assertion",
    //                 "isCorrect": false
    //             },
    //             {
    //                 "id": 22,
    //                 "title": "4",
    //                 "description": "Ceci est la première rubrique d'assertion pour un test",
    //                 "questionId": 7,
    //                 "content": "Contenu de la première rubrique d'assertion",
    //                 "isCorrect": false
    //             },
    //             {
    //                 "id": 23,
    //                 "title": "5",
    //                 "description": "Ceci est la première rubrique d'assertion pour un test",
    //                 "questionId": 7,
    //                 "content": "Contenu de la première rubrique d'assertion",
    //                 "isCorrect": false
    //             }
    //         ]
    //     }
    // ]





    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(` https://capstone-c1-emmadeko10-3.onrender.com/epreuve/${id}/questions`);
                // console.log("Voici les données des questions quiz : ",response.data)
                setQuestions(response.data);

            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, [id], [questions]);
    if (error) {
        return <div>Error fetching questions: {error.message}</div>;
    }


    // if (!questionsx ) {
    //     return <div>Loading...</div>;
    // }else{
    //     console.log("Voici les données des WWWWWWWWWWWWWWWWWW: ", questionsx)

    // }
    

    // const handleCheckboxChange = (questionId, assertionId, isChecked) => {
    //     // Ajoutez ici la logique pour gérer les changements de cases à cocher
    // };

    return (
        <div className="bg-white text-sm">
            <div className=' text-center items-center mt-20'><h1 className=' text-xl'>Anglais Numero I</h1> </div>
            <DashboardDeux questions={questions} />
            <DashboardDeuxs questions={questions} />

        </div>
    );
};

export default Dashboard;











const DashboardDeux = ({ questions }) => {
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleCheckboxChange = (questionId, assertionId, isChecked) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [questionId]: {
                ...prevState[questionId],
                [assertionId]: isChecked,
            },
        }));
    };

    const handleRadioChange = (questionId, assertionId) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [questionId]: {
                [assertionId]: true,
            },
        }));
    };

    return (
        <div className=" mx-20 mt-10">
            {questions.map(question => (
                <div key={question.id} className="w-[100%] question-card mb-1 bg-white rounded-lg shadow-ms p-6 transition-transform hover:-translate-y-1">
                    <h3 className="question-title text-xl font-semibold">{question.title}</h3>
                    {question.assertionRubrics.map(assertion => (
                        <div key={assertion.id} className="assertion-item flex items-center space-x-4">
                            {question.type === 'choice' ? (
                                <input
                                    type="checkbox"
                                    id={`question-${question.id}-assertion-${assertion.id}`}
                                    checked={selectedOptions[question.id]?.[assertion.id] || false}
                                    onChange={e => handleCheckboxChange(question.id, assertion.id, e.target.checked)}
                                    className="form-checkbox text-rose-500 focus:ring-rose-500 h-4 w-4"
                                />
                            ) : (
                                <input
                                    type="radio"
                                    id={`question-${question.id}-assertion-${assertion.id}`}
                                    name={`question-${question.id}-radio`}
                                    checked={selectedOptions[question.id]?.[assertion.id] || false}
                                    onChange={() => handleRadioChange(question.id, assertion.id)}
                                    className="form-radio text-rose-500 focus:ring-rose-500 h-4 w-4"
                                />
                            )}
                            <label htmlFor={`question-${question.id}-assertion-${assertion.id}`} className="text-gray-800 hover:text-rose-500 cursor-pointer">
                                {assertion.title}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};




// Valider les types de props avec PropTypes
DashboardDeux.propTypes = {
    questions: PropTypes.array.isRequired, // Valider que 'questions' est un tableau requis
};















const DashboardDeuxs = ({ questions }) => {
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleCheckboxChange = (questionId, assertionId, isChecked) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [questionId]: {
                ...prevState[questionId],
                [assertionId]: isChecked,
            },
        }));
    };

    const handleRadioChange = (questionId, assertionId) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [questionId]: {
                [assertionId]: true,
            },
        }));
    };

    const handleSubmit = async () => {

        console.log("voici l'etat : ", selectedOptions)
        try {
            const response = await axios.post(' https://capstone-c1-emmadeko10-3.onrender.com/api/responses/add', selectedOptions);
            console.log(response.data); // Traitez la réponse de l'API comme nécessaire
        } catch (error) {
            console.error('Erreur lors de la soumission des réponses :', error);
        }
    };

    return (
        <div className="mx-20 mt-10">
            {questions.map(question => (
                <div key={question.id} className="w-[100%] question-card mb-1 bg-white rounded-lg shadow-ms p-6 transition-transform hover:-translate-y-1">
                    <h3 className="question-title text-xl font-semibold">{question.title}</h3>
                    {question.assertionRubrics.map(assertion => (
                        <div key={assertion.id} className="assertion-item flex items-center space-x-4">
                            {question.type === 'choice' ? (
                                <input
                                    type="checkbox"
                                    id={`question-${question.id}-assertion-${assertion.id}`}
                                    checked={selectedOptions[question.id]?.[assertion.id] || false}
                                    onChange={e => handleCheckboxChange(question.id, assertion.id, e.target.checked)}
                                    className="form-checkbox text-rose-500 focus:ring-rose-500 h-4 w-4"
                                />
                            ) : (
                                <input
                                    type="radio"
                                    id={`question-${question.id}-assertion-${assertion.id}`}
                                    name={`question-${question.id}-radio`}
                                    checked={selectedOptions[question.id]?.[assertion.id] || false}
                                    onChange={() => handleRadioChange(question.id, assertion.id)}
                                    className="form-radio text-rose-500 focus:ring-rose-500 h-4 w-4"
                                />
                            )}
                            <label htmlFor={`question-${question.id}-assertion-${assertion.id}`} className="text-gray-800 hover:text-rose-500 cursor-pointer">
                                {assertion.title}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Soumettre</button>
        </div>
    );
};

// Valider les types de props avec PropTypes
DashboardDeuxs.propTypes = {
    questions: PropTypes.array.isRequired, // Valider que 'questions' est un tableau requis
};


