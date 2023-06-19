import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { VIEW_PATIENT } from "../../utils/queries";
import "bootstrap/dist/css/bootstrap.min.css";

const CancelConfirmation = () => {
  const { patientId } = useParams();
  const { loading, data } = useQuery(VIEW_PATIENT, {
    variables: { patientId: patientId },
  });

  console.log("what is data in confirmation", data);
  const appointment = data?.patient || [];
  console.log(appointment);

  if (appointment.length === 0) {
    return <h3> No appointment has been booked</h3>;
  }
  //   console.log("the appointment is", appointment.appointments[0].appt_date);

  return (
    <div>
      {" "}
      <Navbar />
      <section className="section confirmation">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="confirmation-content text-center">
                <i className="icofont-check-circled text-lg text-color-2"></i>
                <h2 className="mt-3 mb-4">
                  {" "}
                  Hello {appointment.first_name} {appointment.last_name}
                </h2>

                <p>Your appointment was sucessfully canceled</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CancelConfirmation;
