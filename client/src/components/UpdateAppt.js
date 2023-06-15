import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
// calling the mutation fom the mutatuion folder
import { DELETE_APPT } from '../utils/mutations';


const UpdateAppt = () => {

    const [confirmationInput, setConfirmationInput] = useState(
        {
            referencenumber: ''
        }
    );
    const [deleteAppointment, {data, loading, error  }] = useMutation(DELETE_APPT);

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        console.log("Did the state update?", confirmationInput)

        setConfirmationInput({ ...confirmationInput, çname: value });
        console.log(confirmationInput);

    }

    const deleteFormSubmit = async (e) => {
        e.preventDefault();
        console.log('deleting appointment with id:', confirmationInput.name);
        try {
            const  response  = await deleteAppointment({
             variables: {appointmentId: confirmationInput.name} } )
             console.log(response);
            console.log('delete worked', confirmationInput);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <form onSubmit={deleteFormSubmit} >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Enter your confirmation number: </label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="referencenumber"
                    value={confirmationInput.referencenumber}
                    onChange={handleInputChange} />
            </div>

            <button type="submit" 
            >Submit</button>
        </form>
    );

};

export default UpdateAppt;

