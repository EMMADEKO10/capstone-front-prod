

import { useState, useEffect } from "react"
import axios from "axios"
import Loading from 'react-loading';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from "react-router-dom";



export default function Information() {
    // const { dataUser, setDataUser } = useContext(DataContext)
    const currentCours = JSON.parse(sessionStorage.getItem('currentCours'));
    const [DataInit, setDataInit] = useState(null)
    const [Data, setData] = useState(null)
    // console.log( currentCours)
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get(
                    ` https://capstone-c1-emmadeko10-3.onrender.com/api/cours/${currentCours}`
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
        // console.log("Voici les données des cours : ", DataInit)
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
            {DataInit.map((epreuve) => (
                <div key={parseInt(uuidv4())} className="relative rounded-lg border border-gray-200 shadow-sm w-[100%] m-0">
                    <NavLink to={`/epreuves/${epreuve.id}`}>
                    <div className="flex items-center gap-4 p-4">
                        <div>
                            <p className="font-medium text-gray-900 text-sm">{epreuve.title}</p>

                            <p className="line-clamp-1 text-sm text-gray-500">
                                {epreuve.description}
                                12:21PM
                            </p>
                        </div>
                    </div>
                    </NavLink>
                </div>
            ))
            }
        </>
    )
}

Information.propTypes = {
    courseId: PropTypes.number.isRequired,
};
