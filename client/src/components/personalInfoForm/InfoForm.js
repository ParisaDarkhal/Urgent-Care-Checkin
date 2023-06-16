import React, { useState } from "react";
// Import the `useMutation()` hook from Apollo Client
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CREATE_PATIENT } from "../../utils/mutations";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navbar from "../Navbar";
import Footer from "../Footer";
const InfoForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    phone_number: "",
    email: "",
    insurance: "",
    reason_for_visit: "",
  });

  const [addPatient, { error }] = useMutation(CREATE_PATIENT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormState({ ...formState, [name]: value });
    console.log(formState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPatient({
        variables: { input: { ...formState } },
      });
      console.log("info please", data);
      navigate(`/bookAppointment/timeSlots/${data.addPatient.id}`);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      first_name: "",
      last_name: "",
      date_of_birth: "",
      gender: "",
      phone_number: "",
      email: "",
      insurance: "",
      reason_for_visit: "",
    });
  };

  return (
    <div>
      <Navbar />
      <section className="appoinment section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mt-3">
                <div className="feature-icon mb-3">
                  <i className="icofont-support text-lg"></i>
                </div>
                <span className="h3">Call for an Emergency Service!</span>
                <h2 className="text-color mt-3">+84 789 1256 </h2>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                <h2 className="mb-2 title-color">Book an appoinment</h2>
                <p className="mb-4">
                  Mollitia dicta commodi est recusandae iste, natus eum
                  asperiores corrupti qui velit . Iste dolorum atque similique
                  praesentium soluta.
                </p>
                <form
                  onSubmit={handleFormSubmit}
                  id="#"
                  name="appoinment-form"
                  method="post"
                  action="#"
                >
                  <div className="row">
                    <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <input
                          name="first_name"
                          id="firstName"
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          value={formState.first_name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <input
                          name="last_name"
                          id="lastName"
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          value={formState.last_name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <input
                          name="date_of_birth"
                          id="dateOfBirth"
                          type="text"
                          className="form-control"
                          placeholder="dd/mm/yy"
                          value={formState.date_of_birth}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="gender"
                          id="gender"
                          value={formState.gender}
                          onChange={handleInputChange}
                        >
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <input
                          name="phone_number"
                          id="phone"
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          value={formState.phone_number}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="johnsmith@gmail.com"
                          value={formState.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 my-2">
                      <div className="form-group">
                        <select
                          name="insurance"
                          className="form-control"
                          id="insurance"
                          value={formState.insurance}
                          onChange={handleInputChange}
                        >
                          <option>Do you have insurance?</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>{" "}
                  </div>
                  <div className="form-group-2 mb-4 my-2">
                    <textarea
                      name="reason_for_visit"
                      id="message"
                      className="form-control"
                      rows="6"
                      placeholder="Reason For Visit"
                      value={formState.reason_for_visit}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-main btn-round-full btn-success px-4"
                    type="submit"
                  >
                    Next<i className="icofont-simple-right ml-2"></i>
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

export default InfoForm;
