import React from "react";

import Navbar from './Navbar';
import Footer from './Footer';
const Main = () => {

    return (
        <div>
            <Navbar />
            <div>
            <section className="banner">
                <div className="container">
                    <div className="row bgDoctor mb-4">
                        <div className="col-lg-6 col-md-12 col-xl-7">
                            <div className="block">
                                <div className="divider mb-3" />
                                <span className="text-uppercase text-sm letter-spacing ">
                                    We staff our clinics to keep your wait times
                                    down because we care about your time.
                                </span>
                                <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
                                <p className="mb-4 pr-5">
                                    Walk-in any time, 365 days a year
                                </p>
                                <div className="btn-container ">
                                    <a
                                        href="bookAppointment"
                                        target="_blank"
                                        className="btn btn-main-2 btn-icon btn-round-full"
                                    >
                                        Make appoinment <i className="icofont-simple-right ml-2  " />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="feature-block d-lg-flex">
                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-surgeon-alt" />
                                    </div>
                                    <span>Virtual Clinic</span>
                                    <h4 className="mb-3">Need to update your appoinment?</h4>
                                    <p className="mb-4">
                                        Check-In below to let us know when you would like to be seen
                                    </p>
                                    <a href="appoinment.html" className="btn btn-main btn-round-full">
                                        Make a appoinment
                                    </a>
                                </div>
                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-ui-clock" />
                                    </div>
                                    <span>Timing schedule</span>
                                    <h4 className="mb-3">Working Hours</h4>
                                    <ul className="w-hours list-unstyled">
                                        <li className="d-flex justify-content-between">
                                            Sun - Wed : <span>8:00 am- 11:30 pm</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            Thu - Fri : <span>8:00 am- 11:30 pm</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            Sat - sun : <span>8:00 am- 10:00 pm0</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-support" />
                                    </div>
                                    <span>Additional Services</span>
                                    <h4 className="mb-3">1-800-700-6200</h4>
                                    <ul>
                                        <li>On-site medication dispensary</li>
                                        <li>EKG</li>
                                        <li>Digital x-ray</li>
                                        <li>Lab</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            <Footer />
        </div>

    );
};
export default Main; 
