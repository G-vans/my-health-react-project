

function AddMedicationform() {
    return (
        <div className="Header-search">
            <h3>All Medications</h3>
            <p>Add new medication below</p>

            <div>
                <form className="Add-form">
                    <div className='inline fields'>
                        <input type='text' name='medication' placeholder="Medication name" />
                        <select name="form">
                            <option value=''></option>
                            <option value='tablet'>Tablet</option>
                            <option value='capsule'>Capsule</option>
                        </select>
                        <input type='number' name='amount' placeholder='Retail price' step='0.01' />
                        <input type='number' name='amount' placeholder='Our price' step='0.01' />
                        <input type='number' name='amount' placeholder='Savings' step='0.01' />
                    </div>
                    <br />
                    <button className='Btn-form' type='submit'>
                        Add Medication
                    </button>
                </form>
                <hr></hr>
            </div>
        </div>


    );
}

export default AddMedicationform;