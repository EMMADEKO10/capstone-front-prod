
import Loading from 'react-loading';
// import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function AffichageDesCours() {
    
    const currentCours = JSON.parse(sessionStorage.getItem('currentCours'));
    const [DataInit, setDataInit] = useState(null)
    const [Data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get(
                    `http://localhost:3000/api/cours/${currentCours}`
                );
                // Extraire les épreuves de response.data
                const epreuves = response.data;

                // Mettre à jour dataUser en ajoutant les épreuves
                setDataInit(epreuves);

                setData(response.data);
            } catch (error) {
                console.error("Error fetching tweets:", error);
            }
        };
        fetchData(); // Call the function to fetch data
    }, [currentCours], [Data]);

    useEffect(() => {
        console.log("Voici les données des cours && Epreuves : ", DataInit)
    }, [DataInit], []);

    if (!DataInit) {
        return (
            <div className="timeline flex justify-center items-center w-[650px]">
                <Loading type="spin" color="#004a99" height={50} width={50} />
            </div>
        );
    }
  return (
    <>

          {DataInit.map((course) => (<div key={uuidv4()} className="w-[90%] bg-white rounded-lg overflow-hidden shadow-md border border-purple-500 h-40">
              <div className="p-4">
                  <h2 className="text-lg font-semibold text-purple-600 mb-2">{`Examen : ${course.title}`}</h2>
                  <p className="text-gray-600">Description de la carte. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-2 flex justify-end">
                      <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">Modifier</button>
                  </div>
              </div>
          </div>))}



          {/* <div className="w-[90%] h-30 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <div className="p-4">
                  <h2 className="text-lg font-semibold text-purple-700 mb-2">Titre de la carte</h2>
                  <p className="text-gray-600">Description de la carte. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          </div> */}


    </>
  )
}
