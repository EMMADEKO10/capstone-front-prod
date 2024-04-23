

import { useState, useEffect } from "react"
import axios from "axios"
import Loading from 'react-loading';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';


export default function Information({ courseId }) {
    // const { dataUser, setDataUser } = useContext(DataContext)
    const [DataInit, setDataInit] = useState(null)
    const [Data, setData] = useState(null)
    // console.log(courseId)
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await axios.get(
                    `http://localhost:3000/api/cours/${courseId}`
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
    }, [courseId], [Data]);

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
                    <div className="flex items-center gap-4 p-4">
                        <div>
                            <p className="font-medium text-gray-900 text-sm">{epreuve.title}</p>

                            <p className="line-clamp-1 text-sm text-gray-500">
                                {epreuve.description}
                                12:21PM
                            </p>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}

Information.propTypes = {
    courseId: PropTypes.number.isRequired,
};
