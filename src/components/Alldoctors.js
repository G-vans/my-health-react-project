import React, { useState, useEffect } from "react";
import Doctors from "./Doctors";


function Alldoctors({handleAddItem}) {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/doctors')
            .then((response) => response.json())
            .then((docs) => setDoctors(docs))
            .catch((err) => console.log(err));
    }, []);

    // function handleAddItem(newItem) {
    //     setMedications([...medications, newItem]);
    //   }

    return (
        <table className="Table-list">
            <tbody className="Table-body">
                <tr>
                    <th>
                        <h3>Name</h3>
                    </th>
                    <th>
                        <h3>Hospital</h3>
                    </th>
                    <th>
                        <h3>Contact</h3>
                    </th>
                </tr>
                {doctors.map((doctor, idx) => {
                    return (
                        <Doctors
                            key={doctor.id}
                            doctor={doctor}
                        />
                    );
                })}
            </tbody>
        </table>
    )
}

export default Alldoctors;