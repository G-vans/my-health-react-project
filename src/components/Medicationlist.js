import React, { useState, useEffect } from "react";
import Medication from "./Medication";


function Medicationlist() {
    const [medications, setMedications] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/medications')
            .then((response) => response.json())
            .then((medics) => setMedications(medics))
            .catch((err) => console.log(err));
    }, []);

    return (
        <table className="Table-list">
            <tbody className="Table-body">
                <tr>
                    <th>
                        <h3>Medications</h3>
                    </th>
                    <th>
                        <h3>Form</h3>
                    </th>
                    <th>
                        <h3>Retail Price</h3>
                    </th>
                    <th>
                        <h3>Our Price</h3>
                    </th>
                    <th>
                        <h3>Savings</h3>
                    </th>
                </tr>
                {medications.map((medication, idx) => {
                    return (
                        <Medication
                            key={medication.id}
                            medication={medication}
                        />
                    );
                })}
            </tbody>
        </table>
    )
}

export default Medicationlist;