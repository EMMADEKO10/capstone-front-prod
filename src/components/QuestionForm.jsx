import { useEffect, useState } from 'react';
import axios from 'axios';
// import { RubriqueContext } from '../pages/Traveaux';
// import { RubriqueContext } from '../pages/AddEpreuves';
const QuestionForm = () => {
   
    const [questions, setQuestions] = useState([]);
     const currentEpreuve = JSON.parse(sessionStorage.getItem('epreuve'));
    const epreuveId = currentEpreuve
    console.log("VOICI LES currentEpreuve : ", currentEpreuve )

    const [formData, setFormData] = useState({
        title: '',
        type: 'choice',
        choices: [''], // Pour les choix multiples
        isMultiple: false, // Pour indiquer si la question est à choix multiples
        // epreuveId:1,
        // epreuveId: currentEpreuve,
        marks:5
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleChoicesChange = (e, index) => {
        const newChoices = [...formData.choices];
        newChoices[index] = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            choices: newChoices,
        }));
    };
    const handleAddChoice = () => {
        setFormData((prevData) => ({
            ...prevData,
            choices: [...prevData.choices, ''],
        }));
    };

    const { title, type,  marks } = formData
useEffect(() =>{
    console.log('------- + -------- + ----------- :', epreuveId);
}, [epreuveId])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(' https://capstone-c1-emmadeko10-3.onrender.com/api/question/add', { title, type, epreuveId, marks });
            sessionStorage.setItem("question", JSON.stringify(response.data.data.id));

            setQuestions((prevQuestions) => [...prevQuestions, formData]);
            // Réinitialisez le formulaire après l'envoi réussi si nécessaire

        } catch (error) {
            console.error('Error creating question:', error);
            // console.log('Error creating question:', error);

            // Gérez les erreurs ici, par exemple, afficher un message à l'utilisateur
        }

        // for(let i=0;i<formData.choices.length;i++){
        //     console.log(i);
        //         try {
        //             const response = await axios.post(' https://capstone-c1-emmadeko10-3.onrender.com/assertion/add', { title, type, epreuveId, marks });
        //             console.log(response.data); // Utilisez la réponse de l'API comme vous le souhaitez
        //             setQuestions((prevQuestions) => [...prevQuestions, formData]);
        //             // Réinitialisez le formulaire après l'envoi réussi si nécessaire

        //         } catch (error) {
        //             console.error('Error creating question:', error);
        //             // console.log('Error creating question:', error);

        //             // Gérez les erreurs ici, par exemple, afficher un message à l'utilisateur
        //         }
            
        // }
        
        const currentQuestion = JSON.parse(sessionStorage.getItem('question'));

        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA currentQuestion ", currentQuestion); 


        console.log("currentQuestion AAAAAAAA ", currentQuestion)
        for (const choice of formData.choices) {
            try {
            const choiceResponse = await axios.post(' https://capstone-c1-emmadeko10-3.onrender.com/api/assertion/add', {
                title: choice,
                description: "Ceci est la première rubrique d'assertion pour un test",
                content: "Contenu de la première rubrique d'assertion",
                isCorrect: false,
                questionId: currentQuestion, // Utilisez l'ID de la question
            });
                console.log(choiceResponse.data);
            } catch (error) {
                console.error('Error creating question:', error);
                // console.log('Error creating question:', error);

                // Gérez les erreurs ici, par exemple, afficher un message à l'utilisateur
            }
        }
    

    };
    return (
        <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Créer une question</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">Question</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">Type de question</label>
                    <select id="type" name="type" value={formData.type} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full">
                        <option value="choice">Choix multiples</option>
                        <option value="multipleChoice">Plusieurs choix à cocher</option>
                        <option value="paragraph">Réponse paragraphe</option>
                    </select>
                </div>

                {formData.type === 'choice' && (
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Choix multiples</label>
                        {formData.choices.map((choice, index) => (
                            <input key={index} type="text" value={choice} onChange={(e) => handleChoicesChange(e, index)} className="px-4 py-2 border border-gray-300 rounded-md mb-2 mr-2" />
                        ))}
                        <button type="button" onClick={handleAddChoice} className="bg-blue-500 text-white px-3 py-1 rounded-md">Ajouter un choix</button>
                    </div>
                )}
                {formData.type === 'multipleChoice' && (
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Choix multiples</label>
                        {formData.choices.map((choice, index) => (
                            <input key={index} type="text" value={choice} onChange={(e) => handleChoicesChange(e, index)} className="px-4 py-2 border border-gray-300 rounded-md mb-2 mr-2" />
                        ))}
                        <button type="button" onClick={handleAddChoice} className="bg-blue-500 text-white px-3 py-1 rounded-md">Ajouter un choix</button>
                    </div>
                )}

                <div className="flex items-center">
                    <input type="checkbox" id="isMultiple" name="isMultiple" checked={formData.isMultiple} onChange={handleChange} className="mr-2" />
                    <label htmlFor="isMultiple" className="text-sm font-semibold text-gray-700">Autoriser plusieurs choix</label>
                </div>
                <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md shadow-md mt-4">Créer la question</button>
            </form>

            {/* Section pour afficher les questions */}
            <div className="mt-8">
                <h3 className="text-lg font-bold mb-4">Questions créées</h3>
                <ul className="divide-y divide-gray-200">
                    {questions.map((q, index) => (
                        <li key={index} className="py-2">
                            <p className="font-semibold">{q.title}</p>
                            {q.type === 'choice' && (
                                <ul className="ml-4">
                                    {q.choices.map((choice, i) => (
                                        <li key={i}>
                                            <input type={q.isMultiple ? 'checkbox' : 'radio'} name={`choice-${index}`} value={choice} onChange={(e) => handleChoicesChange(e, i)} />
                                            <label className="ml-2">{choice}</label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {q.type === 'multipleChoice' && (
                                <ul className="ml-4">
                                    {q.choices.map((choice, i) => (
                                        <li key={i}>
                                            <input type="checkbox" name={`multipleChoice-${index}`} value={choice} onChange={(e) => handleChoicesChange(e, i)} />
                                            <label className="ml-2">{choice}</label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <p>{q.isMultiple ? 'Choix multiples' : 'Choix unique'}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default QuestionForm;






















// import { useState } from 'react';
// // import { RubriqueContext } from '../pages/Traveaux';
// const QuestionForm = () => {
//     const [questions, setQuestions] = useState([]);
//     const [formData, setFormData] = useState({
//         question: '',
//         type: 'choice',
//         choices: [''], // Pour les choix multiples
//         isMultiple: false, // Pour indiquer si la question est à choix multiples
//     });
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };
//     const handleChoicesChange = (e, index) => {
//         const newChoices = [...formData.choices];
//         newChoices[index] = e.target.value;
//         setFormData((prevData) => ({
//             ...prevData,
//             choices: newChoices,
//         }));
//     };
//     const handleAddChoice = () => {
//         setFormData((prevData) => ({
//             ...prevData,
//             choices: [...prevData.choices, ''],
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setQuestions((prevQuestions) => [...prevQuestions, formData]);
//         setFormData({
//             question: '',
//             type: 'choice',
//             choices: [''],
//             isMultiple: false,
//         });
//         console.log('Voici les',formData.choices)
//     };

//     return (
//         <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
//             <h2 className="text-lg font-bold mb-4">Créer une question</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="question" className="block text-sm font-semibold text-gray-700 mb-2">Question</label>
//                     <input type="text" id="question" name="question" value={formData.question} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full" />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">Type de question</label>
//                     <select id="type" name="type" value={formData.type} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full">
//                         <option value="choice">Choix multiples</option>
//                         <option value="multipleChoice">Plusieurs choix à cocher</option>
//                         <option value="paragraph">Réponse paragraphe</option>
//                     </select>
//                 </div>
             
//                 {formData.type === 'choice' && (
//                                     <div className="mb-4">
//                                         <label className="block text-sm font-semibold text-gray-700 mb-2">Choix multiples</label>
//                                         {formData.choices.map((choice, index) => (
//                                             <input key={index} type="text" value={choice} onChange={(e) => handleChoicesChange(e, index)} className="px-4 py-2 border border-gray-300 rounded-md mb-2 mr-2" />
//                                         ))}
//                                         <button type="button" onClick={handleAddChoice} className="bg-blue-500 text-white px-3 py-1 rounded-md">Ajouter un choix</button>
//                                     </div>
//                                 )}
//                                 {formData.type === 'multipleChoice' && (
//                                     <div className="mb-4">
//                                         <label className="block text-sm font-semibold text-gray-700 mb-2">Choix multiples</label>
//                                         {formData.choices.map((choice, index) => (
//                                             <input key={index} type="text" value={choice} onChange={(e) => handleChoicesChange(e, index)} className="px-4 py-2 border border-gray-300 rounded-md mb-2 mr-2" />
//                                         ))}
//                                         <button type="button" onClick={handleAddChoice} className="bg-blue-500 text-white px-3 py-1 rounded-md">Ajouter un choix</button>
//                                     </div>
//                                 )}

//                 <div className="flex items-center">
//                     <input type="checkbox" id="isMultiple" name="isMultiple" checked={formData.isMultiple} onChange={handleChange} className="mr-2" />
//                     <label htmlFor="isMultiple" className="text-sm font-semibold text-gray-700">Autoriser plusieurs choix</label>
//                 </div>
//                 <button  type="submit" className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md shadow-md mt-4">Créer la question</button>
//             </form>
//             {/* Section pour afficher les questions */}
//             <div className="mt-8">
//                 <h3 className="text-lg font-bold mb-4">Questions créées</h3>
//                 <ul className="divide-y divide-gray-200">
//                     {questions.map((q, index) => (
//                         <li key={index} className="py-2">
//                             <p className="font-semibold">{q.question}</p>
//                             {q.type === 'choice' && (
//                                 <ul className="ml-4">
//                                     {q.choices.map((choice, i) => (
//                                         <li key={i}>
//                                             <input type={q.isMultiple ? 'checkbox' : 'radio'} name={`choice-${index}`} value={choice} onChange={(e) => handleChoicesChange(e, i)} />
//                                             <label className="ml-2">{choice}</label>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                             {q.type === 'multipleChoice' && (
//                                 <ul className="ml-4">
//                                     {q.choices.map((choice, i) => (
//                                         <li key={i}>
//                                             <input type="checkbox" name={`multipleChoice-${index}`} value={choice} onChange={(e) => handleChoicesChange(e, i)} />
//                                             <label className="ml-2">{choice}</label>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                             <p>{q.isMultiple ? 'Choix multiples' : 'Choix unique'}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };
// export default QuestionForm;



















// import { useState } from 'react';

// const QuestionForm = () => {
//     const [questions, setQuestions] = useState([]);
//     const [formData, setFormData] = useState({
//         question: '',
//         type: 'choice',
//         choices: ['', ''], // Pour les choix multiples
//         isMultiple: false, // Pour indiquer si la question est à choix multiples
//         isMultipleAllCase : false
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleChoicesChange = (e, index) => {
//         const newChoices = [...formData.choices];
//         newChoices[index] = e.target.value;
//         setFormData((prevData) => ({
//             ...prevData,
//             choices: newChoices,
//         }));
//     };

//     const handleAddChoice = () => {
//         setFormData((prevData) => ({
//             ...prevData,
//             choices: [...prevData.choices, ''],
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Envoyer les données à votre backend ou effectuer d'autres actions
//         setQuestions((prevQuestions) => [...prevQuestions, formData]);
//         console.log(formData);
//         // Réinitialiser le formulaire
//         setFormData({
//             question: '',
//             type: 'choice',
//             choices: ['', ''],
//             isMultiple: false,
//             isMultipleAllCase: false
//         });
//     };

//     return (
//         <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
//             <h2 className="text-lg font-bold mb-4">Créer une question</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="question" className="block text-sm font-semibold text-gray-700 mb-2">Question</label>
//                     <input type="text" id="question" name="question" value={formData.question} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full" />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">Type de question</label>
//                     <select id="type" name="type" value={formData.type} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md w-full">
//                         <option value="choice">Choix multiples</option>
//                         <option value="multipleChoice">Plusieurs choix à cocher</option>
//                         <option value="paragraph">Réponse paragraphe</option>
//                     </select>
//                 </div>
//                 {formData.type === 'choice' && (
//                     <div className="mb-4">
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">Choix multiples</label>
//                         {formData.choices.map((choice, index) => (
//                             <input key={index} type="text" value={choice} onChange={(e) => handleChoicesChange(e, index)} className="px-4 py-2 border border-gray-300 rounded-md mb-2 mr-2" />
//                         ))}
//                         <button type="button" onClick={handleAddChoice} className="bg-blue-500 text-white px-3 py-1 rounded-md">Ajouter un choix</button>
//                     </div>
//                 )}
//                 {formData.type === 'multipleChoice' && (
//                     <div className="mb-4">
//                         <label className="block text-sm font-semibold text-gray-700 mb-2">Choix multiples</label>
//                         {formData.choices.map((choice, index) => (
//                             <input key={index} type="text" value={choice} onChange={(e) => handleChoicesChange(e, index)} className="px-4 py-2 border border-gray-300 rounded-md mb-2 mr-2" />
//                         ))}
//                         <button type="button" onClick={handleAddChoice} className="bg-blue-500 text-white px-3 py-1 rounded-md">Ajouter un choix</button>
//                     </div>
//                 )}
//                 <div className="flex items-center">
//                     <input type="checkbox" id="isMultiple" name="isMultiple" checked={formData.isMultiple} onChange={(e) => setFormData((prevData) => ({ ...prevData, isMultiple: e.target.checked }))} className="mr-2" />
//                     <label htmlFor="isMultiple" className="text-sm font-semibold text-gray-700">Autoriser plusieurs choix</label>
//                 </div>
                
//                 <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md shadow-md mt-4">Créer la question</button>
//             </form>

//             {/* Section pour afficher les questions */}
//             <div className="mt-8">
//                 <h3 className="text-lg font-bold mb-4">Questions créées</h3>
//                 <ul className="divide-y divide-gray-200">
//                     {questions.map((q, index) => (
//                         <li key={index} className="py-2">
//                             <p className="font-semibold">{q.question}</p>
//                             {q.type === 'choice' &&
//                                 (<ul className="ml-4">
//                                     {q.choices.map((choice, i) => (
//                                         <li key={i}>
//                                             <input type={q.isMultiple ? 'checkbox' : 'radio'} name={`choice-${index}`} value={choice} onChange={(e) => handleChoicesChange(e, i)} />
//                                             <label className="ml-2">{choice}</label>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                             <p>{q.isMultiple ? 'Choix multiples' : 'Choix unique'}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default QuestionForm;

