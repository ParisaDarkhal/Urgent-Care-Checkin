import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer section gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mr-auto col-sm-6">
                        <div className="widget mb-5 mb-lg-0">
                            <div className="logo mb-4">
                                <img src="images/logo.png" alt="" className="img-fluid" />
                            </div>
                            <p className="p-4">
                                We are committed to the health and wellness of our community. As such,
                                we dedicate ourselves to being a center of excellence in providing high-quality health care.

                            </p>

                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="widget mb-5 mb-lg-0">
                            <h4 className="text-capitalize mb-3">Department</h4>
                            <div className="divider mb-4" />
                            <ul className="list-unstyled footer-menu lh-35">
                                <li>
                                Surgery 
                                </li>
                                <li>
                                    Wome's Health
                                </li>
                                <li>
                                    Radiology
                                </li>
                                <li>
                                    Cardioc
                                </li>
                                <li>
                                    Medicine
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="widget mb-5 mb-lg-0">
                            <h4 className="text-capitalize mb-3">Support</h4>
                            <div className="divider mb-4" />
                            <ul className="list-unstyled footer-menu lh-35">
                                <li>
                                    Terms &amp; Conditions
                                </li>
                                <li>
                                    Privacy Policy
                                </li>
                                <li>
                                   Company Support 
                                </li>
                                <li>
                                    FAQuestions
                                </li>
                                <li>
                                   Company Licence
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="widget widget-contact mb-5 mb-lg-0">
                            <h4 className="text-capitalize mb-3">Get in Touch</h4>
                            <div className="divider mb-4" />
                            <div className="footer-contact-block mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-email mr-3" />
                                    <span className="h6 mb-0">Support Available for 24/7</span>
                                </div>
                                <h4 className="mt-2">
                                    <a href="mailto:support@email.com">Wecareaboutyou@email.com</a>
                                </h4>
                            </div>
                            <div className="footer-contact-block">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-support mr-3" />
                                    <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                                </div>
                                <h4 className="mt-2">
                                    +233-456-6588
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-btm py-4 mt-5">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="copyright fs-5">
                                Developed with ♡ by {" Marjorie, Elizabetta and Paris!"}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                                <form action="#" className="subscribe">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Email address"
                                        required=""
                                    />
                                    <button type="submit" className="btn btn-main-2 btn-round-full">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;