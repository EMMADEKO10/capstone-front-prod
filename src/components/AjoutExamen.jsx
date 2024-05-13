// import { useState,useContext } from 'react';
// import QuestionForm from './QuestionForm'; // Importez le composant QuestionForm ici
// import { RubriqueContext } from '../pages/Traveaux';
// const ExamForm = () => {
//     const [examData, setExamData] = useState({
//         titre: '',
//         date: '',
//     });
//     const [questionsData, setQuestionsData] = useState([]);

//     const { examenDataAll, setExamenDataAll } = useContext(RubriqueContext)
//     const handleExamChange = (e) => {
//         const { name, value } = e.target;
//         setExamData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleExamSubmit = (e) => {
//         e.preventDefault();
//         setExamData({
//             titre: '',
//             date: '',
//         });
//         if (examData !== null && examData !== undefined) {
//             setExamenDataAll(examData);
//             console.log("examenDataAll :", examData);
//         }
//         console.log('Données des questions :', questionsData);
//     };
//     const handleQuestionsSubmit = (questions) => {
//         // Récupérer les données des questions du composant QuestionForm
//         console.log(examenDataAll)
//         setQuestionsData(questions);
//     };
//     return (
//         <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
//             <h2 className="text-lg font-bold mb-4">Créer un examen</h2>
//             {/* Formulaire de l'examen */}
//             <form onSubmit={handleExamSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="titre" className="block text-sm font-semibold text-gray-700 mb-2">Titre de l``examen</label>
//                     <input type="text" id="titre" name="titre" value={examData.titre} onChange={handleExamChange} className="px-4 py-2 border border-gray-300 rounded-md w-full" />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Date de l examen</label>
//                     <input type="date" id="date" name="date" value={examData.date} onChange={handleExamChange} className="px-4 py-2 border border-gray-300 rounded-md w-full" />
//                 </div>
//                 <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md shadow-md">Enregistrer</button>
//             </form>
//             {/* Formulaire de création de questions */}
//             <QuestionForm onSubmit={handleQuestionsSubmit} />
//         </div>
//     );
// };

// export default ExamForm;













import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ExamForm = ({ setAddQuestion }) => {

    const currentCours = JSON.parse(sessionStorage.getItem('currentCours'));

    console.log("Voici le currentUser : ", currentCours)

    const [examData, setExamData] = useState({
        title: '',
        created_at: '',
        description: "Test de compétences en mathématiques",
        type: "Examen",
        start_date: "2024-04-25T09:00:00.000Z",
        end_date: "2024-04-25T12:00:00.000Z",
        total_marks: 100,
        created_by: 1,
        updated_at: "2024-04-25T12:00:00.000Z",
        idCours: parseInt(currentCours)
    });
    const [objectData, setObjectData] = useState({});
    const handleExamChange = (e) => {
        const { name, value } = e.target;
        setExamData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleExamSubmit = async (e) => {
        e.preventDefault();

        setObjectData({ ...examData });
        try {
            const response = await axios.post('https://capstone-c1-emmadeko10-3.onrender.com/api/cours/epreuve/add', examData);
            console.log("quel est la reponse EEEEEEEEEEEEEE : ", response.data.epreuve.id);
            sessionStorage.setItem("epreuve", JSON.stringify(response.data.epreuve.id));
            setAddQuestion(true)

        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer.', error);
        }
    };
    useEffect(() => {
        // console.log('EXAMEN Copied:', objectData); // Log the copied objectData examenDataAll
    }, [objectData]);

    return (
        <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Créer un examen</h2>
            {/* Formulaire de l'examen */}
            <form onSubmit={handleExamSubmit}>
                <div className="mb-4">
                    <label htmlFor="titre" className="block text-sm font-semibold text-gray-700 mb-2">Titre de l examen</label>
                    <input type="text" id="title" name="title" value={examData.title} onChange={handleExamChange} className="px-4 py-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Date de l examen</label>
                    <input type="date" id="created_at" name="created_at" value={examData.created_at} onChange={handleExamChange} className="px-4 py-2 border border-gray-300 rounded-md w-full" />
                </div>
                <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md shadow-md">Enregistrer</button>
            </form>

            {/* Formulaire de création de questions */}
            {/* <QuestionForm onSubmit={handleQuestionsSubmit} /> */}
        </div>
    );
};

ExamForm.propTypes = {
    // courseId: PropTypes.bool.isRequired,
    setAddQuestion: PropTypes.func.isRequired,
    // setSelectedCourseImage: PropTypes.func.isRequired,
};

export default ExamForm;




















// import { useState, useContext } from 'react';
// import QuestionForm from './QuestionForm';
// import { RubriqueContext } from '../pages/Traveaux';

// const ExamForm = () => {
//     const [examData, setExamData] = useState({
//         titre: '',
//         date: '',
//     });
//     const [questionsData, setQuestionsData] = useState([]);

//     const { setExamenDataAll } = useContext(RubriqueContext);

//     const handleExamChange = (e) => {
//         const { name, value } = e.target;
//         setExamData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleExamSubmit = (e) => {
//         e.preventDefault();
//         // Enregistrer les données de l'examen dans le contexte ou effectuer d'autres actions
//         if (examData.titre && examData.date) {
//             setExamenDataAll((prevExamenData) => ({
//                 ...prevExamenData,
//                 titre: examData.titre,
//                 date: examData.date,
//             }));
//             console.log("Examen soumis :", examData, questionsData);
//             // Réinitialiser les données du formulaire d'examen
//             setExamData({
//                 titre: '',
//                 date: '',
//             });
//         }
//     };

//     const handleQuestionsSubmit = (questions) => {
//         // Récupérer les données des questions du composant QuestionForm
//         setQuestionsData(questions);
//     };

//     return (
//         <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
//             <h2 className="text-lg font-bold mb-4">Créer un examen</h2>
//             {/* Formulaire de l'examen */}
//             <form onSubmit={handleExamSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="titre" className="block text-sm font-semibold text-gray-700 mb-2">Titre de l examen</label>
//                     <input type="text" id="titre" name="titre" value={examData.titre} onChange={handleExamChange} className="px-4 py-2 border border-gray-300 rounded-md w-full" />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Date de l examen</label>
//                     <input type="date" id="date" name="date" value={examData.date} onChange={handleExamChange} className="px-4 py-2 border border-gray-300 rounded-md w-full" />
//                 </div>
//                 <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md shadow-md">Enregistrer</button>
//             </form>
//             {/* Formulaire de création de questions */}
//             <QuestionForm onSubmit={handleQuestionsSubmit} />
//         </div>
//     );
// };

// export default ExamForm;

