import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
// calling the mutation fom the mutatuion folder
import { DELETE_APPT } from "../../utils/mutations";
import { VIEW_APPOINTMENT } from "../../utils/queries";

const UpdateAppt = () => {
  const navigate = useNavigate();
  const [confirmationInput, setConfirmationInput] = useState({
    referencenumber: "",
  });
  const [deleteAppointment] = useMutation(DELETE_APPT);

  const { data, loading, error, refetch } = useQuery(VIEW_APPOINTMENT, {
    variables: { appointmentId: confirmationInput.referencenumber },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfirmationInput({ ...confirmationInput, [name]: value });
     refetch({ appointmentId: value });
  };

  const updateFormSubmit = async (e) => {
    e.preventDefault();
    if (!data || !data.appointment) {
      alert("there is no appointment with this confirmation number!");
      return;
    }
    try {
      const response = await deleteAppointment({
        variables: { appointmentId: confirmationInput.referencenumber },
      });

      return navigate(`/bookAppointment/timeSlots/${data.appointment.patient}`);
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="page-title bg-1 bgSerg">
        <div className="overlay" />
      </section>
      <section className="appoinment section ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mt-3">
                <div className="feature-icon mb-3">
                  <i className="icofont-support text-lg" />
                </div>
                <span className="h3">Call for an Emergency Service!</span>
                <h2 className="text-color mt-3">+84 789 1256 </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                <h2 className="mb-2 title-color">Update your appoitnment</h2>
                <p className="mb-4">
                  We understand that things happen! Just know that you can also
                  reschedule you appoitment!
                </p>

                <form onSubmit={updateFormSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      Enter your confirmation number:{" "}
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="referencenumber"
                      value={confirmationInput.referencenumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button className="btn btn-main btn-round-full" type="submit">
                    Reschedule
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UpdateAppt;
