import React, {useState, useEffect} from "react";
function Medicationlist() { 
    
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
                <td>
                    <p>one</p>
                </td>
            </tbody>
        </table>
    )
}

export default Medicationlist;