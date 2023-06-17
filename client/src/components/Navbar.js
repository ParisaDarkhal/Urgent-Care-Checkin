import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
return(
<header>
  <div className="header-top-bar">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <ul className="top-bar-info list-inline-item pl-0 mb-0">
            <li className="list-inline-item">
                <i className="icofont-support-faq mr-2" />
                support@novena.com
            </li>
            <li className="list-inline-item">
              <i className="icofont-location-pin mr-2" />
              Address Ta-134/A, New York, USA{" "}
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
              <span>Call Now : </span>
              <span className="h4">823-4565-13456</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg navigation" id="navbar">
    <div className="container">
      <img src="images/logo.png" alt="" className="img-fluid" />
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarmain"
        aria-controls="navbarmain"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="icofont-navigation-menu" />
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarmain">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            < Link to="/" className="nav-link" >
              Home
            </Link>
          </li>
          <li className="nav-item nav-link">
              About
          </li>
          <li className="nav-item dropdown nav-link">
               Update your appointment
            <ul className="dropdown-menu" aria-labelledby="dropdown02">
              <li>
                <Link to="/rescheduleAppointment" className="dropdown-item">
                reschedule your appointment here
                </Link>
              </li>
              <li>
              <Link to="/cancelAppointment"  className="dropdown-item">
                cancel your appointment here
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item nav-link">Doctors</li>
          <li className="nav-item nav-link">
              Blog
          </li>
          <li className="nav-item nav-link">
              Contact
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

)
    };
    export default Home;
