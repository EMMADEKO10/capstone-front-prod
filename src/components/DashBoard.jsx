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
                const response = await axios.get(`http://localhost:3000/epreuve/${id}/questions`);
                console.log("Voici les données des questions quiz : ",response.data)
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
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto py-8">
                <h3 className="text-lg font-bold mb-4">Questions créées</h3>

                {/* ----------------------------------------------------- */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {questions.map((q) => (
                        <div key={q.id} className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="text-lg font-semibold mb-2">{q.title}</h4>
                            <p>Description: {q.description}</p>
                            <p>Type: {q.type}</p>
                            {/* <p>Date de début: {q.start_date}</p>
                            <p>Date de fin: {q.end_date}</p>
                            <p>Total de points: {q.total_marks}</p>
                            <p>Cours: {q.cours.course_name}</p> */}
                            <ul>
                                {q.assertionRubrics.map((assertion) => (
                                    <li key={assertion.id} className="flex items-center">
                                        <input
                                            type='checkbox'
                                            id={`assertion-${assertion.id}`}
                                            name={`assertion-${assertion.id}`}
                                            value={assertion.id}
                                            // onChange={(e) => handleCheckboxChange(q.id, assertion.id, e.target.checked)}
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                        />
                                        <label htmlFor={`assertion-${assertion.id}`} className="ml-2">{assertion.content}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ---------------------------------------- */}
            </div>
            <DashboardDeux questions={questions} />
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
        <div className=" mx-auto">
            {questions.map(question => (
                <div key={question.id} className="w-[80%] question-card mb-1 bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
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
